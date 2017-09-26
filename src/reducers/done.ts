import { AddDoneAction, LoadDoneAction, OtherAction, RemoveDoneAction, TypeKeys } from "@src/actions";
import { TodoFields } from "@src/generated/sobs";
// done state for global state
export type DoneState = TodoFields[];

type Action = AddDoneAction
              | RemoveDoneAction
              | LoadDoneAction
              | OtherAction; // other action is used for ensure default condition is present!

const initState: DoneState = [];

const doneReducer = (state: TodoFields[] = initState, action: Action): TodoFields[] => {
    switch (action.type) {
        case TypeKeys.ADD_DONE:
            // why not array push? because each state has to be a completely new object
            // array push modifiys the current object (state) instead of generating a new one
            // this is shorthand for state.concat([action.add])
          return [...state, action.add];
        case TypeKeys.REMOVE_DONE:
            return state.filter((element) => element.id !== action.done.id);
        case TypeKeys.LOAD_DONE:
            return action.done;
        default:
            return state;
    }
};

export default doneReducer;
