import * as React from "react"
import { useSelector } from "react-redux"
import { Switch, Route, NavLink } from "react-router-dom"
import { playerSelector } from "@/game/ships/store"
import Stats from "@/components/game/Stats"
import Navigation from "@/components/game/Navigation"
import { ApplicationState } from "@/tools/definitions/general"
import Tactical from "@/components/game/Tactical"
import SystemMap from "@/components/game/SystemMap"

const Hud: React.FunctionComponent = (): JSX.Element => {

	const player = useSelector(playerSelector)
	const enemies = useSelector((s: ApplicationState) => s.ships.filter(s => player && s.solarSystem === player.solarSystem && s.id !== player.id))

	return (
		<article className="lcars lcars--inner">
			<header className="lcars__heading-wrapper">
				<h2 className="lcars__heading">HUD</h2>
			</header>

			<div className="lcars__menu"/>
			<div className="lcars__inner-corner"/>
			<div className="lcars__inner-corner lcars__inner-corner--bottom"/>

			<section className="lcars__hud">
				<div className="lcars__hud-split-panel">
					<SystemMap />
				</div>
				<div className="lcars__hud-split-panel">
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
				</div>
			</section>

			<section className="lcars__footer-wrapper">

			</section>

		</article>
	)
}

export default Hud