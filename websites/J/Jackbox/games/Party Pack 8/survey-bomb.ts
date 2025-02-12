export const name = "The Poll Mine";
export const logo = "https://i.imgur.com/o4aaUox.png";

export function getPresenceData({
	playerState,
}: GameCallbackParams): PresenceData {
	switch (playerState.kind) {
		case "lobby": {
			return { state: "Waiting in lobby" };
		}
		case "waiting": {
			return { state: "Waiting" };
		}
		case "choices": {
			return { state: "Selecting a door" };
		}
		case "survey": {
			return { state: "Completing survey" };
		}
		case "postGame": {
			return { state: "Viewing the results" };
		}
	}
	return {};
}
