$(document).ready(function(){
	$('#boton').click(function(){
		var correo = $('#email').val();
		var pass = $('#password').val();
		if(correo.length == 0 && pass.length == 0){
			alert("Debe ingresar los datos solicitados")
		}else if(correo.length == 0 && pass.length > 0){
			alert("Favor complete los campos");
		}else if(correo.length > 0 && pass.length == 0){
			alert("favor complete los campos");
		}else{
			$('#boton').attr('href', 'index-2.html');
		}
	});
});