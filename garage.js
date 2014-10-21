function init() {
	// all done, draw first frame.
	draw();
}

function draw() {
	var context = document.getElementById('graphics').getContext('2d');
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;

	// Just draw the super sketchy mockup... let's say an inch is 2 pixels
	drawBox(264, 264, 'rgba(100, 100, 100, 0)', 100, 100, context); // garage
	drawBox(59, 149, 'yellow', 120, 120, context); // fiat 850
}

function drawBox(widthInches, heightInches, colour, x, y, context) {
	// TODO: Label!!!
	context.beginPath();
	context.rect(x, y, widthInches * 2, heightInches * 2);
	context.fillStyle = colour;
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();
}