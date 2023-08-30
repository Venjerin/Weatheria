
const SET_WEEK_DATA = "SET_WEEK_DATA";
const SET_HOURS_DATA = "SET_HOURS_DATA";
const SET_DATA = "SET_DATA";


let initialState = {
  currentData: 'week'
};


export type IState = typeof initialState;

const tabsReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        currentData: action.payload
      };
    default:
      return state;
  }
};


export const setWeekData = () => ({type: SET_WEEK_DATA})
export const setHoursData = () => ({type: SET_HOURS_DATA})
export const setData = (data: string) => ({type: SET_DATA, payload: data})


export const getTabsData = (key: string) => (dispatch: any) => {
    dispatch(setData(key))
}
export default tabsReducer;