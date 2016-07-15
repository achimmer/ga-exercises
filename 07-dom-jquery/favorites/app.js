function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {
  var button = document.getElementById('add-button');
  var thingList = document.getElementById('fav-list');
  var thingField = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    if (!thingField.value.length) {
      alert('Empty field');
    } else {
      var newThing = thingField.value;
      addToList(thingList, newThing);
    }

    // ====== bonus version -- instead of line 28:
    // if (newThing === "") {
    //   alert("You must type in a value!");
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = "";
    // }

    thingField.value = "";
  };
};
