import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';
const LEAVE_MISSIONS = 'spacetravellers/missions/leaveMissions';
const POPULATE_MISSIONS_PROFILE = 'spacetravellers/mission/populateMissionsProfile';

const initialState = [];
const url = (id = '') => `https://api.spacexdata.com/v3/missions/${id}`;

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'spacetravellers/missions/missions/fulfilled':
      return [...action.payload];
    case 'spacetravellers/missions/joinMissions/fulfilled':
      return [
        ...state.map((mission) => (mission.id !== action.payload
          ? mission : { ...mission, reserved: true }))];
    case 'spacetravellers/missions/leaveMissions/fulfilled':
      return [
        ...state.map((mission) => (mission.id !== action.payload
          ? mission : { ...mission, reserved: false })),
      ];
    case 'spacetravellers/mission/populateMissionsProfile':
      return [...state];
    default:
      return state;
  }
};

const LoadMissions = createAsyncThunk(
    LOAD_MISSIONS,
    async () => await axios.get(url),
);

const JoinMissions = (id) => ({
    type: JOIN_MISSIONS,
    payload: id,
});

const LeaveMission = (id) => ({
    type: LEAVE_MISSIONS,
    payload: id,
});