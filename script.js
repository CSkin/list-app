// jshint loopfunc: true

var list;

// Store list items as an array of objects. The viewed property tracks whether each item has been viewed.
function resetList() {
  list = [
    {text: "Body is light, and the mouthfeel smooth.", viewed: false},
    {text: "The palate gathers apple peel, light clove notes and a thin sweetness that's touched with caramel.", viewed: false},
    {text: "In the middle, ripe and juicy fresh wheat malt with pear edge.", viewed: false},
    {text: "A husky, grainy, wheat twang livens things up.", viewed: false},
    {text: "Suggestions of bubblegum are noted.", viewed: false},
    {text: "There's very little bitterness.", viewed: false},
    {text: "A slight lemony sourness, banana pith and light hop leaf character combine to increase the perceived bitterness.", viewed: false},
    {text: "Yeast is rather neutral, a bit chalky.", viewed: false},
    {text: "Some medicinal phenols show through toward the finish.", viewed: false},
    {text: "Finish dries the palate, with a lingering wheat and barley husk.", viewed: false},
    {text: "Very smooth on the palate.", viewed: false},
    {text: "The creamy carbonation builds up to a seltzery feel and tonic-water bite.", viewed: false},
    {text: "This is followed by a quick and sharp tannic tartness that oddly lingers in the background and into the finish.", viewed: false},
    {text: "Layered on top of this is something quite sweet, but not cloying.", viewed: false},
    {text: "The base is rosewater-like, with notes of strawberries, faint berry-like sourness, and white grapes.", viewed: false},
    {text: "Other notes include orange pith, floral honey, over-ripe peach meat, pear juice, and hints of mint.", viewed: false},
    {text: "The cutting peppery edge segues into a somewhat-spicy and increasingly warming booziness.", viewed: false},
    {text: "8 percent alcohol by volume.", viewed: false},
    {text: "Pleasingly herbal, akin to sweetened cold Chinese tea.", viewed: false},
    {text: "Light tannins linger in the bone-dry, powdery finish.", viewed: false},
    {text: "Pours fizzy, creating a beige/eggshell-colored foamy head.", viewed: false},
    {text: "The head is dense and wonderfully laced, sticking to the glass and also retaining magnificently.", viewed: false},
    {text: "In fact, the lacing stays until the end.", viewed: false},
    {text: "Beneath, a deep brown brew with rich tawny hues.", viewed: false},
    {text: "This beer has some serious legs.", viewed: false},
    {text: "Complex aromas: soft and powdery on the nose.", viewed: false},
    {text: "Aromas of malt, chocolate chip cookie dough and a deep-rooted fruitiness.", viewed: false},
    {text: "Notes of plum skins, spicy phenols and a soft bready yeast character.", viewed: false},
    {text: "Nose shows some clove and banana bread.", viewed: false},
    {text: "A soft wheat-husk background, with nutty yeast, hints of citrus and a brush of floral.", viewed: false},
    {text: "In the mouth, the beer is smooth on the palate, light and uplifting.", viewed: false},
    {text: "The palate is piqued by crisp carbonation.", viewed: false},
    {text: "The watery, lemony edge that segues into a slightly grassy wheat twang.", viewed: false},
    {text: "Very soft phenolic clover-like and thin banana flavors.", viewed: false},
    {text: "Pithy floral, nutty yeast, gummy notes.", viewed: false},
    {text: "Hops are non-existent, but somewhat expected for the style.", viewed: false},
    {text: "Malt characters are weak, lending just a hint of residual sweetness.", viewed: false},
    {text: "The finish on this brew is bone dry.", viewed: false},
    {text: "A mouthful of rough and husky tannins and yeast flavors linger long past their welcome.", viewed: false},
    {text: "Pours a very hazy, dirty peach color with tons of remaining sediment in the bottle.", viewed: false},
    {text: "The head is vigorous but quickly snaps down to a thin, wispy lace.", viewed: false},
    {text: "There isn't much head retention, but you can see the tight bubbles surface.", viewed: false},
    {text: "Aroma is uniquely pungent.", viewed: false},
    {text: "Plenty of pine tones, hints of menthol, herbs and a vaguely medicinal undercurrent.", viewed: false},
    {text: "Oddly, there are also bizarre tones of cooked greens, freshly cut grass, animal feed, and generic bullion cube (no, really!).", viewed: false},
    {text: "Lingering fruit characters bring to mind the essence of tart orange juice.", viewed: false},
    {text: "Dominant fruit zest, berry tones and skin-like tannins.", viewed: false},
    {text: "The 7.7 percent abv is hardly noticeable.", viewed: false},
    {text: "Huge notes of cold brewed coffee, roasted nuts, brown sugar, dark malts.", viewed: false},
    {text: "The medium-bodied mouthfeel enhances flavors while still keeping drinkability ridiculously high.", viewed: false}
  ];
}

