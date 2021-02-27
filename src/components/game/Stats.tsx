import * as React from "react"
import { PlayerProps } from "@/game/types"

function getStatus(x: number) {
	switch(true) {
		case x >= 1:
			return "Nominal"
		case x >= 0.85:
			return "Normal"
		case x >= 0.70:
			return "Compromised"
		case x >= 0.50:
			return "Damaged"
		case x >= 0.25:
			return "Severely damaged"
		case x > 0:
			return "Critical"
		default:
			return "Destroyed"
	}
}

const Stats: React.FunctionComponent<PlayerProps> = ({ player }: PlayerProps): JSX.Element => {
	return (
		<article>
			<h1>U.S.S. Enterprise</h1>
			<p>Location: {player.solarSystem} ({player.x}, {player.y})</p>
			<table>
				<thead>
				<tr>
					<th/>
					<th/>
					<th/>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Hull</td>
					<td>{player.hp}/{player.maxHp}</td>
					<td>{getStatus(player.hp/player.maxHp)}</td>
				</tr>
				<tr>
					<td>Crew</td>
					<td>{player.crew}/{player.maxCrew}</td>
					<td>{getStatus(player.crew/player.maxCrew)}</td>
				</tr>
				<tr>
					<td>Energy</td>
					<td>{player.energy}/{player.maxEnergy}</td>
					<td>{getStatus(player.energy/player.maxEnergy)}</td>
				</tr>
				<tr>
					<td>Dilithium</td>
					<td>{player.dilithium}/{player.maxDilithium}</td>
					<td>{getStatus(player.dilithium/player.maxDilithium)}</td>
				</tr>
				</tbody>
			</table>
		</article>
	)
}

export default Stats