//initialize webpage (jquery)
$(document).ready(function(){
  $("p").hide(); //hide all p tags
  $("#landingTxt").show(); //show landing text
});

//takes 2 parameters: section id and element id (Both must be in '' so read as string)
function showText(section, order) {
  $("#"+section+" p").hide(); //hide all <p> that are child of this section
  $("#"+section+" p:nth-of-type("+order+")").show(); //if order is 2, show the 2nd <p> that is a child of this section
}

//takes 2 parameters: id of the element that's going to change, and the text it'll get changed to.
function changeText(txt) {
  document.getElementById("landingTxt").innerHTML = txt;
}

// takes 1 parameter: id of the element that's going to change and shows default text as specified in var default.
function defaultText() {
  document.getElementById("landingTxt").innerHTML = "I've developed 8 guidelines, for your consideration, on how to make more responsibly.";
}
