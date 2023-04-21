// Check if there is already a value in local storage
if (!localStorage.getItem('counter')) {
    // if not, set counter to 0 in local storage
    localStorage.setItem('counter', 0);
}

function count() {
    //retrieve counter value from local storage
    let counter = localStorage.getItem('counter');

    //update counter
    counter++;
    document.querySelector('h1').innerHTML = counter;

    //Store counter in local storage
    localStorage.setItem('counter', counter)

}

document.addEventListener('DOMContentLoaded', function() {
    //set heading to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;
})