(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.

		(function() {

			// Settings.

			var settings = {

					// Images (in the format of 'url': 'alignment').

						images1: {
							'images/bg01.jpg': 'center',
							'images/bg02.jpg': 'center',
							'images/bg03.jpg': 'center'
						},
						images2: {
							'images/bg02.jpg': 'center',
							'images/bg01.jpg': 'center',
							'images/bg03.jpg': 'center'
						},
						images3: {
							'images/bg03.jpg': 'center',
							'images/bg02.jpg': 'center',
							'images/bg01.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

	    
            var num = Math.floor(Math.random() * 3) + 1;
            if(num == 1) {
                // Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images1) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images1[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);
                }
            }
            else if(num == 2) {
                // Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images2) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images2[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);
                }
            }
	    
            else {
                // Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images3) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images3[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);
                }
            }


			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

})();

function showTime(){

	var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	h = objToday.getHours();
	m = objToday.getMinutes();
	s = objToday.getSeconds();
	var session = h >= 12 ? "PM" : "AM";
	h = h % 12;
	h = h ? h : 12;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	function timeLeft(endHour, endMinute, periodName, endTime, type) {

		var dateEndTime = new Date(1000, 0, 1, endHour, endMinute);
		var dateRightNow = new Date();
		dateRightNow.setFullYear(1000, 0, 1);

		timeDiff = dateEndTime - dateRightNow;
		minutesApart = Math.floor((timeDiff/1000)/60);

		if(type == "untilEnd") {

			if(minutesApart <= 0) {
				document.getElementById("minutesleft").innerText = "";
				document.getElementById("minutesleft").textContent = "";
				// change test below
				document.getElementById("untilstart").innerText = "";
				document.getElementById("untilstart").textContent = "";
				// end of change
			}
			else if(minutesApart == 1) {
				document.getElementById("minutesleft").innerText = minutesApart + " " + "minute until " + periodName + " " + "ends " + "(" + endTime + ")";
				document.getElementById("minutesleft").textContent = minutesApart + " " + "minute until " + periodName + " " + "ends " + "(" + endTime + ")";
			}
			else {
				document.getElementById("minutesleft").innerText = minutesApart + " " + "minutes until " + periodName + " " + "ends " + "(" + endTime + ")";
				document.getElementById("minutesleft").textContent = minutesApart + " " + "minutes until " + periodName + " " + "ends " + "(" + endTime + ")";
			}

		}
		else if(type == "untilStart") {

			if(minutesApart <= 0) {
				document.getElementById("untilstart").innerText = "";
				document.getElementById("untilstart").textContent = "";
				// change test below
				document.getElementById("minutesleft").innerText = "";
				document.getElementById("minutesleft").textContent = "";
				// end of change
			}
			else if(minutesApart == 1) {
				document.getElementById("untilstart").innerText = minutesApart + " " + "minute until " + periodName + " " + "starts " + "(" + endTime + ")";
				document.getElementById("untilstart").textContent = minutesApart + " " + "minute until " + periodName + " " + "starts " + "(" + endTime + ")";
			}
			else {
				document.getElementById("untilstart").innerText = minutesApart + " " + "minutes until " + periodName + " " + "starts " + "(" + endTime + ")";
				document.getElementById("untilstart").textContent = minutesApart + " " + "minutes until " + periodName + " " + "starts " + "(" + endTime + ")";
			}

		}

	}

	mHours = objToday.getHours();
	mMinutes = objToday.getMinutes();
	mSeconds = objToday.getSeconds();

	var mHours = objToday.getHours();
	// if using 24 hour format, we can compare two times as strings. 
	// However, if the hours is only one digit, we must add 0 in front.
	if(mHours < 10) {
		mHours = "0" + mHours;	
	}
	var time = mHours + ":" + m + "." + s;
	var displayTime = h + ":" + m + "." + s + " " + session;
	var today = dayOfWeek + "," + " " + curMonth + " " + dayOfMonth + "," + " " + curYear;
	
	//console.log(time);
	
	// change tab title to this format: "time : period"
	// document.title = time;

	document.getElementById("clockDisp").innerText = today;
	document.getElementById("clockDisp").textContent = today;
	document.getElementById("date").innerText = displayTime;
	document.getElementById("date").textContent = displayTime;

	// May change to setTimeout(showTime, 1000); or setInterval(showTime, 1000); 
	// Question is, how precise must my timing be?
	//setInterval(showTime, 1000);
	setTimeout(showTime, 1000);
	
	// Schedule according to 2019-2020 School Year
	// Support for major holidays and winter/spring break will be added soon

	var curPeriod = "No School";
	
	// log: make var greeting that changes based on holiday, special events, etc.
	if(dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
		document.getElementById("minutesleft").innerText = "Enjoy your weekend ^-^";
	}
	else if(dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Friday") {
		if(time >= "07:30.00" && time < "08:15.00") {
			if(dayOfWeek == "Monday") {
				curPeriod = "Staff Learning Hours";
			}
			else {
				curPeriod = "Office Hours";
			}	
			timeLeft(8, 16, curPeriod, "8:15 AM", "untilEnd");
			timeLeft(8, 21, "Period 1", "8:20 AM", "untilStart");	
		}
		else if(time >= "08:15.00" && time < "08:20.00") {
			curPeriod = "Passing Period";
			timeLeft(8, 21, "Period 1", "8:20 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "08:20.00" && time < "09:08.00") {
			curPeriod = "Period 1";
			timeLeft(9, 9, curPeriod, "9:08 AM", "untilEnd");
			timeLeft(9, 14, "Period 2", "9:13 AM", "untilStart");
		}
		else if(time >= "09:08.00" && time < "09:13.00") {
			curPeriod = "Passing Period";
			timeLeft(9, 14, "Period 2", "9:13 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "09:13.00" && time < "10:01.00") {
			curPeriod = "Period 2";
			timeLeft(10, 2, curPeriod, "10:01 AM", "untilEnd");
			timeLeft(10, 7, "Period 3", "10:06 AM", "untilStart");
		}
		else if(time >= "10:01.00" && time < "10:06.00") {
			curPeriod = "Passing Period";
			timeLeft(10, 7, "Period 3", "10:06 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:06.00" && time < "10:54.00") {
			curPeriod = "Period 3";
			timeLeft(10, 55, curPeriod, "10:54 AM", "untilEnd");
			timeLeft(11, 0, "Period 4", "10:59 AM", "untilStart");
		}
		else if(time >= "10:54.00" && time < "10:59.00") {
			curPeriod = "Passing Period";
			timeLeft(11, 0, "Period 4", "10:59 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:59.00" && time < "11:47.00") {
			curPeriod = "Period 4";
			timeLeft(11, 48, curPeriod, "11:47 AM", "untilEnd");
			timeLeft(11, 53, "Period 5", "11:52 AM", "untilStart");
		}
		else if(time >= "11:47.00" && time < "11:52.00") {
			curPeriod = "Passing Period";
			timeLeft(11, 53, "Period 5", "11:52 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:52.00" && time < "12:40.00") {
			curPeriod = "Period 5";
			timeLeft(12, 41, curPeriod, "12:40 PM", "untilEnd");
			timeLeft(12, 46, "Period 6", "12:45 PM", "untilStart");
		}
		else if(time >= "12:40.00" && time < "12:45.00") {
			curPeriod = "Passing Period";
			timeLeft(12, 46, "Period 6", "12:45 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "12:45.00" && time < "13:33.00") {
			curPeriod = "Period 6";
			timeLeft(13, 34, curPeriod, "1:33 PM", "untilEnd");
			timeLeft(13, 39, "Period 7", "1:38 PM", "untilStart");
		}
		else if(time >= "13:33.00" && time < "13:38.00") {
			curPeriod = "Passing Period";
			timeLeft(13, 39, "Period 7", "1:38 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:38.00" && time < "14:26.00") {
			curPeriod = "Period 7";
			timeLeft(14, 27, curPeriod, "2:26 PM", "untilEnd");
			timeLeft(14, 32, "Period 8", "2:31 PM", "untilStart");
		}
		else if(time >= "14:26.00" && time < "14:31.00") {
			curPeriod = "Passing Period";
			timeLeft(14, 32, "Period 8", "2:31 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "14:31.00" && time < "15:19.00") {
			curPeriod = "Period 8";
			timeLeft(15, 20, curPeriod, "3:19 PM", "untilEnd");
			timeLeft(15, 20, "Office Hours", "3:19 PM", "untilStart");
		}
		else if(time >= "15:19.00" && time < "15:30.00") {
			curPeriod = "Office Hours";
			timeLeft(15, 31, curPeriod, "3:30 PM", "untilEnd");
		}
		else {
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day ^-^";
		}
	}
	else if(dayOfWeek == "Wednesday") {
		if(time >= "07:30.00" && time < "08:15.00") {
			document.getElementById("period").innerText = "Profressional Development";
			document.getElementById("period").textContent = "Profressional Development";
			timeLeft(8, 16, "Profressional Development", "8:15 AM", "untilEnd");
			timeLeft(8, 21, "Period 1", "8:20 AM", "untilStart");
		}
		else if(time >= "08:15.00" && time < "08:20.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(8, 21, "Period 3", "8:20 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "08:20.00" && time < "09:48.00") {
			document.getElementById("period").innerText = "Period 3";
			document.getElementById("period").textContent = "Period 3";
			timeLeft(9, 49, "Period 3", "9:48 AM", "untilEnd");
			timeLeft(9, 54, "Period 1", "9:53 AM", "untilStart");
		}
		else if(time >= "09:48.00" && time < "09:53.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 54, "Period 1", "9:53 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "09:53.00" && time < "11:25.00") {
			document.getElementById("period").innerText = "Period 1";
			document.getElementById("period").textContent = "Period 1";
			timeLeft(11, 26, "Period 1", "11:25 AM", "untilEnd");
			timeLeft(11, 31, "Period 7", "11:30 AM", "untilStart");
		}
		else if(time >= "11:25.00" && time < "11:30.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 31, "Period 7", "11:30 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:30.00" && time < "13:46.00") {
			document.getElementById("period").innerText = "Period 7";
			document.getElementById("period").textContent = "Period 7";
			timeLeft(13, 47, "Period 7", "1:46 PM", "untilEnd");
			timeLeft(13, 52, "Period 5", "1:51 PM", "untilStart");
		}
		else if(time >= "13:46.00" && time < "13:51.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 52, "Period 5", "1:51 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:51.00" && time < "15:19.00") {
			document.getElementById("period").innerText = "Period 5";
			document.getElementById("period").textContent = "Period 5";
			timeLeft(15, 20, "Period 5", "3:19 PM", "untilEnd");
			timeLeft(15, 20, "Office Hours", "3:19 PM", "untilStart");
		}
		else if(time >= "15:19.00" && time < "15:30.00") {
			document.getElementById("period").innerText = "Office Hours";
			document.getElementById("period").textContent = "Office Hours";
			timeLeft(15, 31, "Office Hours", "3:30 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
		}
	}
	else if(dayOfWeek == "Thursday") {
		if(time >= "07:30.00" && time < "08:15.00") {
			// Staff Meeting 2nd Thursday of every month
			document.getElementById("period").innerText = "Office Hours";
			document.getElementById("period").textContent = "Office Hours";
			timeLeft(8, 16, "Profressional Development", "8:15 AM", "untilEnd");
			timeLeft(8, 21, "Period 4", "8:20 AM", "untilStart");
		}
		else if(time >= "08:15.00" && time < "08:20.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(8, 21, "Period 4", "8:20 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "08:20.00" && time < "09:48.00") {
			document.getElementById("period").innerText = "Period 4";
			document.getElementById("period").textContent = "Period 4";
			timeLeft(9, 49, "Period 4", "9:48 AM", "untilEnd");
			timeLeft(9, 54, "Period 2", "9:53 AM", "untilStart");
		}
		else if(time >= "09:48.00" && time < "09:53.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 54, "Period 2", "9:53 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "09:53.00" && time < "11:25.00") {
			document.getElementById("period").innerText = "Period 2";
			document.getElementById("period").textContent = "Period 2";
			timeLeft(11, 26, "Period 2", "11:25 AM", "untilEnd");
			timeLeft(11, 31, "Period 8", "11:30 AM", "untilStart");
		}
		else if(time >= "11:25.00" && time < "11:30.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 31, "Period 8", "11:30 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:30.00" && time < "13:46.00") {
			document.getElementById("period").innerText = "Period 8";
			document.getElementById("period").textContent = "Period 8";
			timeLeft(13, 47, "Period 8", "1:46 PM", "untilEnd");
			timeLeft(13, 52, "Period 6", "1:51 PM", "untilStart");
		}
		else if(time >= "13:46.00" && time < "13:51.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 28, "Period 6", "1:51 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:51.00" && time < "15:19.00") {
			document.getElementById("period").innerText = "Period 6";
			document.getElementById("period").textContent = "Period 6";
			timeLeft(15, 20, "Period 6", "3:19 PM", "untilEnd");
			timeLeft(15, 20, "Office Hours", "3:19 PM", "untilStart");
		}
		else if(time >= "15:19.00" && time < "15:30.00") {
			document.getElementById("period").innerText = "Office Hours";
			document.getElementById("period").textContent = "Office Hours";
			timeLeft(15, 31, "Office Hours", "3:30 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
		}
	}
	// "var displayTime" is in 12hr format while "var time" is in 24hr format.
	document.title = curPeriod + " | " + displayTime;
	document.getElementById("period").innerText = curPeriod;
	document.getElementById("period").textContent = curPeriod;
}

showTime();
