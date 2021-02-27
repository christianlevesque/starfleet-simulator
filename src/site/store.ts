import { createStore, combineReducers, Store, CombinedState } from "redux"
import { ApplicationState } from "@/tools/definitions/general"
import shipsReducer from "@/game/ships/store"

const state = combineReducers({
	ships: shipsReducer
})

const store: Store<CombinedState<ApplicationState>> = createStore(state)

export default store