//your JS code here. If required.
let timer = document.getElementById("timer");

function dateTime(){
	let currentDate = new Date();

	let month = currentDate.getMonth()+1;
	let date = currentDate.getDate();
	let year = currentDate.getFullYear();

	let formattedDate = month + "/" + date + "/" + year;

	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	let period = hours >= 12 ? PM : AM;
	if(hours > 12){
		hours = hours % 12;
	}

	let formattedTime = hours + ":" + minutes + ":" + seconds + period;
	timer.append(formattedDate + ", ");
	timer.append(formattedTime);
}

setInterval(dateTime, 1000);
dateTime();