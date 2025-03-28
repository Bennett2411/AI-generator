function diplayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector('#userInstructions');
  let apiKey = `e2f90841bba6oe00351f9aa2e3877b4t`;
  let prompt = `Generate a poem in English about ${instructionsInput.value}`;
  let context = `User Instructions: you are a romanic poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br>. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log('generating poem');
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(diplayPoem);
}

let poemFormElement = document.querySelector('#poem-generator');
poemFormElement.addEventListener('submit', generatePoem);
