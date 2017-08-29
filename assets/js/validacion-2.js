$(document).ready(function(){
	$('#boton-2').click(function(){
		var nombre = $('#first_name').val();
		var correoDos = $('#email-2').val();
		var passDos = $('#password-2').val();

		if(nombre.length == 0 && correoDos.length == 0 && passDos.length == 0){
			alert('Debes ingresar los datos solicitados para poder crear tu cuenta')
		}else if(nombre.length == 0 && correoDos.length > 0 && passDos.length == 0){
			alert("Favor complete los campos");
		}else if(nombre.length > 0 && correoDos.length == 0 && passDos.length == 0){
			alert("Favor complete los campos");
		}else if(nombre.length > 0 && correoDos.length > 0 && passDos.length == 0){
			alert("Favor complete los campos");
		}else if(nombre.length > 0 && correoDos.length == 0 && passDos.length > 0){
			alert("Favor complete los campos");
		}else if(nombre.length == 0 && correoDos.length == 0 && passDos.length > 0){
			alert("Favor complete los campos");
		}else if(nombre.length == 0 && correoDos.length > 0 && passDos.length > 0){
			alert("Favor complete los campos");
		}else{
			localStorage.setItem("correo", correoDos);		
			$('#boton-2').attr('href', 'index-3.html');		
		}
	})
	var corr = localStorage.getItem('correo');
	console.log(localStorage.getItem('correo'));
	$('#mostrar-correo').html(corr); 
})

