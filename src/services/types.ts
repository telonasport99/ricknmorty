export type getCharacter = {
	info: GetCharacterInfo;
	results: GetCharacterResults[];
}
export type GetCharacterInfo = {
	count: number;
	pages: number;
	next: string;
	prev?: null;
}
export type GetCharacterResultsOrigin = {
	name: string;
	url: string;
}
export type GetCharacterResultsLocation = {
	name: string;
	url: string;
}
export type GetCharacterResults = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: GetCharacterResultsOrigin;
	location: GetCharacterResultsLocation;
	image: string;
	episode: string[];
	url: string;
	created: string;
}