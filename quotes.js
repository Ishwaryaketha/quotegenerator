const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis"
  ];
const generateButton = document.querySelector('button');
generateButton.addEventListener('click', () => {
    console.log('Button clicked'); // Debugging statement
    let quote = document.querySelector('.quote');
    if (quote) {
        const index = Math.floor(Math.random() * quotes.length);
        quote.textContent = quotes[index];
    }
});
