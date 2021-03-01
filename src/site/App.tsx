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
import LCARS from "@/site/LCARS"

const App = (): JSX.Element => {

	const dispatch = useDispatch()

	const player = constitution()
	player.id = "player"
	player.name = "USS Enterprise"
	player.designation = "NCC-1701"

	const enemy = d7()

	dispatch(addShip(player))
	dispatch(addShip(enemy))

	return (
		<Provider store={store}>
			<div className="app">
				<main className="app__body">
					<LCARS />
				</main>

				<Footer/>
			</div>
		</Provider>
	)
}

export default App