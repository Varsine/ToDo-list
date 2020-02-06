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