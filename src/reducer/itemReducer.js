import {ADD_TASK, DELETE_TASK,EDIT_TASK,COMPLETE_TASK} from "../actionstypes/actionstypes"
const initialState = []


function rootReducer(state = initialState, action) {
   switch(action.type){
     case ADD_TASK:
       return state.concat(action.payload)
       case DELETE_TASK:
         return state.filter(el =>el.key!==action.payload)
         case EDIT_TASK:
            return state.map(el =>el.key===action.payload.key?{...el,title:action.payload.title,edit:!el.edit}:el )
         default:
         return state
         
         case COMPLETE_TASK:
       return state.map(el => el.key === action.payload ? { ...el, isCompleted:!el.isCompleted } : el)
   }
}
export default rootReducer;