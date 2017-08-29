$(document).ready(function(){
	$('#boton').click(function(){
		var correo = $('#email').val();
		var pass = $('#password').val();
		if(correo.length == 0 && pass.length == 0){
			alert("Debe ingresar los datos solicitados")
		}else{
			$('#boton').attr('href', 'index-2.html')
		}
	})
})