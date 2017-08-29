$(document).ready(function(){
	$('#boton-2').click(function(){
		var nombre = $('#first_name').val();
		var correoDos = $('#email-2').val();
		var passDos = $('#password-2').val();

		if(nombre.length == 0 && correoDos.length == 0 && passDos.length == 0){
			alert('Debes ingresar los datos solicitados para poder crear tu cuenta')
		}else{
			$('#boton-2').attr('href', 'index-3.html')
		}
	})
})
