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
	var time = mHours + ":" + m + "." + s;
	var displayTime = h + ":" + m + "." + s + " " + session;
	var today = dayOfWeek + "," + " " + curMonth + " " + dayOfMonth + "," + " " + curYear;

	document.getElementById("clockDisp").innerText = today;
	document.getElementById("clockDisp").textContent = today;
	document.getElementById("date").innerText = displayTime;
	document.getElementById("date").textContent = displayTime;

	setTimeout(showTime, 1000);

	if(dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
		document.getElementById("period").innerText = "No School";
		document.getElementById("period").textContent = "No School";
		document.getElementById("minutesleft").innerText = "Enjoy your weekend ^-^";
	}
	else if(dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Friday") {
		if(time >= "8:20.00" && time < "9:08.00") {
			document.getElementById("period").innerText = "Period 1";
			document.getElementById("period").textContent = "Period 1";
			timeLeft(9, 9, "Period 1", "9:08 AM", "untilEnd");
			timeLeft(9, 14, "Period 2", "9:13 AM", "untilStart");
		}
		else if(time >= "9:08.00" && time < "9:13.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 14, "Period 2", "9:13 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "9:13.00" && time < "10:01.00") {
			document.getElementById("period").innerText = "Period 2";
			document.getElementById("period").textContent = "Period 2";
			timeLeft(10, 2, "Period 2", "10:01 AM", "untilEnd");
			timeLeft(10, 7, "Period 3", "10:06 AM", "untilStart");
		}
		else if(time >= "10:01.00" && time < "10:06.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(10, 7, "Period 3", "9:55 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:06.00" && time < "10:54.00") {
			document.getElementById("period").innerText = "Period 3";
			document.getElementById("period").textContent = "Period 3";
			timeLeft(10, 55, "Period 3", "10:54 AM", "untilEnd");
			timeLeft(11, 0, "Period 4", "10:59 AM", "untilStart");
		}
		else if(time >= "10:54.00" && time < "10:59.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 0, "Period 4", "10:59 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:59.00" && time < "11:47.00") {
			document.getElementById("period").innerText = "Period 4";
			document.getElementById("period").textContent = "Period 4";
			timeLeft(11, 48, "Period 4", "11:47 AM", "untilEnd");
			timeLeft(11, 53, "Period 5", "11:52 AM", "untilStart");
		}
		else if(time >= "11:47.00" && time < "11:52.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 53, "Period 5", "11:52 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:52.00" && time < "12:40.00") {
			document.getElementById("period").innerText = "Period 5";
			document.getElementById("period").textContent = "Period 5";
			timeLeft(12, 41, "Period 5", "12:40 PM", "untilEnd");
			timeLeft(12, 46, "Period 6", "12:45 PM", "untilStart");
		}
		else if(time >= "12:40.00" && time < "12:45.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(12, 46, "Period 6", "12:45 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "12:45.00" && time < "13:33.00") {
			document.getElementById("period").innerText = "Period 6";
			document.getElementById("period").textContent = "Period 6";
			timeLeft(13, 34, "Period 6", "1:33 PM", "untilEnd");
			timeLeft(13, 39, "Period 7", "1:38 PM", "untilStart");
		}
		else if(time >= "13:33.00" && time < "13:38.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 39, "Period 7", "1:38 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:38.00" && time < "14:26.00") {
			document.getElementById("period").innerText = "Period 7";
			document.getElementById("period").textContent = "Period 7";
			timeLeft(14, 27, "Period 7", "2:26 PM", "untilEnd");
			timeLeft(14, 32, "Period 8", "2:31 PM", "untilStart");
		}
		else if(time >= "14:26.00" && time < "14:31.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(14, 32, "Period 8", "2:31 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "14:31.00" && time < "15:19.00") {
			document.getElementById("period").innerText = "Period 8";
			document.getElementById("period").textContent = "Period 8";
			timeLeft(15, 20, "6B", "3:19 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day ^-^";
		}
	}
	else if(dayOfWeek == "Tuesday") {
		if(time >= "8:05.00" && time < "9:41.00") {
			document.getElementById("period").innerText = "Period 1";
			document.getElementById("period").textContent = "Period 1";
			timeLeft(9, 42, "Period 1", "9:41 AM", "untilEnd");
			timeLeft(9, 50, "3X", "9:49 AM", "untilStart");
		}
		else if(time >= "9:41.00" && time < "9:49.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 50, "3X", "9:49 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "9:49.00" && time < "10:31.00") {
			document.getElementById("period").innerText = "Period 3X";
			document.getElementById("period").textContent = "Period 3X";
			timeLeft(10, 32, "3X", "10:31 AM", "untilEnd");
			timeLeft(10, 37, "3Y", "10:36 AM", "untilStart");
		}
		else if(time >= "10:31.00" && time < "10:36.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(10, 37, "3Y", "10:36 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:36.00" && time < "11:19.00") {
			document.getElementById("period").innerText = "Period 3Y";
			document.getElementById("period").textContent = "Period 3Y";
			timeLeft(11, 20, "3Y", "11:19 AM", "untilEnd");
			timeLeft(11, 28, "5X", "11:27 AM", "untilStart");
		}
		else if(time >= "11:19.00" && time < "11:27.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 28, "5X", "11:27 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:27.00" && time < "12:12.00") {
			document.getElementById("period").innerText = "Period 5X";
			document.getElementById("period").textContent = "Period 5X";
			timeLeft(12, 13, "5X", "12:12 PM", "untilEnd");
			timeLeft(12, 13, "5Y", "12:12 PM", "untilStart");
		}
		else if(time >= "12:12.00" && time < "12:57.00") {
			document.getElementById("period").innerText = "Period 5Y";
			document.getElementById("period").textContent = "Period 5Y";
			timeLeft(12, 58, "5Y", "12:57 PM", "untilEnd");
			timeLeft(12, 58, "5Z", "12:57 PM", "untilStart");
		}
		else if(time >= "12:57.00" && time < "13:42.00") {
			document.getElementById("period").innerText = "Period 5Z";
			document.getElementById("period").textContent = "Period 5Z";
			timeLeft(13, 43, "5Z", "1:42 PM", "untilEnd");
			timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
		}
		else if(time >= "13:42.00" && time < "13:50.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:50.00" && time < "15:20.00") {
			document.getElementById("period").innerText = "Period 7";
			document.getElementById("period").textContent = "Period 7";
			timeLeft(15, 21, "Period 7", "3:20 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
		}
	}
	else if(dayOfWeek == "Wednesday") {
		if(time >= "8:05.00" && time < "9:41.00") {
			document.getElementById("period").innerText = "Period 2";
			document.getElementById("period").textContent = "Period 2";
			timeLeft(9, 42, "Period 2", "9:41 AM", "untilEnd");
			timeLeft(9, 50, "4X", "9:49 AM", "untilStart");
		}
		else if(time >= "9:41.00" && time < "9:49.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 50, "4X", "9:49 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "9:49.00" && time < "10:31.00") {
			document.getElementById("period").innerText = "Period 4X";
			document.getElementById("period").textContent = "Period 4X";
			timeLeft(10, 32, "4X", "10:31 AM", "untilEnd");
			timeLeft(10, 37, "4Y", "10:36 AM", "untilStart");
		}
		else if(time >= "10:31.00" && time < "10:36.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(10, 37, "4Y", "10:36 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:36.00" && time < "11:19.00") {
			document.getElementById("period").innerText = "Period 4Y";
			document.getElementById("period").textContent = "Period 4Y";
			timeLeft(11, 20, "4Y", "11:19 AM", "untilEnd");
			timeLeft(11, 28, "6X", "11:27 AM", "untilStart");
		}
		else if(time >= "11:19.00" && time < "11:27.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 28, "6X", "11:27 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:27.00" && time < "12:12.00") {
			document.getElementById("period").innerText = "Period 6X";
			document.getElementById("period").textContent = "Period 6X";
			timeLeft(12, 13, "6X", "12:12 PM", "untilEnd");
			timeLeft(12, 13, "6Y", "12:12 PM", "untilStart");
		}
		else if(time >= "12:12.00" && time < "12:57.00") {
			document.getElementById("period").innerText = "Period 6Y";
			document.getElementById("period").textContent = "Period 6Y";
			timeLeft(12, 58, "6Y", "12:57 PM", "untilEnd");
			timeLeft(12, 58, "6Z", "12:57 PM", "untilStart");
		}
		else if(time >= "12:57.00" && time < "13:42.00") {
			document.getElementById("period").innerText = "Period 6Z";
			document.getElementById("period").textContent = "Period 6Z";
			timeLeft(13, 43, "6Z", "1:42 PM", "untilEnd");
			timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
		}
		else if(time >= "13:42.00" && time < "13:50.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 51, "Period 8", "1:50 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:50.00" && time < "15:20.00") {
			document.getElementById("period").innerText = "Period 8";
			document.getElementById("period").textContent = "Period 8";
			timeLeft(15, 21, "Period 8", "3:20 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Late start tomorrow (8:45 AM)";
		}

	}

	else if(dayOfWeek == "Thursday") {
		if(time >= "8:45.00" && time < "9:30.00") {
			document.getElementById("period").innerText = "Period 1";
			document.getElementById("period").textContent = "Period 1";
			timeLeft(9, 31, "Period 1", "9:30 AM", "untilEnd");
			timeLeft(9, 36, "Period 2", "9:35 AM", "untilStart");
		}
		else if(time >= "9:30.00" && time < "9:35.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(9, 36, "Period 2", "9:35 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "9:35.00" && time < "10:20.00") {
			document.getElementById("period").innerText = "Period 2";
			document.getElementById("period").textContent = "Period 2";
			timeLeft(10, 21, "Period 2", "10:20 AM", "untilEnd");
			timeLeft(10, 26, "3A", "10:25 AM", "untilStart");
		}
		else if(time >= "10:20.00" && time < "10:25.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(10, 26, "3A", "10:25 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:25.00" && time < "10:45.00") {
			document.getElementById("period").innerText = "Period 3A";
			document.getElementById("period").textContent = "Period 3A";
			timeLeft(10, 46, "3A", "10:45 AM", "untilEnd");
			timeLeft(10, 51, "3B", "10:50 AM", "untilStart");
		}
		else if(time >= "10:45.00" && time < "10:50.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(10, 51, "3B", "10:50 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "10:50.00" && time < "11:10.00") {
			document.getElementById("period").innerText = "Period 3B";
			document.getElementById("period").textContent = "Period 3B";
			timeLeft(11, 11, "3B", "11:10 AM", "untilEnd");
			timeLeft(11, 16, "4A", "11:15 AM", "untilStart");
		}
		else if(time >= "11:10.00" && time < "11:15.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 16, "4A", "11:15 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:15.00" && time < "11:35.00") {
			document.getElementById("period").innerText = "Period 4A";
			document.getElementById("period").textContent = "Period 4A";
			timeLeft(11, 36, "4A", "11:35 AM", "untilEnd");
			timeLeft(11, 41, "4B", "11:40 AM", "untilStart");
		}
		else if(time >= "11:35.00" && time < "11:40.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(11, 41, "4B", "11:40 AM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "11:40.00" && time < "12:00.00") {
			document.getElementById("period").innerText = "Period 4B";
			document.getElementById("period").textContent = "Period 4B";
			timeLeft(12, 1, "4B", "12:00 PM", "untilEnd");
			timeLeft(12, 6, "5A", "12:05 PM", "untilStart");
		}
		else if(time >= "12:00.00" && time < "12:05.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(12, 6, "5A", "12:05 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "12:05.00" && time < "12:25.00") {
			document.getElementById("period").innerText = "Period 5A";
			document.getElementById("period").textContent = "Period 5A";
			timeLeft(12, 26, "5A", "12:25 PM", "untilEnd");
			timeLeft(12, 31, "5B", "12:30 PM", "untilStart");
		}
		else if(time >= "12:25.00" && time < "12:30.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(12, 31, "5B", "12:30 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "12:30.00" && time < "12:50.00") {
			document.getElementById("period").innerText = "Period 5B";
			document.getElementById("period").textContent = "Period 5B";
			timeLeft(12, 51, "5B", "12:50 PM", "untilEnd");
			timeLeft(12, 56, "6A", "12:55 PM", "untilStart");
		}
		else if(time >= "12:50.00" && time < "12:55.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(12, 56, "6A", "12:55 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "12:55.00" && time < "13:15.00") {
			document.getElementById("period").innerText = "Period 6A";
			document.getElementById("period").textContent = "Period 6A";
			timeLeft(13, 16, "6A", "1:15 PM", "untilEnd");
			timeLeft(13, 21, "6B", "1:20 PM", "untilStart");
		}
		else if(time >= "13:15.00" && time < "13:20.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 21, "6B", "1:20 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:20.00" && time < "13:40.00") {
			document.getElementById("period").innerText = "Period 6B";
			document.getElementById("period").textContent = "Period 6B";
			timeLeft(13, 41, "6B", "1:40 PM", "untilEnd");
			timeLeft(13, 46, "Period 7", "1:45 PM", "untilStart");
		}
		else if(time >= "13:40.00" && time < "13:45.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(13, 46, "Period 7", "1:45 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "13:45.00" && time < "14:30.00") {
			document.getElementById("period").innerText = "Period 7";
			document.getElementById("period").textContent = "Period 7";
			timeLeft(14, 31, "Period 7", "2:30 PM", "untilEnd");
			timeLeft(14, 36, "Period 8", "2:35 PM", "untilStart");
		}
		else if(time >= "14:30.00" && time < "14:35.00") {
			document.getElementById("period").innerText = "Passing Period";
			document.getElementById("period").textContent = "Passing Period";
			timeLeft(14, 36, "Period 8", "2:35 PM", "untilStart");
			document.getElementById("minutesleft").innerText = "";
			document.getElementById("minutesleft").textContent = "";
		}
		else if(time >= "14:35.00" && time < "15:20.00") {
			document.getElementById("period").innerText = "Period 8";
			document.getElementById("period").textContent = "Period 8";
			timeLeft(15, 21, "Period 8", "3:20 PM", "untilEnd");
		}
		else {
			document.getElementById("period").innerText = "No School";
			document.getElementById("period").textContent = "No School";
			document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
		}
	}

}

showTime();
