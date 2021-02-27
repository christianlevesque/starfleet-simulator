import { createStore, combineReducers, Store, CombinedState } from "redux"
import { ApplicationState } from "@/tools/definitions/general"

const state = combineReducers({

})

const store: Store<CombinedState<ApplicationState>> = createStore(state)

export default store