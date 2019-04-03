const testVar = {}

function testFunc() {
  return "hi"
}

let formObj = {
  "firstName": "Chrees",
  "registryMessage": "AHHHHHH"
};

let formThing = {
  method: "POST",
  body: formObj
};

function registerSelf() {
 return fetch('http://guestbook.example.com/register', formThing)
  .then(response => {
    debugger
    return response.json();
  })
  .then(jsonPromise => {
    return jsonPromise.message;
  })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', formThing)
  .then(response => {
    return response.json();
  })
  .then(jsonPromise => {
    return jsonPromise.message;
  })
  .catch(error => {
    return ":("
  })
}
