function changeText(text)
{
    document.getElementById("landingTxt").innerHTML = text;
}

function defaultText()
{
    var display = document.getElementById('landingTxt');
    display.innerHTML = "";
    display.innerHTML = "I've developed 10 guidelines, for your consideration, on how to make more responsibly.";
}
