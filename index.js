const baseUrl = "http://localhost:3000/foods"
document.addEventListener("DOMContentLoaded",() =>{
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        
        data.forEach(food => {
            displayFood(food)
        })
    })
    .catch(err => console.log(err))
})
function displayFood(food){
    let foodsDiv = document.getElementById("foods-div")
    let foodDiv = document.createElement("div")
    foodDiv.classList.add("food-div")
    foodDiv.innerHTML = `
        <img id="image" src= "${food.image_url}" />
        <p>Name: ${food.name}</p>
        <p>Price: ${food.price}</p>
    `
    foodsDiv.appendChild(foodDiv)
}