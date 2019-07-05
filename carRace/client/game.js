const connection=new WebSocket('ws://localhost:9090');
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let car1 = null;
let car2 = null;
let cone = null;
let background = null;
let road = null;
let gameOver = null;
let current_player_arrow = null;
let ready = null;
let restart = null;
let speedSound = null;
let basePos = 0;

loadGame();

connection.onopen = function(e) {
	console.log("Connection established!");
};

connection.onmessage = function(e) {
	console.log(e.data);
};

function loadGame(){
	canvas.style.border = "1px solid black";
	
	car1 = new Image();
	car2 = new Image();
	background = new Image();
	road = new Image();
	gameOver = new Image();
	current_player_arrow = new Image();
	ready = new Image();
	restart = new Image();
	cone = new Image();
	speedSound= new Audio();
	
	car1.src = "images/car1.png";
	car2.src = "images/car2.png";
	cone.src = "images/cone2.png";
	background.src = "images/background.png";
	road.src = "images/road.png";
	gameOver.src = "images/game_over.png";
	current_player_arrow.src = "images/current_player_arrow.png";
	ready.src = "images/ready.png";
	restart.src = "images/restart.png";
	speedSound.src="sounds/car_speed.wav";
	
	context.drawImage(background, basePos, basePos, background.width, background.height, basePos, basePos, canvas.width, canvas.height);
	context.drawImage(road, basePos, canvas.height * 0.6, canvas.width, road.height * 4);
	context.drawImage(road, basePos, canvas.height * 0.1, canvas.width, road.height * 4);
	
	context.drawImage(car1, basePos, canvas.height * 0.6 + (road.height * 3) / 2);
	context.drawImage(car2, basePos, canvas.height * 0.1 + (road.height * 3) / 2);
	
	context.drawImage(cone, 300, canvas.height * 0.1);
	context.drawImage(cone, 300, canvas.height * 0.6);
	
	
}