// Check for existing list data
if (window.localStorage.list) {
  list = JSON.parse(window.localStorage.list);
} else {
  resetList();
}

// Save list changes in local storage
function saveList() {
  window.localStorage.list = JSON.stringify(list);
}

// Return a random integer between min (included) and max (excluded)
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Display a random list item
function writeItem() {
  if (list.length > 0) {
    var index = randomize(0, list.length);
    document.getElementById("mitem").textContent = list[index].text;
    list[index].viewed = true;
    saveList();
  }
}

// Write list items to a table in the list view
function writeList(i) {
  var table = document.getElementById("ltable");
  for (i; i < list.length; i++) {
    var row = document.createElement("tr");
    var numCell = document.createElement("td");
    var itemCell = document.createElement("td");
    var btnCell = document.createElement("td");
    numCell.style.width = "20px";
    numCell.style.verticalAlign = "top";
    itemCell.style.paddingLeft = "10px";
    itemCell.style.paddingRight = "10px";
    itemCell.style.cursor = "pointer";
    btnCell.style.width = "20px";
    btnCell.style.textAlign = "right"
    btnCell.style.cursor = "pointer";
    var numText,
        itemText,
        btnText;
    if (list[i].viewed) {
      numText = document.createTextNode(i + 1 + ".");
      itemText = document.createTextNode(list[i].text);
      btnText = document.createTextNode("x");
      itemCell.onclick = function(){viewItem(this)};
      btnCell.onclick = function(){removeItem(this)};
    } else {
      numText = document.createTextNode(i + 1 + ".");
      itemText = document.createTextNode("???");
      itemCell.style.textAlign = "center";
      itemCell.style.cursor = "auto";
      btnText = document.createTextNode("");
    }
    numCell.appendChild(numText);
    itemCell.appendChild(itemText);
    btnCell.appendChild(btnText);
    row.appendChild(numCell);
    row.appendChild(itemCell);
    row.appendChild(btnCell);
    table.appendChild(row);
  }
}

// Open the list view (also writes the list)
function viewList() {
  writeList(0);
  document.getElementById("list").style.display = "flex";
}

// Close the list view (also clears the list)
function closeList() {
  document.getElementById("list").style.display = "none";
  document.getElementById("ltable").innerHTML = "";
}

// Display clicked item in main view and close list view
function viewItem(element) {
  var index = Number(element.previousElementSibling.textContent) - 1;
  document.getElementById("mitem").textContent = list[index].text;
  closeList();
}

// Add a new item to the end of the list
function addItem() {
  var newItem = document.getElementById("txtAdd").value;
  if (newItem) {
    list.push({text: newItem, viewed: true});
    saveList(list);
    writeList(list.length - 1);
    document.getElementById("txtAdd").value = "";
  }
}

// Refresh the list
function refreshList() {
  document.getElementById("ltable").innerHTML = "";
  writeList(0);
}

// Remove the clicked item from the list and refresh the list
function removeItem(element) {
  var index = Number(element.previousElementSibling.previousElementSibling.textContent) - 1;
  list.splice(index, 1);
  saveList();
  refreshList();
}

// Restore default list data
function restoreList() {
  resetList();
  saveList();
  refreshList();
}