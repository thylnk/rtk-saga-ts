import { Student } from 'models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface RankingByCity {
  cityId: string;
  randkingList: Student[];
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentList: Student[];
  lowestStudentList: Student[];
  rankingByCityList: RankingByCity[];
}

const initialState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state: DashboardState) {},
    fetchDataSuccess(state: DashboardState) {},
    featchDataFailed(state: DashboardState) {},

    setStatistics(
      state: DashboardState,
      action: PayloadAction<DashboardStatistics>
    ) {
      state.statistics = action.payload;
    },
    setHighestStudent(state: DashboardState, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload;
    },
    setLowestStudent(state: DashboardState, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload;
    },
    setRankingByCity(
      state: DashboardState,
      action: PayloadAction<RankingByCity[]>
    ) {
      state.rankingByCityList = action.payload;
    },
  },
});

// selectors

// actions
export const dashboardActions = dashboardSlice.actions;
// reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
