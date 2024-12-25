var maxInputsPerRow = 0, newMaxInputsPerRow, previousMaxInputsPerRow;

resize();

function resize() {
	if (window.innerWidth < 700) {
		newMaxInputsPerRow = 1;
	} else if (window.innerWidth < 900) {
		newMaxInputsPerRow = 2;
	} else {
		newMaxInputsPerRow = 3;
	}
	if (newMaxInputsPerRow != maxInputsPerRow) {
		maxInputsPerRow = newMaxInputsPerRow;
		resizeInputs();	
	}
}

function resizeInputs() {
	let inputs = document.getElementsByClassName("inputContainer").length;
	if (maxInputsPerRow == 3) {
		let remainder = inputs % 3;
		let previous;
		for (let i = 0; i < (inputs - remainder); i++) {
			let previous = document.getElementsByClassName("inputContainer")[i].classList[1];
			document.getElementsByClassName("inputContainer")[i].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[i].classList.add("s" + maxInputsPerRow);
		}
		if (remainder == 2) {
			previous = document.getElementsByClassName("inputContainer")[inputs - 2].classList[1];
			document.getElementsByClassName("inputContainer")[inputs - 2].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[inputs - 2].classList.add("s2");
			previous = document.getElementsByClassName("inputContainer")[inputs - 1].classList[1];
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.add("s2");
		} else if (remainder == 1) {
			previous = document.getElementsByClassName("inputContainer")[inputs - 1].classList[1];
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.add("s1");
		}
	} else if (maxInputsPerRow == 2) {
		let remainder = inputs % 2;
		for (let i = 0; i < (inputs - remainder); i++) {
			let previous = document.getElementsByClassName("inputContainer")[i].classList[1];
			document.getElementsByClassName("inputContainer")[i].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[i].classList.add("s" + maxInputsPerRow);
		}
		if (remainder == 1) {
			previous = document.getElementsByClassName("inputContainer")[inputs - 1].classList[1];
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.remove(previous);
			document.getElementsByClassName("inputContainer")[inputs - 1].classList.add("s1");
		}
	} else if (maxInputsPerRow == 1) {
		for (let i = 0; i < inputs; i++) {
			for (let i = 0; i < inputs; i++) {
				let previous = document.getElementsByClassName("inputContainer")[i].classList[1];
				document.getElementsByClassName("inputContainer")[i].classList.remove(previous);
				document.getElementsByClassName("inputContainer")[i].classList.add("s" + maxInputsPerRow);
			}
		}
	}
}

function addUnit(id) {
	//document.getElementById("m" + id).style.display = "none";
	document.getElementById("inputs").insertAdjacentHTML('beforeend', `<div class="inputContainer s0" id="c${id}"><div class="inputTextOuter"><div class="inputTextInner">${units[id].name}:</div></div><input class="input" id="i${id}" type="text" autocomplete="off" value="${+units[id].convert(value).toFixed(decimalPlaces)}" oninput="convert(${id})"></div>`);
	resizeInputs();
}