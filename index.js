var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);

TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(30);

//движущиеся серые прямоугольники
var rectBigGray1 = new createjs.Shape();
rectBigGray1.graphics
.f("#C0C0C0")
.dr(0, 0, 800, 400);

rectBigGray1.x = 0;
rectBigGray1.y = -400;

var rectBigGray2 = new createjs.Shape();
rectBigGray2.graphics
.f("#C0C0C0")
.dr(0, 0, 800, 400);

rectBigGray2.x = 0;
rectBigGray2.y = 605;


//текст
var txt = new createjs.Text("DARIA TKACHEVA", "40px Times", "#ffffff");
txt.regX = txt.getMetrics().width / 2;
txt.regY = txt.getMetrics().height / 2;
txt.x = 400;
txt.y = 300;

txt.scaleX = 0;
txt.scaleY = 0;


//фон текста
var rectBlack1 = new createjs.Shape();
rectBlack1.graphics
.f("#202020")
.dr(0, 0, 400, 100);

rectBlack1.x = 400;
rectBlack1.y = 300;

rectBlack1.regX = 200;
rectBlack1.regY = 50;

rectBlack1.scaleX = 0;
rectBlack1.scaleY = 0;



//маска-круг
var circ = new createjs.Shape();
circ.graphics
.setStrokeStyle(3)
.beginStroke("#C0C0C0")
.f("#C0C0C0")
.rr(0, 0, 1600, 1600, 800)
.endStroke();

circ.regX = 800;
circ.regY = 800;

circ.scaleX = 0;
circ.scaleY = 0;

circ.x = 400;
circ.y = 600;



//черный квадрат внизу становится белым 
var rectBig = new createjs.Shape();
rectBig.graphics
.f("#ffffff")
.dr(0, 0, 100, 100);

rectBig.regX = 50;
rectBig.regY = 50;

rectBig.x = 400;
rectBig.y = 300;


//черный квадрат внизу
var rectBigBlack = new createjs.Shape();
rectBigBlack.graphics
.f("#202020")
.dr(0, 0, 100, 100);

rectBigBlack.regX = 50;
rectBigBlack.regY = 50;

rectBigBlack.x = 400;
rectBigBlack.y = 550;



//квавдраты черно-белые
var img1 = new createjs.Bitmap("Images/img1.png");
img1.x = 400;
img1.y = 300;
img1.regX = 100;
img1.regY = 100;

img1.scaleX = 0;
img1.scaleY = 0;

var img2 = new createjs.Bitmap("Images/img2.png");
img2.x = 400;
img2.y = 300;
img2.regX = 0;
img2.regY = 100;

img2.scaleX = 0;
img2.scaleY = 0;

var img3 = new createjs.Bitmap("Images/img3.png");
img3.x = 400;
img3.y = 300;
img3.regX = 0;
img3.regY = 0;

img3.scaleX = 0;
img3.scaleY = 0;

var img4 = new createjs.Bitmap("Images/img4.png");
img4.x = 400;
img4.y = 300;
img4.regX = 100;
img4.regY = 0;

img4.scaleX = 0;
img4.scaleY = 0;

//квадраты маски
var imgM1 = new createjs.Bitmap("Images/imgM1.png");
imgM1.x = 400;
imgM1.y = 300;
imgM1.regX = 100;
imgM1.regY = 100;

var imgM2 = new createjs.Bitmap("Images/imgM2.png");
imgM2.x = 400;
imgM2.y = 300;
imgM2.regX = 0;
imgM2.regY = 100;

var imgM3 = new createjs.Bitmap("Images/imgM3.png");
imgM3.x = 400;
imgM3.y = 300;
imgM3.regX = 0;
imgM3.regY = 0;

var imgM4 = new createjs.Bitmap("Images/imgM4.png");
imgM4.x = 400;
imgM4.y = 300;
imgM4.regX = 100;
imgM4.regY = 0;



