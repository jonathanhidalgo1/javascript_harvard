var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer xxxxxxxxxxxxxxxxxxx");

var requestOptions = {
    headers: myHeaders
}

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.ilustranext.com/api/user", requestOptions)
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });
    
});