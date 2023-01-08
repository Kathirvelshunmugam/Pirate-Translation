var btnTranslate = document.querySelector("#btn-translate")
var inputTxt = document.querySelector("#input-txt")
var outputDiv = document.querySelector("#output")

var serverURL =	"https://api.funtranslations.com/translate/pirate.json"


function translationURL(text)
{
  return serverURL + "?" + "text=" + text 
}

function errorHandler(error)
{
  console.log("error occured", error);
  console.log("Something went wrong try again after some time")
}

function clickHandler()
{
  var txtInput = inputTxt.value;

  fetch(translationURL(txtInput))
  .then(response => response.json())
  .then(json => {
    var translatedText = (json.contents.translated)
    outputDiv.innerText = translatedText;
  })

  .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)