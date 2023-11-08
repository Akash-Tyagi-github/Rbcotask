import { createSlice } from '@reduxjs/toolkit'

export const addSlice = createSlice({
    name: 'add',
    initialState: {
        value: "",
        value1:""
    },
    reducers: {
        add: (state,action) => {
            state.value = action.payload
        },
        addTo:(state,action) => {
            state.value1 = action.payload
        }

    },
})

export const { add ,addTo} =addSlice.actions
export default addSlice.reducer
