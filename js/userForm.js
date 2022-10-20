/*2*/ let personajes = [];

function creadorPersonaje(nombrePersonaje, edad) {
  //Object creation part
  const personaje = new Object();
  personaje.name = nombrePersonaje;
  personaje.edad = edad;

  console.log(personaje);

  //Check if array has this object already
  if (personajes.some((e) => e.name === nombrePersonaje)) {
    console.log('ya existe ese lol');
  } else {
    personajes.push(personaje);
  }
}

document.addEventListener('keypress', (e) => {
  /*3*/ if (e.key == 'Enter') {
    let nombrePersonaje = document.getElementById('namePlayer').value;
    let agePersonaje = document.getElementById('agePlayer').value;
    creadorPersonaje(nombrePersonaje, agePersonaje);
    console.log(personajes);
    console.log(nombrePersonaje);
  }
});
