let currentVolume = document.getElementById('musicaInicial').volume;
console.log(currentVolume);
currentVolume = 0;
let maxVolume = 0.9;
let minVolume = 0.1;

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
