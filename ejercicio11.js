function limpia(event){
  const pTitle = document.getElementById('pTitle');
  const pDescription = document.getElementById('pDescrip');
  const btnAceptar = document.getElementById('btnAcc');
  const error = document.getElementById('error');

  pTitle.classList.remove('invalid');
  pDescription.classList.remove('invalid');
  btnAceptar.classList.remove('invalid');
  error.classList.add('oculto');
}

const validacion = (e) =>{
  e.preventDefault();

  let i = 0;

  const error = document.getElementById('error');

  const titulo = document.getElementById('titulo');
  const pTitle = document.getElementById('pTitle');

  const descripcion = document.getElementById('descripcion').value;
  const pDescription = document.getElementById('pDescrip');

  const aceptar = document.getElementById('accept');
  const btnAceptar = document.getElementById('btnAcc');

  if(titulo.value === ""){
    //El alert es opcional
    alert("Por favor, escribe un titulo a tu fotografía");
    titulo.focus();

    pTitle.classList.add('invalid');
    error.classList.remove('oculto');
    i++;
  }
  else {
    pTitle.classList.remove('invalid');
  }

  if(descripcion === null || descripcion.length === 0 || /^\s+$/.test(descripcion)){
    //El alert es opcional
    alert("Por favor, ingresa una breve descripción de tu fotografía");
    pDescription.classList.add('invalid');
    error.classList.remove('oculto');
    i++;
  }
  else {
    pDescription.classList.remove('invalid');
  }

  if(!aceptar.checked){
    //El alert es opcional
    alert("Para enviar, es necesario que aceptes la licencia de software");
    btnAceptar.classList.add('invalid');
    error.classList.remove('oculto');
    i++;
  }
  else {
    btnAceptar.classList.remove('invalid');
  }

  if(i !== 0){
    return false;
  }

  error.classList.add('oculto');
  return true;
}

const btrEnviar = document.getElementById('btn-enviar');
btrEnviar.addEventListener('click', validacion);

const btrLimpiar = document.getElementById('btn-limpiar');
btrLimpiar.addEventListener('click', limpia);
