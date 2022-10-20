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
