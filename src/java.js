function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#poem', {
    strings: ['this is where the poem will go'],
    autoStart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector('#poem-generator');
poemFormElement.addEventListener('submit', generatePoem);
