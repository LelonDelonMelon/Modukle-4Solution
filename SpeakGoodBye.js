var speakWord = "Good Bye";


(function (window,speakWord){
  var byeSpeaker = {};
  
  byeSpeaker.speak = function (names, namesDiv) {
    namesDiv.innerText += ("\n "+speakWord + " " + names + "\n");

    console.log(speakWord + " " + names);
  }
   
   window.byeSpeaker = byeSpeaker;
  })(window,speakWord);
