
var myHeaders = new Headers();
myHeaders.append("apikey", "IRb7YsNofaGy9w9q1t6zwICDox1U1LPB");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

const url = "https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR&base=USD"

const loadingElement = document.querySelector('#loading')
const postContainer = document.querySelector('#posts-container')

// Get all posts

async function getAllPosts (){
    const response = await fetch(url, requestOptions);

    const data = await response.json();
    
    let map = new Map();
    
    console.log(data.rates);
    
   
    loadingElement.classList.add("hide");

//     data.map((post) => {
        
//         const div = document.createElement("div")
//         const title = document.createElement("h2")
//         const body = document.createElement("p")
        

//         title.innerText = post.title;
//         body.innerText = post.body;

//         div.appendChild(title)
//         div.appendChild(body)

//         postContainer.appendChild(div);
//     })
}

getAllPosts();