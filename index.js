const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      'firstName': 'Matthew',
      'registryMessage': 'Hello World!'
    }
  }).then( (response) => {
    return response.json();
  })
  .then(message => {
     return message.message;
  });
};

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      'firstName': 'Matthew',
      'registryMessage': 'Hello World!'
    }
  }).then( (response) => {
    return response.json();
  })
  .then( message => {
    return message.message;
  }).catch( error => {
    return ":(";
  });
};
