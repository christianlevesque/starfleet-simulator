import { ShipFaction } from "@/game/ships/types"

export function getShipIcon(faction: ShipFaction): string {
	if (faction === ShipFaction.Federation)
		return "B"
	else if (faction === ShipFaction.Klingon)
		return "E"
	else if (faction === ShipFaction.Romulan)
		return "Y"
}