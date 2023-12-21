const words = [
    "Vardaan Sir's birthday is on Today. Don't forget to wish. Thanks.", 
   
  ];
  
  let index = 0;
  const wordElement = document.getElementById("word");
  
  function changeWord() {
    const currentWord = words[index];
    wordElement.innerText = `"${currentWord}"`;
  
    // Read out the current word
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = 'en-US'; // Set the language to Hindi
    speechSynthesis.speak(utterance);
  
    index = (index + 1) % words.length;
  }
  
  setInterval(changeWord, 5000); // Change word every 5 seconds
  


// const words = [
//     "1- Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//     "2- Kinship - संबंध, रिश्ता, बंधन",
//     "3- उदार, दयालु, महानुभाव" Magnanimous
//     "4- Nefarious - दुर्जन, दुष्ट, अनैतिक",
//     "5- Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//     "6- Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//     "7- Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//     "8- Intrepid - निडर, निर्भीक, दिलेर",
//     "9- Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//     "10- Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
//   ];
  
//   let index = 0;
//   const wordElement = document.getElementById("word");
  
//   function changeWord() {
//     const currentWord = words[index];
//     wordElement.innerText = `"${currentWord}"`;
  
//     // Separate English and Hindi parts
//     const [englishWord, hindiTranslation] = currentWord.split(' - ');
  
//     // Read out the English word
//     const englishUtterance = new SpeechSynthesisUtterance(englishWord);
//     englishUtterance.lang = 'en-US'; // Set the language to English
//     speechSynthesis.speak(englishUtterance);
  
//     // Read out the Hindi translation
//     const hindiUtterance = new SpeechSynthesisUtterance(hindiTranslation);
//     hindiUtterance.lang = 'hi-IN'; // Set the language to Hindi
//     speechSynthesis.speak(hindiUtterance);
  
//     index = (index + 1) % words.length;
//   }
  
//   setInterval(changeWord, 5000); // Change word every 5 seconds
  

// const words = [
//     "1- Perfidious - धोखेबाज, dhokhebaj बेईमान, विश्वासघाती Perfidious",
//     "2- Kinship - संबंध, रिश्ता, बंधन",
//     "3- Magnanimous - उदार, दयालु, महानुभाव",
//     "4- Nefarious - दुर्जन, दुष्ट, अनैतिक",
//     "5- Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//     "6- Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//     "7- Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//     "8- Intrepid - निडर, निर्भीक, दिलेर",
//     "9- Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//     "10- Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
//   ];
  
//   let index = 0;
//   const wordElement = document.getElementById("word");
  
//   function changeWord() {
//     const currentWord = words[index];
//     wordElement.innerText = `"${currentWord}"`;
  
//     // Separate English and Hindi parts
//     const [englishWord, hindiTranslation] = currentWord.split(' - ');
  
//     // Read out the English word
//     const englishUtterance = new SpeechSynthesisUtterance(englishWord);
//     englishUtterance.lang = 'en-US'; // Set the language to English
//     speechSynthesis.speak(englishUtterance);
  
//     // Wait for the English part to finish before reading the Hindi translation
//     englishUtterance.onend = function () {
//       const hindiUtterance = new SpeechSynthesisUtterance(hindiTranslation);
//       hindiUtterance.lang = 'hi-IN'; // Set the language to Hindi
//       speechSynthesis.speak(hindiUtterance);
//     };
  
//     index = (index + 1) % words.length;
//   }
  
//   setInterval(changeWord, 10000); // Change word every 5 seconds






// const words = [
//     "1- Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//     "2- Kinship - संबंध, रिश्ता, बंधन",
//     "3- Magnanimous - उदार, दयालु, महानुभाव",
//     "4- Nefarious - दुर्जन, दुष्ट, अनैतिक",
//     "5- Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//     "6- Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//     "7- Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//     "8- Intrepid - निडर, निर्भीक, दिलेर",
//     "9- Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//     "10- Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
//   ];
  
//   let index = 0;
//   const wordElement = document.getElementById("word");
  
//   function changeWord() {
//     const currentWord = words[index];
//     wordElement.innerText = `"${currentWord}"`;
  
//     // Separate English and Hindi parts
//     const [englishWord, hindiTranslation] = currentWord.split(' - ');
  
//     // Read out the English word
//     speak(englishWord, 'en-US');
  
//     // Wait for the English part to finish before reading the Hindi translation
//     setTimeout(() => {
//       speak(hindiTranslation, 'hi-IN');
//     }, 1500);
  
//     index = (index + 1) % words.length;
//   }
  
//   function speak(text, lang) {
//     const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&q=${encodeURIComponent(text)}`);
//     audio.play();
//   }
  
//   setInterval(changeWord, 5000); // Change word every 5 seconds
  
  
