var user = {
  name: 'Peter',
  age: 36,
  email: 'peter@gmail.com',
  username: 'peter01',
  city: 'Budapest'
}

for (var key in user) {
  // console.log('key:', key);
  // console.log('value:', user[key]);
  console.log(key, ':', user[key]);
}



// Objektumok kezelése:
var user2 = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

function getUsername(user) {
  console.log(user.name);
  if(user && user.address && user.address.geo){
    console.log(user.address.geo.lat);
  }
}

getUsername(user);
getUsername(user2);