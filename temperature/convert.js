var decimalPlaces = 2, input;

function toNumber(string) {
	string.replace(/[^0-9.,e]/g, '');
}

function convert(id) {
	input = document.getElementById("i" + id).value;
	if (input.match(/[,]/g) != null) {
		if (input.match(/[,]/g).length > 1) {
			input = input.replaceAll(",", "");
		}
	}
	if (input.match(/[.]/g) != null) {
		if (input.match(/[.]/g).length > 1) {
			input = input.replaceAll(".", "");
		}
	}
	input = input.replaceAll(/(?![0-9.,e+-]).*/g, "");
	document.getElementById("i" + id).value = input;
	input = input.replaceAll(",", ".");
	value = parseFloat(units[id].to0(parseFloat(input)));
	if (isNaN(value)) {
		for (let i in units) {
			if (i != id) {
				document.getElementById("i" + i).value = "";
			}
		}
		console.log("value = NaN");
		return;
	}
	for (let i in units) {
		if (i != id) {
			let converted = +units[i].convert(value).toFixed(decimalPlaces);
			document.getElementById("i" + i).value = converted;
		}
	}
}