var quotes = [ 'Test1', 'Test2' ]

function newQuote(){
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
