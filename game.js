var black = "<button id=%name% style='display:block; height: 64px; width: 80px; background: black; float:left'></button>"
var white = "<button id=%name% style='display:block; height: 64px; width: 80px; background: #8B4513; float:left'></button>";
var block = "<div style='display:block;  width: 80px; background: white; float:left'>%num%</div>";
var block1 = "<br><div style='display:block;  width: 80px; background: white;'>%num%</div>";

var func = function(){
	var a = ["A","B",'C','D','E','F','G','H'];
	var b = ['1','2','3','4','5','6','7','8'];
	var c = [];
	for (var e in a){
		for (var d in b){
			c.push(a[e]+b[d]);
		};
	};
	return c;
};

var squares = function(){
	var name = func();
	var n = 0;
	for (var i = 0; i < 4;i++){
		for (var a = 0; a < 4;a++){
			$("#main").append(white.replace('%name%',name[n]));
			n++;
			$("#main").append(black.replace('%name%',name[n]));
			n++;
		};
		for (var e = 0; e<4;e++){
			$("#main").append(black.replace('%name%',name[n]));
			n++;
			$("#main").append(white.replace('%name%',name[n]));
			n++;
		};
	};
};

squares();

var nums = function(){
	for (var i = 1;i<9;i++){
		$("#col").append(block.replace("%num%",i));
	};
};

nums();

var lets = function(){
	var a = ["A",'B','C','D','E','F','G','H'];
	for (var i = 0;i<8;i++){
		$("#row").append(block1.replace("%num%",a[i]));
	};
};

lets();

var Car = function(obj, loc){
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++
	}
	return obj;
}
var amy = Car({},1)
amy.move();
var ben = Car({},9);
ben.move();
