var img_tracker = "apagada";


function lamp(){
	if(img_tracker =="apagada"){
		document.getElementById('Imagem').src = "./lampada_on.gif"
		img_tracker = 'acesa';
	}else{
		document.getElementById('Imagem').src = "./lampada_off.gif"
		img_tracker = 'apagada';
	}
}
