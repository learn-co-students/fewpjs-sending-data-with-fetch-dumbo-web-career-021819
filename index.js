const testVar = {}


function registerSelf() {
  return fetch("http://guestbook.example.com/register", {"method": "POST", "body": {"firstName": "BYRONIUS KARBITUS MARIS","registryMessage": "SALVETE AMICI!"}})
  .then(response => response.json())
  .then(json => json.message)
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {"method": "POST", "body": {"firstName": "ME", "registryMessage": "YAYO!"}})
  .then(response => response.json())
  .then(json => json.message)
  .catch( function(anything) {
    return ":(";
  });
}


//makes a request to oregister with a name and a message

//processes the returned JSON and extracts the value of the 'message' key

//processes a bad request and returns a sad face:
