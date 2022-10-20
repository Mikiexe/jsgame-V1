let currentVolume = document.getElementById('musicaInicial').volume;
console.log(currentVolume);
currentVolume = 0;
let maxVolume = 0.9;
let minVolume = 0.1;

// Pasan dos parametros, la id del que se enseñará, la id del que se esconderá
// Se pasan en el documento html
const goTo = (divId, hideDivId) => {
  let showDiv = document.getElementById(divId);
  let esconde = document.getElementById(hideDivId);

  console.log(showDiv);
  console.log(esconde);

  showDiv.style.display = 'flex';
  esconde.style.display = 'none';
};

const hoverSlot = (backpack, slot) => {
  // console.log("Tengo la id: " + backpack);
  // console.log("Me pasan la id " + slot);
  let sloti = document.getElementById(backpack);

  sloti.removeAttribute('id', backpack);
  sloti.setAttribute('id', slot);
  // console.log("Quito la id:" + backpack);
  // console.log("Pongo la id:" + slot);
  // console.log("estas sobre mi");
  // console.log("--------------------------");
};

const unHoverSlot = (slot, backpack) => {
  // console.log(slot);
  // console.log(backpack);

  // console.log("Tengo la id slot: " + slot);
  // console.log("Me pasan la id: " + backpack);
  let sloti = document.getElementById(slot);

  // console.log("Quito la id " + slot);
  // console.log("Pongo de nuevo la id " + backpack);
  sloti.removeAttribute('id', slot);
  sloti.setAttribute('id', backpack);
  // console.log("------------------");
};

const volumeChanger = (volumeFunction) => {
  return volumeFunction();
};

let volumeAdd = () => {
  if (currentVolume < maxVolume) {
    let addVolumeElement = document.createElement('div');
    addVolumeElement.setAttribute('class', 'volumeElement');
    document.getElementById('volumeElements').appendChild(addVolumeElement);

    console.log('Add 1 volume');

    currentVolume += 0.1;
    console.log(currentVolume.toFixed(1));
  } else {
    return;
  }
};

let volumeSubstract = () => {
  if (currentVolume > minVolume) {
    let removeVolumeElement = document.getElementsByClassName('volumeElement');
    console.log('hay tantos divs con la clase: ' + removeVolumeElement.length);
    i = 1;
    // for (let i = 0; i < removeVolumeElement.length; i++) {
    //   console.log('i: ' + i);

    if ($('.volumeElement')[i] == undefined) {
      console.log(vol1);
    } else {
      $('.volumeElement')[1].remove();
    }
    // }
    console.log('Substract 1 volume');
    currentVolume -= 0.1;
    console.log(currentVolume.toFixed(1));
  } else {
    return;
  }
};
