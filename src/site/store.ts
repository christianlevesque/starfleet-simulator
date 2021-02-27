import { createStore, combineReducers, Store, CombinedState } from "redux"
import { ApplicationState } from "@/tools/definitions/general"
import shipsReducer from "@/game/ships/store"

const state = combineReducers({
	ships: shipsReducer
})

const store: Store<CombinedState<ApplicationState>> = createStore(
	state,
	// @ts-ignore
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store