var gameState = "ready";

function startGame() {
	if(gameState === "ready") {
		var start = document.querySelector("#start");
		start.classList.toggle("start-running");
		gameState = "running";
		document.getElementById("message").innerHTML = "Go!";
	}
}

function finishGame() {
	if(gameState === "running")
		gameState = "finished";
}

function loseGame(element) {
	if(gameState === "running") {
		element.classList.add("hit");
		gameState = "lost";
		document.getElementById("message").innerHTML = "Game over!";
	}
}

function winGame() {
	if(gameState === "running") {
		var start = document.querySelector("#finish");
		start.classList.toggle("finish-victory");
		gameState = "victory";
		document.getElementById("message").innerHTML = "Hurrrayyy!! You won!";
	}
}

function cursorOutside(e, maze) {
	console.log(e);
	if(e.target === maze && e.relatedTarget === document.documentElement)
		loseGame(document.body);
}