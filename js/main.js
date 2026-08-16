//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        let randomMon = data.data[Math.floor(Math.random() * data.data.length)];
        console.log(randomMon);
        document.querySelector('h2').innerText = randomMon.name;
        document.querySelector('img').src = randomMon.image;
        document.querySelector('p').innerText = randomMon.description;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}