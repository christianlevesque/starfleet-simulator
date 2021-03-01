import * as React from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import "./Lcars.scss"
import SystemMap from "@/components/game/SystemMap"
import Hud from "@/components/game/Hud"
import { goRedAlert, goYellowAlert, playerSelector, standDown } from "@/game/ships/store"
import { Ship } from "@/game/ships/types"

const LCARS: React.FunctionComponent = (): JSX.Element => {

	const dispatch = useDispatch()
	const player: Ship = useSelector(playerSelector)

	const greenAlert = () => dispatch(standDown())
	const yellowAlert = () => dispatch(goYellowAlert())
	const redAlert = () => dispatch(goRedAlert())

	return (
		<>
			{player && (
				<article className="lcars">
					<div className="lcars__heading-wrapper">
						<h1 className="lcars__heading">{player.name} &middot; {player.designation}</h1>
					</div>

					<nav className="lcars__menu lcars__button-group">
						<div className="lcars__menu-spacer"/>
						<NavLink
							className="lcars__nav-link lcars__button"
							to="/"
						>Status</NavLink>
						<NavLink
							className="lcars__nav-link lcars__button"
							to="/navigation"
						>Navigation</NavLink>
						<NavLink
							className="lcars__nav-link lcars__button"
							to="/tactical"
						>Tactical</NavLink>
						<div className="lcars__menu-spacer lcars__menu-spacer--bottom"/>
					</nav>
					<div className="lcars__inner-corner"/>
					<div className="lcars__inner-corner lcars__inner-corner--bottom"/>
					<section className="lcars__hud">
						<Hud />
					</section>

					<section className="lcars__footer-wrapper">
						<p className="lcars__heading">Location: {player.solarSystem} ({player.x}, {player.y})</p>

						<div className="lcars__button-group lcars__button-group--horizontal">
							<button
								className="lcars__button lcars__button--green-alert"
								onClick={greenAlert}
							>
								Stand Down
							</button>
							<button
								className="lcars__button lcars__button--yellow-alert"
								onClick={yellowAlert}
							>
								Yellow Alert
							</button>
							<button
								className="lcars__button lcars__button--red-alert"
								onClick={redAlert}
							>
								Red Alert
							</button>
						</div>
					</section>
				</article>
			)}
		</>
	)
}

export default LCARS