let list = document.querySelector('#list'),
    form = document.querySelector('form'),
    item = document.querySelector('#item');

// set storge

function addStorge() {
    window.localStorage.myitems = list.innerHTML;
}

// add input value

form.addEventListener('submit', function(event) {
    event.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    addStorge();
    item.value = "";
})

// remove input value

list.addEventListener('click', function(event) {
    let t = event.target;
    if (t.classList.contains('checked')) {
        t.parentNode.removeChild(t);
    } else {
        t.classList.add('checked');
    }
    addStorge();
})

// get storge

function getStorge() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
        list.innerHTML = '<li>Play gitar</li>';
    } else {
        list.innerHTML = storedValues;
    }
}
getStorge();
console.log('hello')
<<<<<<< HEAD
var x = 10;
var y = x
let z = "hello"
=======
console.log('hello word')
console.log("welcome github")
var date = new Date()
console.log(date)
>>>>>>> 9eacbae7a7e58461177381f7ab4bb2860598f895
