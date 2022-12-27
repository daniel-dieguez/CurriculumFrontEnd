

  

var btnEnviar = document.getElementById('btnform');


  const apodo = {
    correos :  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  }

  



btnEnviar.addEventListener('click', (e) =>{
  event.preventDefault()
  
  var nombre = document.getElementById('name');
  var email = document.getElementById ('email');

  const nombres = nombre.value.length;
  const emails = email.value.length;
  const todo = nombres + emails;
  
  if(todo === 0)
   
  {
    setTimeout(() => {
      console.log("Error");    
    Swal.fire({
      icon: 'error',
      title: 'Nombre o Correo mal escrito',
      text: 'Vuelva a revisar',
    })    
    }, 1000);
     

} else {
  setTimeout(() => {
    console.log(nombre.value + email.value);
  Swal.fire({
    icon: 'success',
    title: 'Mensaje enviado ',
    text: `Pronto el caballero se contactara con usted`,
  })    
  }, 1000);
  
}

form.reset();
});


//totito Juego 

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








