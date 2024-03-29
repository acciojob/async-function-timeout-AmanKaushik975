// Get the input, button, and output elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to introduce a delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Add an onClick event listener to the button
button.addEventListener('click', async () => {
  const text = textInput.value;
  const delayTime = Number(delayInput.value);

  // Introduce a delay before resolving the promise
  await delay(delayTime);

  // Display the user-provided text on the webpage
  output.textContent = text;
});
