import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
};

export const MainSlicer = createSlice({
  name: "data",
  initialState,

  reducers: {
    register: (state, action) => {
      //   console.log(action.payload.email);

      const checkPresentEmail = state.datas.find(
        (data) => data.email === action.payload.email
      );

      if (checkPresentEmail) {
        state.error = "Email already present";
      } else {
        const newData = {
          id: nanoid(),
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        };
        state.datas.push(newData);
        state.error = null; // Clear any previous errors
      }
    },

    login: (state, action) => {
      // console.log(action.payload.email, action.payload.password);
      const user = state.datas.find(
        (data) =>
          data.email === action.payload.email &&
          data.password === action.payload.password
      );

      if (user) {
        console.log("Welcome");
      } else {
        state.error = "Wrong details entered";
      }
    },
  },
});

export const { register, login } = MainSlicer.actions;
export default MainSlicer.reducer;
