
/*function mostrar (){


  swal({
    title: "Mensaje exitoso",
    text: "Mensaje enviado",
    icon: "success",
    button: "close",
  });
}*/
  

var btnEnviar = document.getElementById('btnform');


btnEnviar.addEventListener('click', function(){
  event.preventDefault()
  var nombre = document.getElementById('name');
  var email = document.getElementById ('email');
 
  
  if(nombre.value.length < 3, email.value.length <2){
    Swal.fire({
      icon: 'error',
      title: 'Nombre o Correo mal escrito',
      text: 'Vuelva a revisar',
    })

} else {
  Swal.fire({
    icon: 'success',
    title: 'Mensaje enviado ',
    text: `Pronto el caballero se contactara con usted ${email.value }`,
  })
}

});

var btnreiniciar = document.getElementById("reiniciar");
let comando = 'x';

document.querySelectorAll('#tableta button').forEach (element=> {
  element.addEventListener('click', ()=> {
    if (element.innerHTML == ''){
      element.innerHTML = comando;
      comando = comando === 'x' ? 'o': 'x';

    }
  })
})


btnreiniciar.addEventListener('click', function(){
  document.querySelectorAll('#tableta button').forEach((element)=> {
    element.innerHTML= '';
  });
})






