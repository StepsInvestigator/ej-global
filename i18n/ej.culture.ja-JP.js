ej.addCulture( "ja-JP", {
	name: "ja-JP",
	englishName: "Japanese (Japan)",
	nativeName: "日本語 (日本)",
	language: "ja",
	numberFormat: {
		pattern: ['-n'],
		",": ",",
		".": ".",
		groupSizes: [3],
		"NaN": "NaN (非数値)",
		negativeInfinity: "-∞",
		positiveInfinity: "+∞",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": ",",
			".": ".",
			symbol: "%"
		},
		currency: {
			pattern: ["-$n","$n"],
			groupSizes: [3],
			decimals: 0,
			",": ",",
			".": ".",
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			firstDay: 0,
			days: {
				names: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
				namesAbbr: ["日","月","火","水","木","金","土"],
				namesShort: ["日","月","火","水","木","金","土"]
			},
			months: {
				names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["午前","午前","午前"],
			PM: ["午後","午後","午後"],
			patterns: {
				d: "yyyy/MM/dd",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		},
	}
});