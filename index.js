const testVar = {}

function testFunc() {
  return "hi"
}





function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: {
      name: 'Jep',
      message: 'HELLOOOO'
    }
  }).then((response) => {
      return response.json()
    }).then((parsedJson) => {
      return parsedJson.message;
    })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: {
      name: 'Jep',
      message: 'Hello'
    }
  }).then((response) => {
    return response.json()
  }).then((parsedJson) => {
    return parsedJson.message
  }).catch((error) => {
    return ':('
  })
}
