var black = "<button id=%name% "
var black1 = "onclick='show(%id%)' style='display:block; height: 64px; width: 80px; background: black; float:left'></button>"
var white = "<button id=%name% style='display:block; height: 64px; width: 80px; background: red; float:left'></button>";
var block = "<div style='display:block;  width: 80px; background: white; float:left'>%num%</div>";
var block1 = "<br><div style='display:block;  width: 80px; background: white;'>%num%</div>";
var reset = "<button id='start' onclick='start();change1();' style='float: left; height:40; color:green;'>Reset</button>"
var play = '<button id="start" onclick="start();change();" style="float: left; height:40; color:green;">Play</button>'
var tur1 = "<div style='font-size:5ex;width:160px;float:left;'>Turn:</div>"
var tur = "<div id='turn' style='width: 160px;background:black; height: 44px; border: 1px solid;float: left'></div>"
var scoreb = "<div id='scoreb' style='width: 130px; height: 44px; border: 1px solid;float: left'>Blue<br>%num%</div>"
var scorey = "<div id='scorey' style='width: 130px; height: 44px; border: 1px solid;float: left'>Yellow<br>%num%</div>"
var bluescore = 0
var yellowscore = 0
var i = 0
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
var func1 = function(){
	var a = ["a","b",'c','d','e','f','g','h'];
	var b = ['1','2','3','4','5','6','7','8'];
	var c = [];
	for (var e in a){
		for (var d in b){
			c.push(a[e]+b[d]);
		};
	};
	return c;
}
var squares = function(){
	var name = func();
	var name1 = func1();
	var n = 0;
	for (var i = 0; i < 4;i++){
		for (var a = 0; a < 4;a++){
			$("#main").append(white.replace('%name%',name[n]));
			n++;
			$("#main").append(black.replace('%name%',name[n])+black1.replace('%id%',name1[n]));
			n++;
		};
		for (var d = 0; d<4;d++){
			$("#main").append(black.replace('%name%',name[n])+black1.replace('%id%',name1[n]));
			n++;
			$("#main").append(white.replace('%name%',name[n]));
			n++;
		};
	};
	$('#main').append(tur1)
	$('#main').append(tur)
	$('#main').append(scoreb.replace('%num%',bluescore))
	$('#main').append(scorey.replace('%num%',yellowscore))
};
//white = white.replace('%nam%',name[n])

squares();
$('#main').append(play)

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
var availableTokens = ["A2", "A4", "A6", "A8","B1", "B3", "B5", "B7", "C2", "C4", "C6", "C8","D1", "D3", "D5", "D7", "E2", "E4", "E6", "E8","F1", "F3", "F5", "F7", "G2", "G4", "G6", "G8", "H1", "H3", "H5", "H7"]
var a2=['A2','B1','B3','a','a'],a4=['A4','B3','B5','a','a'],a6=['A6','B5','B7','a','a'],a8=['A8','B7','a','a'],b1=['B1','a','C2',,'a','A2'],b3=['B3','C2','C4','A2','A4'],b5=['B5','C4','C6','A4','A6'],b7=['B7','C6','C8','A6','A8'],c2=['C2','D1','D3','B1','B3'],c4=['C4','D3','D5','B3','B5'],c6=['C6','D5','D7','B5','B7'],c8=['C8','D7','a','B7','a']
var d1=['D1','a','E2','a','C2'],d3=['D3','E2','E4','C2','C4'],d5=['D5','E4','E6','C4','C6'],d7=['D7','E6','E8','C6','C8'],e2=['E2','F1','F3','D1','D3'],e4=['E4','F3','F5','D3','D5'],e6=['E6','F5','F7','D5','D7'],e8=['E8','F7','a','D7','D7']
var f1=['F1','a','G2','a','E2'],f3=['F3','G2','G4','E2','E4'],f5=['F5','G4','G6','E4','E6'],f7=['F7','G6','G8','E6','E8'],g2=['G2','H1','H3','F1','F3'],g4=['G4','H3','H5','F3','F5'],g6=['G6','H5','H7','F5','F7'],g8=['G8','H7','a','F7','a'],h1=['H1','a','a','a','G2'],h3=['H3','a','a','G2','G4'],h5=['H5','a','a','G4','G6'],h7=['H7','a','a','G6','G8']
function Player(player) {
    player = new Image();
    player.src = 'images/coin.png';
    player.style.cursor = 'pointer'
    player.id = 'coin'
    return player;
};
function trans(a){
	var name = [a2,a4,a6,a8,b1,b3,b5,b7,c2,c4,c6,c8,d1,d3,d5,d7,e2,e4,e6,e8,f1,f3,f5,f7,g2,g4,g6,g8,h1,h3,h5,h7]
	for (var e in name){
		if (a === name[e][0]){
			a = name[e]
		}
	}
	return a
}
function Player1(player) {
    player = new Image();
    player.src = 'images/coin2.png';
    player.style.cursor = 'pointer'
    player.id = 'coin1'
    return player;
};

function Player3(player){
	player = new Image();
	player.src = 'images/coinR.png';
	player.style.cursor = 'pointer';
	player.id = 'coin3'
	return player;
}

