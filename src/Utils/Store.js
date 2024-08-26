import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AppSlice"
import movieReducer from "./MovieSlice"
import GptReducer from "./GptSlice"
import movieDetailsReducer from "./MovieDetailsSlice"

const Store = configureStore({
    reducer: {
        user : userReducer,
        movie: movieReducer,
        gpt: GptReducer,
        details: movieDetailsReducer,
    }
})

export default Store;