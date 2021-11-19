import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentNames: ["Vatsal", "Arpit"],
  subjects: ["Maths", "Science"],
  VatsalTotalClasses: 0,
  ArpitTotalClasses: 0,
  graduationList: [],
};

export const graduationSlice = createSlice({
  name: "Graduation",
  initialState,
  reducers: {
    addToTotalClasses: (state, action) => {
      console.log(action.payload.studentName);
      switch (action.payload.studentName) {
        case "Vatsal":
          state.VatsalTotalClasses++;
          break;
        case "Arpit":
          state.ArpitTotalClasses++;
          break;
        default:
          break;
      }
    },
    removeFromTotalClasses: (state, action) => {
      switch (action.payload.studentName) {
        case "Vatsal":
          state.VatsalTotalClasses--;
          break;
        case "Arpit":
          state.ArpitTotalClasses--;
          break;
        default:
          break;
      }
    },
    addToGraduationList: (state, action) => {
      switch (action.payload.studentName) {
        case "Vatsal":
          state.graduationList.push("Vatsal");
          break;
        case "Arpit":
          state.graduationList.push("Arpit");
          break;
        default:
          break;
      }
    },
    removeFromGraduationList: (state, action) => {
      switch (action.payload.studentName) {
        case "Vatsal":
          state.graduationList.pop("Vatsal");
          break;
        case "Arpit":
          state.graduationList.pop("Arpit");
          break;
        default:
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToTotalClasses,
  removeFromTotalClasses,
  addToGraduationList,
  removeFromGraduationList,
} = graduationSlice.actions;

export default graduationSlice.reducer;
