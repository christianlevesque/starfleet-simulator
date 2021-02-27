import * as React from "react"
import { useSelector } from "react-redux"
import { Switch, Route, NavLink } from "react-router-dom"
import { playerSelector } from "@/game/ships/store"
import Stats from "@/components/game/Stats"
import Navigation from "@/components/game/Navigation"
import { ApplicationState } from "@/tools/definitions/general"
import { Simulate } from "react-dom/test-utils"
import Tactical from "@/components/game/Tactical"

const Hud: React.FunctionComponent = (): JSX.Element => {

	const player = useSelector(playerSelector)
	const enemies = useSelector((s: ApplicationState) => s.ships.filter(s => player && s.solarSystem === player.solarSystem && s.id !== player.id))

	return (
		<section className="app__panel hud">
			<h1>HUD</h1>
			<nav>
				<NavLink to="/">Status</NavLink>
				<NavLink to="/navigation">Navigation</NavLink>
				<NavLink to="/tactical">Tactical</NavLink>
			</nav>
			<Switch>
				<Route
					exact
					path="/"
				>
					<Stats player={player} />
				</Route>
				<Route path="/navigation">
					<Navigation />
				</Route>
				<Route path="/tactical">
					<Tactical
						player={player}
						enemies={enemies}
					/>
				</Route>
			</Switch>
		</section>
	)
}

export default Hud