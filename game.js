var black = "<div id=%name% style='disply:block; height: 64px; width: 80px; background: black; float:left'></div>"
var white = "<div id=%name% style='disply:block; height: 64px; width: 80px; background: white; float:left'></div>"

var func = function(){
	var a = ["A","B",'C','D','E','F','G','H']
	var b = ['1','2','3','4','5','6','7','8']
	var c = []
	for (var e in a){
		for (var d in b){
			c.push(a[e]+b[d])
		}
	}
	return c;
};


var squares = function(){
	var name = func();
	var n = 0;
	for (var i = 0; i < 4;i++){
		for (var a = 0; a < 4;a++){
			$("#main").append(white.replace('%name%',name[n]))
			n++
			$("#main").append(black.replace('%name%',name[n]))
			n++
		}
		for (var e = 0; e<4;e++){
			n++
			$("#main").append(black.replace('%name%',name[n]))
			n++
			$("#main").append(white.replace('%name%',name[n]))
		}
	}
};

squares()