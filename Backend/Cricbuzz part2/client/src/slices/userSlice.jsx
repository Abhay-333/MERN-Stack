import { createSlice } from "@reduxjs/toolkit";

export const userSclice = createSlice({
    name:"user",
    initialState:{
        _id:"",
        email:"",
        picture:"",
        role:"",
        name:"",
    },
    reducers:{
        setUser:(state,payload)=>{

        }
    }
})