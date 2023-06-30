const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',getjoke)

button.addEventListener('click', getjoke);

function getjoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    }).then(data=> data.json())
    .then(obj => jokeText.innerHTML = obj.joke)
}

// async function getjoke(){
//     const jokeData = await fetch('https://icanhazdadjoke.com/',{
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     const jokeObj = await jokeData.json();
//     jokeText.innerHTML = jokeObj.joke;
// }
