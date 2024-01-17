const quizData = [
    {
      question: '1/9 Ko pamatiedzīvotāji darīja pirms eiropiešu ierašanās?',
      options: ['Medības, augļu vākšana, makšķerēšana', 'Mēdības un makšķerēšana', 'Tikai augļu vākšana', 'Neko'],
      answer: 'Medības, augļu vākšana, makšķerēšana',
    },
    {
      question: '2/9 Kas samazinājās vietēju iedzīvotāju zemēs un ko tie pazaudēja, kad sākās kolonizācija?',
      options: ['Iedzīvotāju skaits samazinājas', 'Iedzīvotāju skaits, tradicionālas zemes un kultūras vērtības', 'Tradicionālas zemes pazaudēja', 'Viss bija kārtībā'],
      answer: 'Iedzīvotāju skaits, tradicionālas zemes un kultūras vērtības',
    },
    {
      question: '3/9 Kad sākās Austrālijas kolonizācija un kā tas notika?',
      options: ['Tas sākās 1492. gadā, kad Krištofs Kolumbs iegāja Austrālijas piekrasti.', 'Austrālijas kolonizācija sākās 1800. gadā, kad tika noslēgts līgums ar vietējiem iedzīvotājiem.', 'Austrālijas kolonizācija sākās 1600. gadā ar Spānijas ekspedīciju.', 'Ar pirmo eiropiešu ierašanos kontinentā 1788. gadā.'],
      answer: 'Ar pirmo eiropiešu ierašanos kontinentā 1788. gadā.',
    },
    {
      question: '4/9 Kā sauca cilvēku, kurš atklāja Austrālijas austrumu krastu un pieprasīja to Lielbritānijai?',
      options: ['Kapteinis Morgan', 'Vasko de Gama', 'Džeimss Kuks', 'Kristofers Kolumbs'],
      answer: 'Džeimss Kuks',
    },
    {
      question: '5/9 Kā sauca pirmā Austrālijas kolonijas dibinātāju?',
      options: [
        'Kristofers Kolumbs',
        'Arturs Filips',
        'Džeimss Kuks'
      ],
      answer: 'Arturs Filips',
    },
    {
      question: '6/9 Kādi resursi kolonistiem bija pieejami Jaundienvidvelsā?',
      options: ['Nekas nebija pieejams', 'Tikai zelts un Ogles', 'Vilna, Zelts un Ogles', 'Vilna, Zelts un Mēlnais jērs'],
      answer: 'Vilna, Zelts un Ogles',
    },
    {
      question: '7/9 Kā sauc kustību, kas sākās 19. gadsimta vidū un tā iestājas par koloniju apvienošanu?',
      options: [
        '"Monarhija"',
        '"Demokrātija"',
        '"Federalisms"',
      ],
      answer: '"Federalisms"',
    },
    {
      question: '8/9 Nosauciet vienu no ievērojamākajām federālisma figūrām:',
      options: ['Pablo Pikaso', 'Mārtiņš Luteris', 'Henrijs Pārkss', 'Georgs Vašingtons'],
      answer: 'Henrijs Pārkss',
    },
    {
      question: '9/9 Kāpēc tūristi pievērš uzmanību Austrālijai un kas piesaista viņus?',
      options: [
        'Autrālijas virtuve',
        'Kultūra un daba',
        'Dziļūdens haizivis',
        'Sēnes un meži',
      ],
      answer: 'Kultūra un daba',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `Jūsu rezultāts ${score} no ${quizData.length}!`;
  }
  
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Jautājums:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Jūsu atbilde:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Pareizā atbilde:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>Jūsu rezultāts ${score} no${quizData.length}!</p>
      <p>Nepareizas atbildes::</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();

  const copyScoreButton = document.getElementById('copyScoreButton');

copyScoreButton.addEventListener('click', function() {
  const scoreText = `Jūsu rezultāts ${score} no ${quizData.length}!`;
  
  // Create a temporary text area element to hold the text
  const textArea = document.createElement('textarea');
  textArea.value = scoreText;
  document.body.appendChild(textArea);
  
  // Select and copy the text in the text area
  textArea.select();
  document.execCommand('copy');
  
  // Remove the temporary text area
  document.body.removeChild(textArea);
  
  // Display a message indicating that the score has been copied
  copyScoreButton.textContent = 'Nokopēts!';
});

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  showAnswerButton.style.display = 'inline-block';
  copyScoreButton.style.display = 'inline-block'; // Show the copy button
  resultContainer.innerHTML = `Jūsu rezultāts ${score} no ${quizData.length}!<br><br>
  Nospied uz pogu "Nokopēt rezultātu" un atgriezies atpakaļ uz cilni ar aptauju, kur jāievieto Jūsu rezultāts.`;
}
