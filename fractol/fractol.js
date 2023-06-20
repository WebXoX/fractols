window.addEventListener("load",function(){
	const canvas = this.document.getElementById("canva1");
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth *0.8;
	canvas.height = window.innerHeight*0.8;

	ctx.fillStyle = "green";
	ctx.strokeStyle = "gold"; // line css
	ctx.lineWidth = 10;
	ctx.lineCap = "round";	// line css end
	ctx.shadowColor = 'rgba(0,0,0,0.7)';
	ctx.shadowOffsetX =10;
	ctx.shadowOffsetY = 5;
	// ctx.shadowBlur =10;

 

	let size =200;
	let side = 8;
	let maxLevel =8;
	let scale =0.5;
	let spread =0.5;
	let branch =2;
	let color ="hsl(0,100%,50%)"
	
	function drawBranch(level){
		if (level > maxLevel) return;
		ctx.beginPath();	// closes drawn paths,, puts pencil down
		ctx.moveTo(0,0);
		ctx.lineTo(size,0);	// drawing till end point
		ctx.stroke();
	// 		draws it
	for(let i = 0;i<branch;i++){
		
		ctx.save();
		ctx.translate(size -(size/branch)*i,0);
		ctx.rotate(spread);
		ctx.scale(scale, scale);
		drawBranch(level + 1);
		ctx.restore();

		ctx.save();
		ctx.translate(size-(size/branch)*i,0);
		ctx.rotate(-spread);
		ctx.scale(scale, scale);
		drawBranch(level + 1);
		ctx.restore();
	}
	}
	
	// ctx.scale(1, 2);
	// ctx.scale(10, 2);
	// ctx.scale(10, 2);
	// drawBranch(0);
	
	
	function drawFractol  (){
		ctx.save();
	ctx.translate(canvas.width/2,canvas.height/2);

	for(let i = 0;i<side;i++){
		// ctx.beginPath();	// closes drawn paths,, puts pencil down
		// ctx.moveTo(0,0);
		// ctx.lineTo(size,0);	// drawing till end point
		// ctx.stroke();	// draws it
		ctx.rotate((Math.PI * 2)/side);
		drawBranch(0);

		// ctx.scale(0.7,0.97);
	}
	ctx.restore();

	}
	drawFractol();

	// ctx.restore();
	
	// ctx.moveTo(500,500);
	// ctx.lineTo(400,300);
	// ctx.stroke();
});