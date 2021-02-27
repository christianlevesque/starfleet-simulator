import * as React from "react"
import { useSelector } from "react-redux"
import { Switch, Route, NavLink } from "react-router-dom"
import { playerSelector } from "@/game/ships/store"
import Stats from "@/components/game/Stats"
import Navigation from "@/components/game/Navigation"

const Hud: React.FunctionComponent = (): JSX.Element => {

	const player = useSelector(playerSelector)

	return (
		<section className="app__panel hud">
			<h1>HUD</h1>
			<nav>
				<NavLink to="/">Status</NavLink>
				<NavLink to="/nav">Navigation</NavLink>
			</nav>
			<Switch>
				<Route
					exact
					path="/"
				>
					<Stats player={player} />
				</Route>
				<Route path="/nav">
					<Navigation />
				</Route>
			</Switch>
		</section>
	)
}

export default Hud