const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {

fetch('http://guestbook.example.com/register'), {
	method:'POST', headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json' 
	                         },
    body: {
            "firstName": "Jimmy",
            "registryMessage": "I'm alive and free"
           }                                    }
           
return "You have been added to the guest book"

                         }

function errorSelf() {
  return ':('
}
