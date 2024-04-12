console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener('DOMContentLoaded',e=>{
fetch(imgUrl)
    .then(resp=>resp.json())
        .then(dogs=>{
            let newDog = dogs.message
            newDog.forEach(element => {
                let dogImage = document.createElement('img')
                dogImage.src = element
                document.getElementById('dog-image-container').append(dogImage)
        }); 
})
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
.then(resp=>resp.json())
.then(data=>{
    const dogNames = Object.keys(data.message)
    dogNames.forEach(element => {
        let name = document.createElement('li')
        name.innerHTML = element
        document.getElementById('dog-breeds').appendChild(name)
        name.addEventListener('click', e=>{
            e.target.setAttribute('style', 'color: #fcf')
        })
        
    });

let dropDown = document.getElementById('breed-dropdown')
dropDown.addEventListener('change',e=>{
      let newArray = []
    newArray = dogNames.filter(name=>name[0]===e.target.value)
    document.getElementById('dog-breeds').innerHTML = ''
    newArray.forEach(dogName => {
        let li = document.createElement('li')
        li.innerHTML = `${dogName}`
        document.getElementById('dog-breeds').appendChild(li)    
     });
})
}
)
})