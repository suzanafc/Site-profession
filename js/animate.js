var slide3=document.querySelector('.Wij-3 ');
var slide1=document.querySelector('.Wij-1 ');
var slidePrimeiro=document.querySelector('.Wij-1 ').offsetTop;
var slideSegundo=document.querySelector('.Wij-2 ').scrollHeight;
var slideTerceiro=document.querySelector('.Wij-3 ').scrollHeight+slideSegundo;
var slide1Descer=document.getElementById("descer1");
var slide2Descer=document.getElementById("descer2");
var slide3Recomeco=document.getElementById("recomeco");
var slide3Subir=document.getElementById("subir3");
var slide2Subir=document.getElementById("subir2");
var slide1Subir=document.getElementById("subir");
var pente=document.getElementById("j-pente");
var tesoura=document.getElementById("j-tesoura");
var prato=document.getElementById("j-prato");
var tempero=document.getElementById("j-tempero");
var cor=document.getElementById("j-cor");
var lapis=document.getElementById("j-lapis");
var iniciar;
var y2;
slide3.style.display="none";
//----------descer a pagina------------

//na primeira section
slide1Descer.onclick=function(){

	y2=1;
	pente.style.animation= "none";
	tesoura.style.animation= "none";

	iniciar=window.setInterval(function () {
		y2++;
		window.scrollTo(0,y2);

		if(y2==slideSegundo){
			pente.style.animation= "pisca 1s";
			tesoura.style.animation= "aparece 1s";
			clearInterval(iniciar);
		}
	},1);
};

// segunda section
slide2Descer.onclick=function(){

	slide3.style.display="block";
	cor.style.animation= "none";
	lapis.style.animation= "none";
	y2=slideSegundo;

	iniciar=window.setInterval(function () {
		y2++;
		window.scrollTo(0,y2);

		if(y2==slideTerceiro){
			cor.style.animation= "pisca 1s";
			lapis.style.animation= "aparece 1s";
			slide1.style.display="none";
			clearInterval(iniciar);
		}
	},1);
};

// na terceira section
slide3Recomeco.onclick=function(){

	y2=slidePrimeiro;
	window.scrollTo(0,y2);
	slide3.style.display="none";
	slide1.style.display="block";
};

//-----------------subir a pagina-------

// na primeira section
slide1Subir.onclick=function(){

	slide3.style.display="block";
	y2=slideTerceiro;
	window.scrollTo(0,y2);
	slide1.style.display="none";
};

// segunda section
slide2Subir.onclick=function(){

	prato.style.animation= "none";
	tempero.style.animation= "none";
	y2=slideSegundo;

	iniciar=window.setInterval(function () {
		y2--;
		window.scrollTo(0,y2);

		if(y2==slidePrimeiro){
			tempero.style.animation= "pisca 1s";
			prato.style.animation= "aparece 1s";
			clearInterval(iniciar);
		}
	},1);
};

// na terceira section
slide3Subir.onclick=function(){

	slide1.style.display="block";
	pente.style.animation= "none";
	tesoura.style.animation= "none";
	y2=slideTerceiro;

	iniciar=window.setInterval(function () {

		y2--;
		window.scrollTo(0,y2);

		if(y2==slideSegundo){
			slide3.style.display="none";
			pente.style.animation= "pisca 1s";
			tesoura.style.animation= "aparece 1s";
			clearInterval(iniciar);
		}
	},1); 
};

    