var tl = new TimelineMax();

stage.addChild(img1);
stage.addChild(img2);
stage.addChild(img3);
stage.addChild(img4);

stage.addChild(rect1);
stage.addChild(rect2);
stage.addChild(rect3);
stage.addChild(rect4);

tl.call(motion1);

tl.call(motion2, [], this, "-=0.1");

tl.call(function () {
    stage.removeChild(rect1, rect2, rect3, rect4);
    stage.addChild(rectBig);
}, [], this, "+=2.2");

tl.to(rectBig, 0.2, {y: 550});
tl.to(rectBig, 0.2, {y: 500});
tl.to(rectBig, 0.2, {y: 550});

stage.addChild(circ);
stage.addChild(imgM1);
stage.addChild(imgM2);
stage.addChild(imgM3);
stage.addChild(imgM4);
stage.addChild(rectBigBlack);

imgM1.mask = circ;
imgM2.mask = circ;
imgM3.mask = circ;
imgM4.mask = circ;
rectBigBlack.mask = circ;

tl.call(function () {
    stage.removeChild(rectBig);
}, [], this, "+=0.1");

tl.to(circ, 2, {scaleX:1, scaleY:1});

tl.call(function () {
	stage.removeChild(circ, imgM1, imgM2, imgM3, imgM4, img1, img2, img3, img4);
    stage.addChild(container);
	container.addChild(fon);
	container.addChild(rectBigBlack1);
	container.addChild(imgCont1);
	container.addChild(imgCont2);
	container.addChild(imgCont3);
	container.addChild(imgCont4);
	tl.to(container, 1.5, {x:700, y:-100, rotation: 90});
	tl.to(rectBigBlack1, 3, {x:900}, "-=1.0");

	stage.addChild(rectBigGray1);
	stage.addChild(rectBigGray2);

	tl.to(rectBigGray1, 1, {y:-100},"-=1.5");
	tl.to(rectBigGray2, 1, {y:300},"-=1.5");

	stage.addChild(rectBlack1);
	tl.to(rectBlack1, 0.7, {scaleX: 1, scaleY: 1, rotation: 720}, "-=1.0");

	stage.addChild(txt);
	tl.to(txt, 0.7, {scaleX: 1, scaleY: 1, rotation: 720}, "-=1.0");

}, [], this, "+=0.1");


