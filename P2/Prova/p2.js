window.addEventListener('load',function(){
	var botao = document.getElementById('salvar');
	botao.addEventListener('click',calcular ,false);
});

function calcular(){
	dataChegada = document.getElementById('dataC');
	dataSaida = document.getElementById('dataS');
	quantidadeQuartos = document.getElementById('qntQ').value;
	quantidadeCriancas = document.getElementById('qntC').value;

	var dataC = new Date(dataChegada.value).getTime();
	var dataS = new Date(dataSaida.value).getTime();

	dataC = dataC /1000 /60 /60 /24;
	dataS = dataS /1000 /60 /60 /24;

	var dias = dataS - dataC;

	var quantQ = parseInt(quantidadeQuartos);
	var quantC = parseInt(quantidadeCriancas);


	switch(quantQ){
		case 1:
			var valorPorQuarto = 139;
			break;
		case 2:
			var valorPorQuarto = 220;
			break;
		case 3:
			var valorPorQuarto = 340;
			break;			
	}

	switch(quantC){
		case 0:
			var valorAdicional = 0;
			break;
		case 1:
			var valorAdicional = 30;
			break;
		case 2:
			var valorAdicional = 60;
			break;
		case 3:
			var valorAdicional = 90;
			break;		
	}


	var resultado =0;

	resultado = (valorPorQuarto + valorAdicional) * dias;

	alert("Total: " +resultado+ " R$");
}