let counter = 0; //declare a fuction using let

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    // if (counter % 10 === 0 ) {
    //     alert(`Count is now ${counter}`)
    // }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    setInterval(count, 1000);
});