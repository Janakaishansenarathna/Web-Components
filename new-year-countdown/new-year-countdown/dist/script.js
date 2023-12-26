var mainContent = document.querySelector(".main-content");
var text = document.querySelector(".happy-new-year");

var timer = setInterval(newYear, 1000);
var countDate = new Date("Jan 01, 2023 00:00:00").getTime();

function newYear() {
	var now = new Date().getTime();
	var gap = countDate - now;

	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;

	var d = Math.floor(gap / day);
	var h = Math.floor((gap % day) / hour);
	var m = Math.floor((gap % hour) / minute);
	var s = Math.floor((gap % minute) / second);

	document.querySelector("#d1").innerText = d;
	document.querySelector("#h1").innerText = h;
	document.querySelector("#m1").innerText = m;
	document.querySelector("#s1").innerText = s;

	if (d == 0 && h == 0 && m == 0 && s == 0) {
		clearInterval(timer);
		celebrate();
	}
}

function celebrate() {
	mainContent.classList.add("fade");
	setTimeout(() => {
		text.style.display = "block";
	}, 1000);
}