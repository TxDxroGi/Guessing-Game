var words = ["developer", "engineer", "software", "hacker", "project", "network",];
var selectedWord = words[Math.floor(Math.random() * words.length)];
var guessedWord = Array(selectedWord.length).fill('_');
var remainingGuesses = 5;

function updateDisplay() {
  document.getElementById('word-display').innerHTML = guessedWord.join(' ');
  document.getElementById('guesses').innerHTML = remainingGuesses;
}

function guessLetter() {
  var letterInput = document.getElementById('letter-input').value.toLowerCase();

  if (letterInput.length !== 1 || !/^[a-z]$/.test(letterInput)) {
    document.getElementById('message').innerHTML = 'พิมพ์ตัวอักษรก๊อนนน!!';
    return;
  }

  if (selectedWord.includes(letterInput)) {
    for (var i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letterInput) {
        guessedWord[i] = letterInput;
      }
    }
    document.getElementById('message').innerHTML = 'หึ้ยย เอาดีย์';
  } 
  else 
  {
    remainingGuesses--;
    document.getElementById('message').innerHTML = "ไม่ใช่หนาๆ";
  }

  if (remainingGuesses === 0) {
    document.getElementById('message').innerHTML = 'มันคือคำว่า : ' + selectedWord;
    document.getElementById('letter-input').disabled = true;    
  }

  if (!guessedWord.includes('_')) {
    document.getElementById('message').innerHTML = 'เก่งงมากก มันคือคำว่า : ' + selectedWord;
    document.getElementById('letter-input').disabled = true;
  }

  updateDisplay();
}
updateDisplay();