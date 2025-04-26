import { configureStore } from "@reduxjs/toolkit";
import userReduce  from './userSlice';

const appStore = configureStore({reducer:{user:userReduce}});

export default appStore