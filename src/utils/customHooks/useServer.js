import React, { useEffect, useReducer } from "react";
let actionTypes = {
  GET_DATA: "GET_DATA",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  GET_DATA_FAILED: "GET_DATA_FAILED",
};
let action = {
  getData: (payload) => {
    return {
      type: actionTypes.GET_DATA,
      payload,
    };
  },
  getDataSuccess: (payload) => {
    return {
      type: actionTypes.GET_DATA_SUCCESS,
      payload,
    };
  },
  getDataFailed: (error) => {
    return {
      type: actionTypes.GET_DATA_FAILED,
      error,
    };
  },
};
let initialState = {
  isLoading: false,
  isError: false,
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case actionTypes.GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

function useServer(axiosCallBack) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getServer = async () => {
      try {
        dispatch(action.getData());
        const dataFromServer = await axiosCallBack();

        console.log("Data from server", dataFromServer);

        dispatch(action.getDataSuccess(dataFromServer?.data));
      } catch (error) {
        console.log("ERROR", error);
        dispatch(action.getDataFailed(error));
      }
    };
    getServer();
  }, []);
  const { isLoading, isError, data } = state;
  return { isLoading, isError, data };
}

export default useServer;
