export type Route = {
	type: "ROUTE";
	icon: "string";
	color: "string";
	fontColor: "string";
	stops: [
		{
			index: 0;
			iconsBefore: string[];
			nameRus: "string";
			nameEng: "string";
			iconsAfter: string[];
			transfers: [
				{
					icons: string[];
					nameRus: "string";
					nameEng: "string";
				}
			];
			POI: [
				{
					icon: "string";
					name: "string";
				}
			];
		}
	];
};