//вращение черно-белых квадратов
function motion1 (){
	TweenMax.to(img1 , 1, {
	scaleX: 1, scaleY: 1, delay:0
	});
	TweenMax.to(img2 , 1, {
	scaleX: 1, scaleY: 1, delay:0.1
	});
	TweenMax.to(img3 , 1, {
	scaleX: 1, scaleY: 1, delay:0.2
	});
	TweenMax.to(img4 , 1, {
	scaleX: 1, scaleY: 1, delay:0.3
	});
	TweenMax.to([img1,img2,img3,img4], 1, {
	rotation: 90, delay:0, onComplete: function () {

				TweenMax.to([img1,img2,img3,img4], 1, {
		
					rotation: "+=90",
					delay: 0.1
				});

			}
	});
}

//квадраты белые
var rect1 = new createjs.Shape();

rect1.graphics
.f("#ffffff")
.dr(0, 0, 50, 50);

rect1.regX = 50;
rect1.regY = 50;

rect1.x = 400;
rect1.y = 300;

rect1.scaleX = 0;
rect1.scaleY = 0;

var rect2 = new createjs.Shape();

rect2.graphics
.f("#ffffff")
.dr(0, 0, 50, 50);

rect2.regX = 0;
rect2.regY = 50;

rect2.x = 400;
rect2.y = 300;

rect2.scaleX = 0;
rect2.scaleY = 0;

var rect3 = new createjs.Shape();

rect3.graphics
.f("#ffffff")
.dr(0, 0, 50, 50);

rect3.regX = 0;
rect3.regY = 0;

rect3.x = 400;
rect3.y = 300;

rect3.scaleX = 0;
rect3.scaleY = 0;

var rect4 = new createjs.Shape();

rect4.graphics
.f("#ffffff")
.dr(0, 0, 50, 50);

rect4.regX = 50;
rect4.regY = 0;

rect4.x = 400;
rect4.y = 300;

rect4.scaleX = 0;
rect4.scaleY = 0;


//вращение белых квадратов
function motion2(){
	TweenMax.to(rect1 , 1, {
	scaleX: 1, scaleY: 1, delay:1.3
	});
	TweenMax.to(rect2 , 1, {
	scaleX: 1, scaleY: 1, delay:1.4
	});
	TweenMax.to(rect3 , 1, {
	scaleX: 1, scaleY: 1, delay:1.1
	});
	TweenMax.to(rect4, 1, {
	scaleX: 1, scaleY: 1, delay:1.2
	});
	TweenMax.to([rect1,rect2,rect3,rect4], 1, {
		rotation: 90, delay:1.1
	});
}

//добавление контейнера
var container = new createjs.Container();

var rectBigBlack1 = new createjs.Shape();
rectBigBlack1.graphics
.f("#202020")
.dr(0, 0, 100, 100);

rectBigBlack1.regX = 50;
rectBigBlack1.regY = 50;

rectBigBlack1.x = 400;
rectBigBlack1.y = 550;

var fon = new createjs.Shape();
fon.graphics
.beginFill("#C0C0C0")
.rect(0, 0, 1600, 600);

fon.x = 0;
fon.y = 0;


//черно-белые квадраты в контейнере
var imgCont1 = new createjs.Bitmap("Images/imgM1.png");
imgCont1.x = 400;
imgCont1.y = 300;
imgCont1.regX = 100;
imgCont1.regY = 100;

var imgCont2 = new createjs.Bitmap("Images/imgM2.png");
imgCont2.x = 400;
imgCont2.y = 300;
imgCont2.regX = 0;
imgCont2.regY = 100;

var imgCont3 = new createjs.Bitmap("Images/imgM3.png");
imgCont3.x = 400;
imgCont3.y = 300;
imgCont3.regX = 0;
imgCont3.regY = 0;

var imgCont4 = new createjs.Bitmap("Images/imgM4.png");
imgCont4.x = 400;
imgCont4.y = 300;
imgCont4.regX = 100;
imgCont4.regY = 0;


