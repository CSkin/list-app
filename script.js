// Store list items in an array
var list = ["Body is light, and the mouthfeel smooth.", "The palate gathers apple peel, light clove notes and a thin sweetness that's touched with caramel.", "In the middle, ripe and juicy fresh wheat malt with pear edge.", "A husky, grainy, wheat twang livens things up.", "Suggestions of bubblegum are noted.", "There's very little bitterness.", "A slight lemony sourness, banana pith and light hop leaf character combine to increase the perceived bitterness.", "Yeast is rather neutral, a bit chalky.", "Some medicinal phenols show through toward the finish.", "Finish dries the palate, with a lingering wheat and barley husk.", "Very smooth on the palate.", "The creamy carbonation builds up to a seltzery feel and tonic-water bite.", "This is followed by a quick and sharp tannic tartness that oddly lingers in the background and into the finish.", "Layered on top of this is something quite sweet, but not cloying.", "The base is rosewater-like, with notes of strawberries, faint berry-like sourness, and white grapes.", "Other notes include orange pith, floral honey, over-ripe peach meat, pear juice, and hints of mint.", "The cutting peppery edge segues into a somewhat-spicy and increasingly warming booziness.", "8 percent alcohol by volume.", "Pleasingly herbal, akin to sweetened cold Chinese tea.", "Light tannins linger in the bone-dry, powdery finish.", "Pours fizzy, creating a beige/eggshell-colored foamy head.", "The head is dense and wonderfully laced, sticking to the glass and also retaining magnificently.", "In fact, the lacing stays until the end.", "Beneath, a deep brown brew with rich tawny hues.", "This beer has some serious legs.", "Complex aromas: soft and powdery on the nose.", "Aromas of malt, chocolate chip cookie dough and a deep-rooted fruitiness.", "Notes of plum skins, spicy phenols and a soft bready yeast character.", "Nose shows some clove and banana bread.", "A soft wheat-husk background, with nutty yeast, hints of citrus and a brush of floral.", "In the mouth, the beer is smooth on the palate, light and uplifting.", "The palate is piqued by crisp carbonation.", "The watery, lemony edge that segues into a slightly grassy wheat twang.", "Very soft phenolic clover-like and thin banana flavors.", "Pithy floral, nutty yeast, gummy notes.", "Hops are non-existent, but somewhat expected for the style.", "Malt characters are weak, lending just a hint of residual sweetness.", "The finish on this brew is bone dry.", "A mouthful of rough and husky tannins and yeast flavors linger long past their welcome.", "Pours a very hazy, dirty peach color with tons of remaining sediment in the bottle.", "The head is vigorous but quickly snaps down to a thin, wispy lace.", "There isn't much head retention, but you can see the tight bubbles surface.", "Aroma is uniquely pungent.", "Plenty of pine tones, hints of menthol, herbs and a vaguely medicinal undercurrent.", "Oddly, there are also bizarre tones of cooked greens, freshly cut grass, animal feed, and generic bullion cube (no, really!).", "Lingering fruit characters bring to mind the essence of tart orange juice.", "Dominant fruit zest, berry tones and skin-like tannins.", "The 7.7 percent abv is hardly noticeable."];

// Return a random integer between min (included) and max (excluded)
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Write a random list item to the h1 tag
function writeItem() {
  document.getElementById("mitem").textContent = list[randomize(0, list.length)];
}

// Open the list view
function viewList() {
  document.getElementById("list").style.display = "flex";
}

// Close the list view
function closeList() {
  document.getElementById("list").style.display = "none";
}