function Player4(player){
	player = new Image();
	player.src = 'images/coin2R.png';
	player.style.cursor = 'pointer';
	player.id = 'coin4'
	return player;
}

var start = function(){
	if ($("#A2").find('img').length < 1){
		for (var i=0;i<12;i++){
			var token = new Player();
			$("#"+availableTokens[i]).append(token)
		}
		for (var e=20;e<32;e++){
			var token = new Player1();
			$("#"+availableTokens[e]).append(token)
		}
	}
	o = 1
	bluescore = 0
	yellowscore = 0
};

var tokenIn = function(a){
	if ($(a).find('img').length > 0){
		return true
	}else{
		return false
	}
}
var n = 0;
var change = function(){
	$("#start").remove()
	$("#main").append(reset)
	$("#turn").append(new Player1())
}
var change1 = function(){
	$("#start").remove()
	$("#row").empty();
	$("#col").empty();
	$("#main").empty();
	nums();
	lets();
	squares();
	$("#turn").empty()
	$("#main").append(play)
}

o = 1
r = []
var show = function(a){
	var token1 = new Player();
	var token2 = new Player1();
	var token3 = new Player3();
	var token4 = new Player4();
	var so = [];
	if ($('#'+a[0]).find('img').length > 0){
		if ($('#'+a[0]).find('#coin').length > 0){
			if (o === 0){
				if ($("#"+a[1]).find('#coin').length === 0){
					if ($("#"+a[1]).find('#coin3').length === 0){
						if ($("#"+a[1]).find('#coin1').length === 1||$("#"+a[1]).find('#coin4').length === 1){
							var cam = trans(a[1])
							if ($("#"+cam[1]).find('img').length ===0){
								$("#"+cam[1]).fadeOut(200).fadeIn(200);
								$("#"+cam[1]).unbind('click')
								$("#"+cam[1]).click(function(){
									if ($("#"+cam[1]).find('img').length === 0){
										$("#"+cam[1]).append(token1)
										$('#'+cam[0]).empty();
										$('#'+a[0]).empty()}
									$("#"+cam[2]).unbind('click')
									$("#"+cam[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 0){
										o=1
									}
									yellowscore = 12 - tokensPos(blue).length
									$('#scorey').empty()
									$('#scorey').append('Yellow<br>'+yellowscore)
									verify()
									if (tokensPos(blue).length === 0){
										alert('Yellow wins!!!')
									}
								})
							}
							ra.push(cam[1])
							so.push(a[1])
							show1(trans(cam[1]),a[0],so,3)
							so = []
						}else{
							$("#"+a[1]).fadeOut(200).fadeIn(200);
							$("#"+a[1]).unbind('click')
							$("#"+a[1]).click(function(){
								if ($("#"+a[1]).find('img').length === 0){
									$("#"+a[1]).append(token1)
									$('#'+a[0]).empty();}
								$("#"+a[2]).unbind('click')
								$("#"+a[0]).unbind('click')
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								verify()
							})
						}
					}
				}
				if ($("#"+a[2]).find('#coin').length === 0){
					if ($("#"+a[2]).find('#coin3').length === 0){
						if ($("#"+a[2]).find('#coin1').length === 1||$("#"+a[2]).find('#coin4').length === 1){
							var cami = trans(a[2])
							if ($("#"+cami[2]).find('img').length ===0){
								$("#"+cami[2]).fadeOut(200).fadeIn(200);
								$("#"+cami[2]).unbind('click')
								$("#"+cami[2]).click(function(){
									if ($("#"+cami[2]).find('img').length === 0){
										$("#"+cami[2]).append(token1)
										$('#'+cami[0]).empty();
										$('#'+a[0]).empty()}
									$("#"+cami[1]).unbind('click')
									$("#"+cami[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 0){
										o=1
									}
									yellowscore = 12 - tokensPos(blue).length
									$('#scorey').empty()
									$('#scorey').append('Yellow<br>'+yellowscore)
									verify()
									if (tokensPos(blue).length === 0){
										alert('Yellow wins!!!')
									}
								})
							}
							ra.push(cami[2])
							so.push(a[2])
							show1(trans(cami[2]),a[0],so,4)
							so = []
						}else{
							$("#"+a[2]).fadeOut(200).fadeIn(200);
							$("#"+a[2]).unbind('click')
							$("#"+a[2]).click(function(){
								if ($("#"+a[2]).find('img').length === 0){
									$("#"+a[2]).append(token1)
									$('#'+a[0]).empty()}
								$("#"+a[1]).unbind('click')
								$("#"+a[0]).unbind('click')
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								verify()
							})
						}
					}
				}
			}
		}
		if ($('#'+a[0]).find('#coin1').length > 0){
			if (o > 0){
				if ($("#"+a[a.length-1]).find('#coin1').length === 0){
					if ($("#"+a[a.length-1]).find('#coin4').length === 0){
						if ($("#"+a[a.length-1]).find('#coin').length === 1||$("#"+a[a.length-1]).find('#coin3').length === 1){
							var camo = trans(a[a.length-1])
							if ($("#"+camo[camo.length-1]).find('img').length ===0){
								$("#"+camo[camo.length-1]).fadeOut(200).fadeIn(200);
								$("#"+camo[camo.length-1]).unbind('click')
								$("#"+camo[camo.length-1]).click(function(){
									if ($("#"+camo[camo.length-1]).find('img').length === 0){
										$("#"+camo[camo.length-1]).append(token2)
										$('#'+camo[0]).empty();
										$('#'+a[0]).empty()}
									$("#"+camo[camo.length-2]).unbind('click')
									$("#"+camo[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 1){
										o=0
									}
									bluescore = 12 - tokensPos(yellow).length
									$('#scoreb').empty()
									$('#scoreb').append('Blue<br>'+bluescore)
									verify()
									if (tokensPos(yellow).length === 0){
										alert('Blue wins!!!')
									}
								})
							}
							ra.push(camo[camo.length-1])
							so.push(a[a.length-1])
							show1(trans(camo[camo.length-1]),a[0],so,1)
							so = []
						}else{
							$("#"+a[a.length-1]).fadeOut(200).fadeIn(200);
							$("#"+a[a.length-1]).unbind('click')
							$("#"+a[a.length-1]).click(function(){
								if ($("#"+a[a.length-1]).find('img').length === 0){
									$("#"+a[a.length-1]).append(token2)
									$('#'+a[0]).empty();}
								$("#"+a[a.length-2]).unbind('click')
								$("#"+a[0]).unbind('click')
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								verify()
							})
						}
					}
				}
				if ($("#"+a[a.length-2]).find('#coin1').length === 0){
					if ($("#"+a[a.length-2]).find('#coin4').length === 0){
						if ($("#"+a[a.length-2]).find('#coin').length === 1||$("#"+a[a.length-2]).find('#coin3').length === 1){
							var camu = trans(a[a.length-2])
							if ($("#"+camu[camu.length-2]).find('img').length ===0){
								$("#"+camu[camu.length-2]).fadeOut(200).fadeIn(200);
								$("#"+camu[camu.length-2]).unbind('click')
								$("#"+camu[camu.length-2]).click(function(){
									if ($("#"+camu[camu.length-2]).find('img').length === 0){
										$("#"+camu[camu.length-2]).append(token2)
										$('#'+camu[0]).empty();
										$('#'+a[0]).empty()}
									$("#"+camu[camu.length-1]).unbind('click')
									$("#"+camu[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 1){
										o=0
									}
									bluescore = 12 - tokensPos(yellow).length
									$('#scoreb').empty()
									$('#scoreb').append('Blue<br>'+bluescore)
									verify()
									if (tokensPos(yellow).length === 0){
										alert('Blue wins!!!')
									}
								})
							}
							ra.push(camu[camu.length-2])
							so.push(a[a.length-2])
							show1(trans(camu[camu.length-2]),a[0],so,2)
							so = []
						}else{
							$("#"+a[a.length-2]).fadeOut(200).fadeIn(200);
							$("#"+a[a.length-2]).unbind('click')
							$("#"+a[a.length-2]).click(function(){
								if ($("#"+a[a.length-2]).find('img').length === 0){
									$("#"+a[a.length-2]).append(token2)
									$('#'+a[0]).empty();}
								$("#"+a[a.length-1]).unbind('click')
								$("#"+a[0]).unbind('click')
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								verify()
							})
						}
					}
				}
			}
		}
		if ($('#'+a[0]).find('#coin3').length > 0){
			if (o === 0){
				if ($("#"+a[1]).find('#coin').length === 0){
					if ($("#"+a[1]).find('#coin1').length === 1||$("#"+a[1]).find('#coin4').length === 1){
						var cam1 = trans(a[1])
						if ($("#"+cam1[1]).find('img').length ===0){
							$("#"+cam1[1]).fadeOut(200).fadeIn(200);
							$("#"+cam1[1]).unbind('click')
							$("#"+cam1[1]).click(function(){
								if ($("#"+cam1[1]).find('img').length === 0){
									$("#"+cam1[1]).append(token3)
									$('#'+cam1[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+cam1[2]).unbind('click')
								$("#"+cam1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						ra.push(cam1[1])
						so.push(a[1])
						show1(trans(cam1[1]),a[0],so,3)
						so = []
					}else{
						$("#"+a[1]).fadeOut(200).fadeIn(200);
						$("#"+a[1]).unbind('click')
						$("#"+a[1]).click(function(){
							if ($("#"+a[1]).find('img').length === 0){
								$("#"+a[1]).append(token3)
								$('#'+a[0]).empty();}
							$("#"+a[2]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 0){
								o=1
							}
							verify()
						})
					}
				}
				if ($("#"+a[2]).find('#coin').length === 0){
					if ($("#"+a[2]).find('#coin1').length === 1||$("#"+a[2]).find('#coin4').length === 1){
						var cami1 = trans(a[2])
						if ($("#"+cami1[2]).find('img').length ===0){
							$("#"+cami1[2]).fadeOut(200).fadeIn(200);
							$("#"+cami1[2]).unbind('click')
							$("#"+cami1[2]).click(function(){
								if ($("#"+cami1[2]).find('img').length === 0){
									$("#"+cami1[2]).append(token3)
									$('#'+cami1[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+cami1[1]).unbind('click')
								$("#"+cami1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						ra.push(cami1[2])
						so.push(a[2])
						show1(trans(cami1[2]),a[0],so,4)
						so = []
					}else{
						$("#"+a[2]).fadeOut(200).fadeIn(200);
						$("#"+a[2]).unbind('click')
						$("#"+a[2]).click(function(){
							if ($("#"+a[2]).find('img').length === 0){
								$("#"+a[2]).append(token3)
								$('#'+a[0]).empty()}
							$("#"+a[1]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 0){
								o=1
							}
							verify()
						})
					}
				}
				if ($("#"+a[a.length-1]).find('#coin').length === 0){
					if ($("#"+a[a.length-1]).find('#coin1').length === 1||$("#"+a[a.length-1]).find('#coin4').length === 1){
						var camo1 = trans(a[a.length-1])
						if ($("#"+camo1[camo1.length-1]).find('img').length ===0){
							$("#"+camo1[camo1.length-1]).fadeOut(200).fadeIn(200);
							$("#"+camo1[camo1.length-1]).unbind('click')
							$("#"+camo1[camo1.length-1]).click(function(){
								if ($("#"+camo1[camo1.length-1]).find('img').length === 0){
									$("#"+camo1[camo1.length-1]).append(token3)
									$('#'+camo1[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+camo1[camo1.length-2]).unbind('click')
								$("#"+camo1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						ra.push(camo1[camo1.length-1])
						so.push(a[a.length-1])
						show1(trans(camo1[camo1.length-1]),a[0],so,1)
						so = []
					}else{
						$("#"+a[a.length-1]).fadeOut(200).fadeIn(200);
						$("#"+a[a.length-1]).unbind('click')
						$("#"+a[a.length-1]).click(function(){
							if ($("#"+a[a.length-1]).find('img').length === 0){
								$("#"+a[a.length-1]).append(token3)
								$('#'+a[0]).empty();}
							$("#"+a[a.length-2]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 0){
								o=1
							}
							verify()
						})
					}
				}
				if ($("#"+a[a.length-2]).find('#coin').length === 0){
					if ($("#"+a[a.length-2]).find('#coin1').length === 1||$("#"+a[a.length-2]).find('#coin4').length === 1){
						var camu1 = trans(a[a.length-2])
						if ($("#"+camu1[camu1.length-2]).find('img').length ===0){
							$("#"+camu1[camu1.length-2]).fadeOut(200).fadeIn(200);
							$("#"+camu1[camu1.length-2]).unbind('click')
							$("#"+camu1[camu1.length-2]).click(function(){
								if ($("#"+camu1[camu1.length-2]).find('img').length === 0){
									$("#"+camu1[camu1.length-2]).append(token3)
									$('#'+camu1[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+camu1[camu1.length-1]).unbind('click')
								$("#"+camu1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						ra.push(camu1[camu1.length-2])
						so.push(a[a.length-2])
						show1(trans(camu1[camu1.length-2]),a[0],so,2)
						so = []
					}else{
						$("#"+a[a.length-2]).fadeOut(200).fadeIn(200);
						$("#"+a[a.length-2]).unbind('click')
						$("#"+a[a.length-2]).click(function(){
							if ($("#"+a[a.length-2]).find('img').length === 0){
								$("#"+a[a.length-2]).append(token3)
								$('#'+a[0]).empty();}
							$("#"+a[a.length-1]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 0){
								o=1
							}
							verify()
						})
					}
				}
			}
		}
		if ($('#'+a[0]).find('#coin4').length > 0){
			if (o > 0){
				if ($("#"+a[1]).find('#coin1').length === 0){
					if ($("#"+a[1]).find('#coin').length === 1||$("#"+a[1]).find('#coin3').length === 1){
						var cam2 = trans(a[1])
						if ($("#"+cam2[1]).find('img').length ===0){
							$("#"+cam2[1]).fadeOut(200).fadeIn(200);
							$("#"+cam2[1]).unbind('click')
							$("#"+cam2[1]).click(function(){
								if ($("#"+cam2[1]).find('img').length === 0){
									$("#"+cam2[1]).append(token4)
									$('#'+cam2[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+cam2[2]).unbind('click')
								$("#"+cam2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						ra.push(cam2[1])
						so.push(a[1])
						show1(trans(cam2[1]),a[0],so,3)
						so = []
					}else{
						$("#"+a[1]).fadeOut(200).fadeIn(200);
						$("#"+a[1]).unbind('click')
						$("#"+a[1]).click(function(){
							if ($("#"+a[1]).find('img').length === 0){
								$("#"+a[1]).append(token4)
								$('#'+a[0]).empty();}
							$("#"+a[2]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 1){
								o=0
							}
							verify()
						})
					}
				}
				if ($("#"+a[2]).find('#coin1').length === 0){
					if ($("#"+a[2]).find('#coin').length === 1||$("#"+a[2]).find('#coin3').length === 1){
						var cami2 = trans(a[2])
						if ($("#"+cami2[2]).find('img').length ===0){
							$("#"+cami2[2]).fadeOut(200).fadeIn(200);
							$("#"+cami2[2]).unbind('click')
							$("#"+cami2[2]).click(function(){
								if ($("#"+cami2[2]).find('img').length === 0){
									$("#"+cami2[2]).append(token4)
									$('#'+cami2[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+cami2[1]).unbind('click')
								$("#"+cami2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						ra.push(cami2[2])
						so.push(a[2])
						show1(trans(cami2[2]),a[0],so,4)
						so = []
					}else{
						$("#"+a[2]).fadeOut(200).fadeIn(200);
						$("#"+a[2]).unbind('click')
						$("#"+a[2]).click(function(){
							if ($("#"+a[2]).find('img').length === 0){
								$("#"+a[2]).append(token4)
								$('#'+a[0]).empty()}
							$("#"+a[1]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 1){
								o=0
							}
							verify()
						})
					}
				}
				if ($("#"+a[a.length-1]).find('#coin1').length === 0){
					if ($("#"+a[a.length-1]).find('#coin').length === 1||$("#"+a[a.length-1]).find('#coin3').length === 1){
						var camo2 = trans(a[a.length-1])
						if ($("#"+camo2[camo2.length-1]).find('img').length ===0){
							$("#"+camo2[camo2.length-1]).fadeOut(200).fadeIn(200);
							$("#"+camo2[camo2.length-1]).unbind('click')
							$("#"+camo2[camo2.length-1]).click(function(){
								if ($("#"+camo2[camo2.length-1]).find('img').length === 0){
									$("#"+camo2[camo2.length-1]).append(token4)
									$('#'+camo2[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+camo2[camo2.length-2]).unbind('click')
								$("#"+camo2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						ra.push(camo2[camo2.length-1])
						so.push(a[a.length-1])
						show1(trans(camo2[camo2.length-1]),a[0],so,1)
						so = []
					}else{
						$("#"+a[a.length-1]).fadeOut(200).fadeIn(200);
						$("#"+a[a.length-1]).unbind('click')
						$("#"+a[a.length-1]).click(function(){
							if ($("#"+a[a.length-1]).find('img').length === 0){
								$("#"+a[a.length-1]).append(token4)
								$('#'+a[0]).empty();}
							$("#"+a[a.length-2]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 1){
								o=0
							}
							verify()
						})
					}
				}
				if ($("#"+a[a.length-2]).find('#coin1').length === 0){
					if ($("#"+a[a.length-2]).find('#coin').length === 1||$("#"+a[a.length-2]).find('#coin3').length === 1){
						var camu2 = trans(a[a.length-2])
						if ($("#"+camu2[camu2.length-2]).find('img').length ===0){
							$("#"+camu2[camu2.length-2]).fadeOut(200).fadeIn(200);
							$("#"+camu2[camu2.length-2]).unbind('click')
							$("#"+camu2[camu2.length-2]).click(function(){
								if ($("#"+camu2[camu2.length-2]).find('img').length === 0){
									$("#"+camu2[camu2.length-2]).append(token4)
									$('#'+camu2[0]).empty();
									$('#'+a[0]).empty()}
								$("#"+camu2[camu2.length-1]).unbind('click')
								$("#"+camu2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						ra.push(camu2[camu2.length-2])
						so.push(a[a.length-2])
						show1(trans(camu2[camu2.length-2]),a[0],so,2)
						so = []
					}else{
						$("#"+a[a.length-2]).fadeOut(200).fadeIn(200);
						$("#"+a[a.length-2]).unbind('click')
						$("#"+a[a.length-2]).click(function(){
							if ($("#"+a[a.length-2]).find('img').length === 0){
								$("#"+a[a.length-2]).append(token4)
								$('#'+a[0]).empty();}
							$("#"+a[a.length-1]).unbind('click')
							$("#"+a[0]).unbind('click')
							for (var e in r){
								r[e].unbind('click')
							}
							r = []
							if (o === 1){
								o=0
							}
							verify()
						})
					}
				}
			}
		}
	}
	r.push($("#"+a[1]))
	r.push($("#"+a[2]))
	r.push($("#"+a[a.length-2]))
	r.push($("#"+a[a.length-1]))
}

//Recursive function
var ra = []


var show1 = function(a,b,c,g){
	var token1 = new Player();
	var token2 = new Player1();
	var token3 = new Player3();
	var token4 = new Player4();
	if ($('#'+b).find('img').length > 0){
		if ($('#'+b).find('#coin').length > 0){
			if (o === 0){
				if ($("#"+a[1]).find('#coin').length === 0){
					if ($("#"+a[1]).find('#coin3').length === 0&&g != 1){
						if ($("#"+a[1]).find('#coin1').length === 1||$("#"+a[1]).find('#coin4').length === 1){
							var cam = trans(a[1])
							var m = i+1
							if ($("#"+cam[1]).find('img').length ===0){
								$("#"+cam[1]).fadeOut(200).fadeIn(200);
								$("#"+cam[1]).unbind('click')
								$("#"+cam[1]).click(function(){
									if ($("#"+cam[1]).find('img').length === 0){
										$("#"+cam[1]).append(token1)
										$('#'+cam[0]).empty();
										$('#'+b).empty()
										for (var sin in c){
											if (m > 0){
												$('#'+c[sin]).empty()
												m = m-1
											}
										}
										i=0
										$('#'+a[0]).unbind('click')}
									$("#"+cam[2]).unbind('click')
									$("#"+cam[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 0){
										o=1
									}
									yellowscore = 12 - tokensPos(blue).length
									$('#scorey').empty()
									$('#scorey').append('Yellow<br>'+yellowscore)
									verify()
									if (tokensPos(blue).length === 0){
										alert('Yellow wins!!!')
									}
								})
							}
							i++
							ra.push(cam[1])
							var d = c
							d.push(a[1])
							show1(trans(cam[1]),b,d,3)
						}
					}
				}
				if ($("#"+a[2]).find('#coin').length === 0){
					if ($("#"+a[2]).find('#coin3').length === 0&&g != 2){
						if ($("#"+a[2]).find('#coin1').length === 1||$("#"+a[2]).find('#coin4').length === 1){
							var cami = trans(a[2])
							var m = i+1
							if ($("#"+cami[2]).find('img').length ===0){
								$("#"+cami[2]).fadeOut(200).fadeIn(200);
								$("#"+cami[2]).unbind('click')
								$("#"+cami[2]).click(function(){
									if ($("#"+cami[2]).find('img').length === 0){
										$("#"+cami[2]).append(token1)
										$('#'+cami[0]).empty();
										$('#'+b).empty()
										for (var sin in c){
											if (m > 0){
												$('#'+c[sin]).empty()
												m = m-1
											}
										}
										i=0
										$('#'+a[0]).unbind('click')}
									$("#"+cami[1]).unbind('click')
									$("#"+cami[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 0){
										o=1
									}
									yellowscore = 12 - tokensPos(blue).length
									$('#scorey').empty()
									$('#scorey').append('Yellow<br>'+yellowscore)
									verify()
									if (tokensPos(blue).length === 0){
										alert('Yellow wins!!!')
									}
								})
							}
							i++
							ra.push(cami[2])
							var d = c
							d.push(a[2])
							show1(trans(cami[2]),b,d,4)
						}
					}
				}
			}
		}
		if ($('#'+b).find('#coin1').length > 0){
			if (o > 0){
				if ($("#"+a[a.length-1]).find('#coin1').length === 0){
					if ($("#"+a[a.length-1]).find('#coin4').length === 0&&g != 3){
						if ($("#"+a[a.length-1]).find('#coin').length === 1||$("#"+a[a.length-1]).find('#coin3').length === 1){
							var camo = trans(a[a.length-1])
							var m = i+1
							if ($("#"+camo[camo.length-1]).find('img').length ===0){
								$("#"+camo[camo.length-1]).fadeOut(200).fadeIn(200);
								$("#"+camo[camo.length-1]).unbind('click')
								$("#"+camo[camo.length-1]).click(function(){
									if ($("#"+camo[camo.length-1]).find('img').length === 0){
										$("#"+camo[camo.length-1]).append(token2)
										$('#'+camo[0]).empty();
										$('#'+b).empty()
										for (var sin in c){
											if (m > 0){
												$('#'+c[sin]).empty()
												m = m-1
											}
										}
										i=0
										$('#'+a[0]).unbind('click')}
									$("#"+camo[camo.length-2]).unbind('click')
									$("#"+camo[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 1){
										o=0
									}
									bluescore = 12 - tokensPos(yellow).length
									$('#scoreb').empty()
									$('#scoreb').append('Blue<br>'+bluescore)
									verify()
									if (tokensPos(yellow).length === 0){
										alert('Blue wins!!!')
									}
								})
							}
							i++
							ra.push(camo[camo.length-1])
							var d = c
							d.push(a[a.length-1])
							show1(trans(camo[camo.length-1]),b,d,1)
						}
					}
				}
				if ($("#"+a[a.length-2]).find('#coin1').length === 0){
					if ($("#"+a[a.length-2]).find('#coin4').length === 0&&g != 4){
						if ($("#"+a[a.length-2]).find('#coin').length === 1||$("#"+a[a.length-2]).find('#coin3').length === 1){
							var camu = trans(a[a.length-2])
							var m = i+1
							if ($("#"+camu[camu.length-2]).find('img').length ===0){
								$("#"+camu[camu.length-2]).fadeOut(200).fadeIn(200);
								$("#"+camu[camu.length-2]).unbind('click')
								$("#"+camu[camu.length-2]).click(function(){
									if ($("#"+camu[camu.length-2]).find('img').length === 0){
										$("#"+camu[camu.length-2]).append(token2)
										$('#'+camu[0]).empty();
										$('#'+b).empty()
										for (var sin in c){
											if (m > 0){
												$('#'+c[sin]).empty()
												m = m-1
											}
										}
										i=0
										$('#'+a[0]).unbind('click')}
									$("#"+camu[camu.length-1]).unbind('click')
									$("#"+camu[0]).unbind('click')
									for (var z in ra){
										$('#'+ra[z]).unbind('click')
									}
									ra = []
									for (var e in r){
										r[e].unbind('click')
									}
									r = []
									if (o === 1){
										o=0
									}
									bluescore = 12 - tokensPos(yellow).length
									$('#scoreb').empty()
									$('#scoreb').append('Blue<br>'+bluescore)
									verify()
									if (tokensPos(yellow).length === 0){
										alert('Blue wins!!!')
									}
								})
							}
							i++
							ra.push(camu[camu.length-2])
							var d = c
							d.push(a[a.length-2])
							show1(trans(camu[camu.length-2]),b,d,2)
						}
					}
				}
			}
		}
		if ($('#'+b).find('#coin3').length > 0){
			if (o === 0){
				if ($("#"+a[1]).find('#coin').length === 0&&g != 1){
					if ($("#"+a[1]).find('#coin1').length === 1||$("#"+a[1]).find('#coin4').length === 1){
						var cam1 = trans(a[1])
						var m = i+1
						if ($("#"+cam1[1]).find('img').length ===0){
							$("#"+cam1[1]).fadeOut(200).fadeIn(200);
							$("#"+cam1[1]).unbind('click')
							$("#"+cam1[1]).click(function(){
								if ($("#"+cam1[1]).find('img').length === 0){
									$("#"+cam1[1]).append(token3)
									$('#'+cam1[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+cam1[2]).unbind('click')
								$("#"+cam1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						i++
						ra.push(cam1[1])
						var d = c
						d.push(a[1])
						show1(trans(cam1[1]),b,d,3)
					}
				}
				if ($("#"+a[2]).find('#coin').length === 0&&g != 2){
					if ($("#"+a[2]).find('#coin1').length === 1||$("#"+a[2]).find('#coin4').length === 1){
						var cami1 = trans(a[2])
						var m = i+1
						if ($("#"+cami1[2]).find('img').length ===0){
							$("#"+cami1[2]).fadeOut(200).fadeIn(200);
							$("#"+cami1[2]).unbind('click')
							$("#"+cami1[2]).click(function(){
								if ($("#"+cami1[2]).find('img').length === 0){
									$("#"+cami1[2]).append(token3)
									$('#'+cami1[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+cami1[1]).unbind('click')
								$("#"+cami1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						i++
						ra.push(cami1[2])
						var d = c
						d.push(a[2])
						show1(trans(cami1[2]),b,d,4)
					}
				}
				if ($("#"+a[a.length-1]).find('#coin').length === 0&&g != 3){
					if ($("#"+a[a.length-1]).find('#coin1').length === 1||$("#"+a[a.length-1]).find('#coin4').length === 1){
						var camo1 = trans(a[a.length-1])
						var m = i+1
						if ($("#"+camo1[camo1.length-1]).find('img').length ===0){
							$("#"+camo1[camo1.length-1]).fadeOut(200).fadeIn(200);
							$("#"+camo1[camo1.length-1]).unbind('click')
							$("#"+camo1[camo1.length-1]).click(function(){
								if ($("#"+camo1[camo1.length-1]).find('img').length === 0){
									$("#"+camo1[camo1.length-1]).append(token3)
									$('#'+camo1[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+camo1[camo1.length-2]).unbind('click')
								$("#"+camo1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						i++
						ra.push(camo1[camo1.length-1])
						var d = c
						d.push(a[a.length-1])
						show1(trans(camo1[camo1.length-1]),b,d,1)
					}
				}
				if ($("#"+a[a.length-2]).find('#coin').length === 0&&g != 4){
					if ($("#"+a[a.length-2]).find('#coin1').length === 1||$("#"+a[a.length-2]).find('#coin4').length === 1){
						var camu1 = trans(a[a.length-2])
						var m = i+1
						if ($("#"+camu1[camu1.length-2]).find('img').length ===0){
							$("#"+camu1[camu1.length-2]).fadeOut(200).fadeIn(200);
							$("#"+camu1[camu1.length-2]).unbind('click')
							$("#"+camu1[camu1.length-2]).click(function(){
								if ($("#"+camu1[camu1.length-2]).find('img').length === 0){
									$("#"+camu1[camu1.length-2]).append(token3)
									$('#'+camu1[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+camu1[camu1.length-1]).unbind('click')
								$("#"+camu1[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 0){
									o=1
								}
								yellowscore = 12 - tokensPos(blue).length
								$('#scorey').empty()
								$('#scorey').append('Yellow<br>'+yellowscore)
								verify()
								if (tokensPos(blue).length === 0){
									alert('Yellow wins!!!')
								}
							})
						}
						i++
						ra.push(camu1[camu1.length-2])
						var d = c
						d.push(a[a.length-2])
						show1(trans(camu1[camu1.length-2]),b,d,2)
					}
				}
			}
		}
		if ($('#'+b).find('#coin4').length > 0){
			if (o > 0){
				if ($("#"+a[1]).find('#coin1').length === 0&&g != 1){
					if ($("#"+a[1]).find('#coin').length === 1||$("#"+a[1]).find('#coin3').length === 1){
						var cam2 = trans(a[1])
						var m = i+1
						if ($("#"+cam2[1]).find('img').length ===0){
							$("#"+cam2[1]).fadeOut(200).fadeIn(200);
							$("#"+cam2[1]).unbind('click')
							$("#"+cam2[1]).click(function(){
								if ($("#"+cam2[1]).find('img').length === 0){
									$("#"+cam2[1]).append(token4)
									$('#'+cam2[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+cam2[2]).unbind('click')
								$("#"+cam2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						i++
						ra.push(cam2[1])
						var d = c
						d.push(a[1])
						show1(trans(cam2[1]),b,d,3)
					}
				}
				if ($("#"+a[2]).find('#coin1').length === 0&&g != 2){
					if ($("#"+a[2]).find('#coin').length === 1||$("#"+a[2]).find('#coin3').length === 1){
						var cami2 = trans(a[2])
						var m = i+1
						if ($("#"+cami2[2]).find('img').length ===0){
							$("#"+cami2[2]).fadeOut(200).fadeIn(200);
							$("#"+cami2[2]).unbind('click')
							$("#"+cami2[2]).click(function(){
								if ($("#"+cami2[2]).find('img').length === 0){
									$("#"+cami2[2]).append(token4)
									$('#'+cami2[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+cami2[1]).unbind('click')
								$("#"+cami2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						i++
						ra.push(cami2[2])
						var d = c
						d.push(a[2])
						show1(trans(cami2[2]),b,d,4)
					}
				}
				if ($("#"+a[a.length-1]).find('#coin1').length === 0&&g != 3){
					if ($("#"+a[a.length-1]).find('#coin').length === 1||$("#"+a[a.length-1]).find('#coin3').length === 1){
						var camo2 = trans(a[a.length-1])
						var m = i+1
						if ($("#"+camo2[camo2.length-1]).find('img').length ===0){
							$("#"+camo2[camo2.length-1]).fadeOut(200).fadeIn(200);
							$("#"+camo2[camo2.length-1]).unbind('click')
							$("#"+camo2[camo2.length-1]).click(function(){
								if ($("#"+camo2[camo2.length-1]).find('img').length === 0){
									$("#"+camo2[camo2.length-1]).append(token4)
									$('#'+camo2[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+camo2[camo2.length-2]).unbind('click')
								$("#"+camo2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						i++
						ra.push(camo2[camo2.length-1])
						var d = c
						d.push(a[a.length-1])
						show1(trans(camo2[camo2.length-1]),b,d,1)
					}
				}
				if ($("#"+a[a.length-2]).find('#coin1').length === 0&&g != 4){
					if ($("#"+a[a.length-2]).find('#coin').length === 1||$("#"+a[a.length-2]).find('#coin3').length === 1){
						var camu2 = trans(a[a.length-2])
						var m = i+1
						if ($("#"+camu2[camu2.length-2]).find('img').length ===0){
							$("#"+camu2[camu2.length-2]).fadeOut(200).fadeIn(200);
							$("#"+camu2[camu2.length-2]).unbind('click')
							$("#"+camu2[camu2.length-2]).click(function(){
								if ($("#"+camu2[camu2.length-2]).find('img').length === 0){
									$("#"+camu2[camu2.length-2]).append(token4)
									$('#'+camu2[0]).empty();
									$('#'+b).empty()
									for (var sin in c){
										if (m > 0){
											$('#'+c[sin]).empty()
											m = m-1
										}
									}
									i=0
									$('#'+a[0]).unbind('click')}
								$("#"+camu2[camu2.length-1]).unbind('click')
								$("#"+camu2[0]).unbind('click')
								for (var z in ra){
									$('#'+ra[z]).unbind('click')
								}
								ra = []
								for (var e in r){
									r[e].unbind('click')
								}
								r = []
								if (o === 1){
									o=0
								}
								bluescore = 12 - tokensPos(yellow).length
								$('#scoreb').empty()
								$('#scoreb').append('Blue<br>'+bluescore)
								verify()
								if (tokensPos(yellow).length === 0){
									alert('Blue wins!!!')
								}
							})
						}
						i++
						ra.push(camu2[camu2.length-2])
						var d = c
						d.push(a[a.length-2])
						show1(trans(camu2[camu2.length-2]),b,d,2)
					}
				}
			}
		}
	}
	r.push($("#"+a[1]))
	r.push($("#"+a[2]))
	r.push($("#"+a[a.length-2]))
	r.push($("#"+a[a.length-1]))
}
var blue = 'coin1',yellow = 'coin'
var tokensPos = function(item){
	var names = func();
	var result = [];
	for (e in names){
		if ($('#'+names[e]).find('#'+item).length > 0){
			result.push(names[e])
		}
	}
	return result
}

var blue = ['coin1','coin4'],yellow = ['coin','coin3']
var tokensPos = function(item){
	var names = func();
	var result = [];
	for (var e in names){
		for (var items in item){
			if ($('#'+names[e]).find('#'+item[items]).length > 0){
				result.push(names[e])
			}
		}
	}
	return result
}
function verify(){
	var ava = ['A2','A4','A6','A8','H1','H3','H5','H7']
	var token1 = new Player3();
	var token2 = new Player4();
	for (var e=0;e<4;e++){
		if ($('#'+ava[e]).find('#coin1').length >0){
			$('#'+ava[e]).empty();
			$('#'+ava[e]).append(token2)
		}
	}
	for (var i=4;i<8;i++){
		if ($('#'+ava[i]).find('#coin').length >0){
			$('#'+ava[i]).empty();
			$('#'+ava[i]).append(token1)
		}
	}
	if (o === 1){
		$('#turn').empty()
		$('#turn').append(new Player1())
	}else{
		$('#turn').empty()
		$('#turn').append(new Player())
	}
}
var test = function(){
	$('#C6').append(new Player())
	$('#H1').append(new Player1())
	$('#E4').append(new Player())
	$('#G2').append(new Player())
	$('#H7').append(new Player())
}