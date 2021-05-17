import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    summonerName: "",
    accountInformation: null,
    championInformation: null,
  },
  reducers: {
    setName: (state, action) => {
      state.summonerName = action.payload;
    },

    resetName: (state) => {
      state.summonerName = "";
    },

    setAcccountInformation: (state, action) => {
      state.accountInformation = action.payload;
    },

    resetAccountInformation: (state) => {
      state.accountInformation = null;
    },

    setChampionInformation: (state, action) => {
      state.championInformation = action.payload;
    },

    resetChampionInformation: (state) => {
      state.championInformation = null;
    },
  },
});

export const { setName, resetName, setAcccountInformation, resetAccountInformation, 
              setChampionInformation, resetChampionInformation } = accountSlice.actions;


export const selectSummonerName = state => state.account.summonerName;

export const selectAccountInformation = state => state.account.accountInformation;

export const selectChampionInformation = state => state.account.championInformation;


export default accountSlice.reducer;