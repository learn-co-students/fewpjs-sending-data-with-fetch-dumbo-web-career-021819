const testVar = {};

function testFunc() {
  return "hi";
}

configObj = {};

function registerSelf() {
  let formData = { firstName: "Nomis" };
  let configObj = {
    method: "POST",
    body: formData
  };
  return fetch("http://guestbook.example.com/register", configObj)
    .then(response => response.json())
    .then(content => {
      return content.message;
    });
}

function errorSelf() {
  let formData = { firstName: "Nomis" };
  let configObj = {
    method: "POST",
    body: formData
  };
  return fetch("http://guestbook.example.com/register", configObj)
    .then(response => response.json())
    .then(content => {
      if (response == "OK") {
        console.log(response);
        return content.message;
      }
    })
    .catch(function(x){
      return ":("
    });
}
