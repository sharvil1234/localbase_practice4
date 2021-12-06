let db = new Localbase('db');

function doStuff() {
    db.collection('users').add({
        id: 0,
        name: 'Sharvil',
        age: 12
    })
    db.collection('users').add({
        id: 1,
        name: 'Shanvika',
        age: 6
    })
}

function getStuff()
{
    db.collection('users').get().then(users => {
      document.getElementById("hi").innerHTML = users[1]
      })
}

btndo = document.getElementById("btndo");
btndo.addEventListener('click', doStuff);

btnget = document.getElementById("btnget");
btnget.addEventListener('click', getStuff);