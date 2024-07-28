import { createSlice } from '@reduxjs/toolkit';
import { LangType, LocalStorageKey } from '../shared/models';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    mode: '',
    color: '',
    language: LangType.Vi,
  },
  reducers: {
    setMode: (state, action) => {
      return {
        ...state,
        mode: action.payload,
      };
    },

    setColor: (state, action) => {
      return {
        ...state,
        color: action.payload,
      };
    },

    getTheme: (state) => {
      return state;
    },

    setLanguage: (state, action) => {
      localStorage.setItem(LocalStorageKey.LocalVN, action.payload);
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

export default globalSlice;
