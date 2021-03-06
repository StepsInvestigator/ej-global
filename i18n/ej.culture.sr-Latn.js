ej.addCulture( "sr-Latn", {
	name: "sr-Latn",
	englishName: "Serbian (Latin)",
	nativeName: "srpski",
	language: "sr-Latn",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": ".",
		".": ",",
		negativeInfinity: "-beskonačnost",
		positiveInfinity: "+beskonačnost",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "din."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],
				namesAbbr: ["ned.","pon.","ut.","sr.","čet.","pet.","sub."],
				namesShort: ["ne","po","ut","sr","če","pe","su"]
			},
			months: {
				names: ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],
				namesAbbr: ["jan.","feb.","mart","apr.","maj","jun","jul","avg.","sept.","okt.","nov.","dec.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"n.e.","start":null,"offset":0}],
			patterns: {
				d: "d.M.yyyy.",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy."
			}
		}
	}
});