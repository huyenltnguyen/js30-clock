let secondsToDeg = new Date().getSeconds() * 6 + 90;
let minutesToDeg = new Date().getMinutes() * 6 + 90;
let hoursToDeg = new Date().getHours() * 30 + 90;

function updateHands() {
	secondsToDeg += 6;

	if ((secondsToDeg - 90) % 360 === 0) {
		minutesToDeg += 6;		
	}

	if ((minutesToDeg - 90) % 360 === 0) {
		hoursToDeg += 30;
	}	

	document.querySelector('.second-hand').style.transform = `rotate(${secondsToDeg}deg)`;
	document.querySelector('.minute-hand').style.transform = `rotate(${minutesToDeg}deg)`;
	document.querySelector('.hour-hand').style.transform = `rotate(${hoursToDeg}deg)`;	
}

setInterval(updateHands, 1000);