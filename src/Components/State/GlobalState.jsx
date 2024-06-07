// GlobalState.js
import React, { createContext, useContext, useReducer } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [open, dispatch] = useReducer(popupReducer, false);

  return (
    <GlobalStateContext.Provider value={{ open, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const openPopup = (dispatch) => {
  dispatch({ type: 'OPEN_POPUP' });
};

export const closePopup = (dispatch) => {
  dispatch({ type: 'CLOSE_POPUP' });
};

const popupReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_POPUP':
      return true;
    case 'CLOSE_POPUP':
      return false;
    default:
      return state;
  }
};
