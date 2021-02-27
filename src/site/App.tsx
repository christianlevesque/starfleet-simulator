import * as React from "react"
import { Provider, useDispatch } from "react-redux"

import "normalize.css"
import "./App.scss"

import Footer from "@/components/footer/Footer"
import { constitution, d7 } from "@/game/ships/instances"
import SystemMap from "@/components/game/SystemMap"
import Hud from "@/components/game/Hud"
import { addShip } from "@/game/ships/store"
import store from "@/site/store"

const App = (): JSX.Element => {

	const dispatch = useDispatch()

	const player = constitution()
	player.id = "player"

	const enemy = d7()

	dispatch(addShip(player))
	dispatch(addShip(enemy))

	return (
		<Provider store={store}>
			<div className="app">
				<main className="app__body">
					<SystemMap />
					<Hud />
				</main>

				<Footer/>
			</div>
		</Provider>
	)
}

export default App