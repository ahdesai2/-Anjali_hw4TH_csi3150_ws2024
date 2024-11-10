// List of famous quotes
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The purpose of life is not to be happy. It is to be useful. - Ralph Waldo Emerson",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];

// Function to display a random quote
function displayRandomQuote() {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Display quote using an alert
  alert(quotes[randomIndex]);
}

//  event listener 
document
  .getElementById("quoteButton")
  .addEventListener("click", displayRandomQuote);
