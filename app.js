// pin generator 
function pinGenerate() {
	const number = Math.round(Math.random() * 10000);
	const lineCount = number + "";
	if (lineCount.length == 4) {
		return number;
	} else {
		return pinGenerate();
	}
}

// calling pic generator Function 
document.getElementById("pin-generator").addEventListener("click", function () {
	const fourDigitPin = pinGenerate();
	const getTag = document.getElementById("pin-display");
	getTag.value = fourDigitPin;
});

document.getElementById("key-pad").addEventListener("click", function (event) {
	const number = event.target.innerText;

	const getTag = document.getElementById("typed-display");

	if (isNaN(number)) {
		if (number == "C") {
			getTag.value = "";
		}
	} else {
		const previouNumber = getTag.value;
		const newNumber = previouNumber + number;

		getTag.value = newNumber;
	}
});

document.getElementById('pin-check').addEventListener('click', function () {

	const getTagGenerator = document.getElementById("pin-display").value;
	const getTagCalc = document.getElementById("typed-display").value;

	const getTagNotifySucess =document.getElementById('notify-success');
	const getTagNotifyFail =document.getElementById('notify-fail');

	if (getTagGenerator == getTagCalc) {
		getTagNotifySucess.style.display = 'block';
		getTagNotifyFail.style.display = "none";
	}
	else {
		getTagNotifyFail.style.display='block'
		getTagNotifySucess.style.display='none'
	}

	
})
