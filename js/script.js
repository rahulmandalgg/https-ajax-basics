
// console.log(document.getElementById("title"));

document.addEventListener("DOMContentLoaded", 
	function (event) {

		function sayHello(event) {
			//console.log(event);
			this.textContent = "Said it!";
			var name = document.getElementById("name").value;
			var msg = "<h2>hello " + name + "!</h2>";		
			
			// document.getElementById("content").textContent = msg;

			document.getElementById("content").innerHTML = msg;

			if (name === "student") {
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!";

				var title = document.querySelector("h1").textContent = title;

				}

			}

			document.querySelector("button").onclick = sayHello;

			document.querySelector("body").addEventListener("mousemove", function (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
					}
				}
			);
		}
	);


// document.querySelector("button").addEventListener("click",sayHello);



