import * as React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { convertDilithium, moveShip, playerSelector } from "@/game/ships/store"

const Navigation: React.FunctionComponent = (): JSX.Element => {

	const dispatch = useDispatch()
	const [xCoord, setXCoord] = useState(0)
	const [yCoord, setYCoord] = useState(0)
	const player = useSelector(playerSelector)

	function setShipLocation() {
		dispatch(moveShip({
			id: player.id,
			x: xCoord,
			y: yCoord
		}))
		dispatch(convertDilithium(player.id))
	}

	return (
		<article>
			<form>
				<div>
					<label>X-coordinate</label>
					<input
						type="number"
						min="-5" max="5"
						step="1"
						value={xCoord}
						onChange={e => setXCoord(parseInt(e.target.value))}
					/>
				</div>
				<div>
					<label>Y-coordinate</label>
					<input
						type="number"
						min="-5"
						max="5"
						step="1"
						value={yCoord}
						onChange={e => setYCoord(parseInt(e.target.value))}
					/>
				</div>
				<div>
					<button
						type="button"
						onClick={setShipLocation}
					>
						Engage
					</button>
				</div>
			</form>
		</article>
	)
}

export default Navigation