const testVar = {}

function testFunc() {
  return "hi"
}

const obj = { "method": "POST", "body": {
  "firstName": "Tom", "registryMessage": "whatever"}}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", obj)
  .then(function(response) {
    return response.json()
  })
    .then(function(parsedJson) {
      return parsedJson.message
      })
  }

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", obj)
  .then(function(response) {
    return response.json()
  })
    .then(function(parsedJson) {
      return parsedJson.message
      })
      .catch(function(error) {
        return ":("
      })
}
