window.onload = function() {

	const canvas = document.getElementById("canvas");
	const cc = canvas.getContext("2d");

	let width = 500;
	let height = 500;
	canvas.width = canvas.height = width;

	var a = {
		x: 50,
		y: 120,
	}
	var b = {
		x: 170,
		y: 50,
	}
	var c = {
		x: 210,
		y: 170,
	}
	var d = {
		x: 300,
		y: 130,
	};
	a.connects = [b, c];
	b.connects = [a, d];
	c.connects = [a, d];
	d.connects = [b, c];

	var nodes = [a, b, c, d];

	nodes.forEach(function(node) {
		cc.fillStyle = "red";
		cc.fillRect(node.x, node.y, 5, 5);
	});



	function square(num) {
		return num * num;
	};
	function getCost(start, end) {
		if(end.x - start.x === 0) {
			return end.y - start.y;
		} else if(end.y - start.y === 0) {
			return end.x - start.x;
		} else {
			let squares_sum = square(end.x - start.x) + square(end.y - start.y);
			return Math.sqrt(squares_sum);
		};
	};

	function getHeuristic() {
	};


	function findWay(start, end) {
		let open = [start];
		let closed = [];
		function getCurrent() {
			let best = Infinity;
			open[0].connects.forEach(function(connect) {
				let current = getCost(open[0], connect);
				if(current < best) {
					best = current;
				};
			});
			console.log(best)
		};
		getCurrent();
	}; 
	findWay(a, d);

};




