import { ADD_DATA, UPDATE_DATA, DELETE_DATA } from "./Action";

const initialState = [
    {
        "id":1,
    "name" :"surya"
    }
]

function Reducer(state = initialState, action) {
    var newData   ;
    switch (action.type) {
        case ADD_DATA:
            newData = [...state]
            newData = newData.push(action.payload)
            return newData
        case UPDATE_DATA:
            state.map((data) => {
                if (data.id === action.payload.id) {
                  return {
                    item: action.payload.item,
                  };
                }
                return data;
              });
            return
        case DELETE_DATA:
            newData = [...state]
            newData = newData.filter(data => ( data.id !== action.payload ))
            return newData;
        default:
            break;
    }
    return state
}

export default Reducer