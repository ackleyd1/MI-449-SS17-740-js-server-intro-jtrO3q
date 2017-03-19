// Require Node's http module and assign it to a variable
var http = require('http')

// array of jokes to use based off of the number from getRandom
var jokes = [
  'Knock Knock<br> Who\'s there?<br> Old lady<br> Old lady who?<br> Wow I didn\'t know you could yodel.',
  'Knock Knock<br> Who\'s there?<br> Doris!<br> Doris who?<br> Doris locked that\'s why I am knocking!',
  'Knock Knock!<br> Who\'s there?<br> Yah!<br> Yah who?<br> Naaah, bro, I prefer google.',
  'Voldemort: Knock Knock<br> Harry Potter: Who\'s There?<br> Voldemort: You Know.<br> Harry Potter: You Know Who?<br> Voldemort: Exactly!']

// Our function that will generate a random number between 0 and 3 inclusive
var getRandom = function () {
  var randomfloat = Math.random()
  return Math.round(randomfloat * (3))
}

// Create a new server per project guidelines
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<p>Greetings Web Adventurer!</p>' +
      '<ul>' +
      '<li><a href="/random-joke">Random Joke</a></li>' +
      '<li><a href="/cuteness">Cuteness</a></li>' +
      '</ul>'
    )
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Random Joke</h1>' +
      '<p>' + jokes[getRandom()] + '</p>' +
      '<a href="/">I wanna go home</a>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="http://www.awesomelycute.com/gallery/2011/09/awesomely-cute-animals-335.jpg" alt="meditating turtle">' +
      '<a href="/">I wanna go home</a>'
    )
  } else {
    response.end(
      '<h1>Page Not Found</h1>' +
      '<a href="/">Go Home url, you\'re drunk</a>' +
      '<p>The requested url: ' + request.url + ' was not found on this server</p>'
    )
  }
})

// Listen on Heroku port or port 8080, so that we can reach the app on heroku and localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
