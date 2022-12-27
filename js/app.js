

  

var btnEnviar = document.getElementById('btnform');


btnEnviar.addEventListener('click', () =>{
  event.preventDefault()
  
  
  var nombre = document.getElementById('name');
  var email = document.getElementById ('email');

 

  const nombres = nombre.value.length;
  const emails = email.value.length;
  const todo = nombres + emails;
  
  if(todo <= 5){
    console.log("Error");    
    Swal.fire({
      icon: 'error',
      title: 'Nombre o Correo mal escrito',
      text: 'Vuelva a revisar',
    })

} else {
  console.log(nombre.value + email.value);
  Swal.fire({
    icon: 'success',
    title: 'Mensaje enviado ',
    text: `Pronto el caballero se contactara con usted ${email.value }`,
  })
}

form.reset();
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






