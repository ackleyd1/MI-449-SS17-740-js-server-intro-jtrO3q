// Require Node's http module and assign it to a variable
var http = require('http')

var randomNumber = Math.Random()

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<p>Greetings Web Adventurer!</p>'
    )
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Random Joke</h1>' +
      '' +
      '<a href="/">I wanna go home</a>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src=http://www.awesomelycute.com/gallery/2011/09/awesomely-cute-animals-335.jpg alt="meditating turtle">' +
      '<a href="/">I wanna go home</a>'
    )
  } else {
    response.end(
      '<h1>Page Not Found</h1>' +
      '<a href="/">Go Home url, you\'re drunk' +
      '<p>The requested url: ' + response.url + ' was not found on this server</p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
