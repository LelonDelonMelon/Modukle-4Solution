var speakWord = "Hello";

(function (window, speakWord){
  var helloSpeaker = {};
  helloSpeaker.speak = function(names, namesDiv){

    namesDiv.innerText += ("\n "+speakWord + " " + names + "\n");
    console.log(speakWord+ " " + names);

  }
  window.helloSpeaker = helloSpeaker;
})(window, speakWord);
