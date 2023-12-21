
  // function toggleElement(elementId) {
  //   var element = document.getElementById(elementId);
  //   if (element) {
  //     element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
  //   }
  // }

  // function hideElement(elementId) {
  //   var element = document.getElementById(elementId);
  //   if (element) {
  //     element.style.display = 'none';
  //   }
  // }

  function readText(elementId) {
    var textToRead = document.getElementById(elementId).innerText;

    // Check if the SpeechSynthesis API is supported
    if ('speechSynthesis' in window) {
      var synthesis = window.speechSynthesis;
      var utterance = new SpeechSynthesisUtterance(textToRead);

      // You can set additional properties for the utterance if needed
      // utterance.volume = 1;
      // utterance.rate = 1;
      // utterance.pitch = 1;

      synthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser. Please use a modern browser.');
    }
  }
