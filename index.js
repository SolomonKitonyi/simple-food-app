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

    let addForm = document.getElementById("add-form")
    addForm.addEventListener("submit",(e) =>{
        e.preventDefault()
        let formData = new FormData(e.target)
        let foodObj = {
            name:formData.get("name"),
            image_url: formData.get("image"),
            price: parseInt(formData.get("price"))
        }
       
        fetch(baseUrl,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodObj)
        })
        .then(res => res.json())
        .then(data => {
            alert(`${data.name} created successfully`)
        })
        .catch(err => console.log(err))
    })
})
function displayFood(food){
    let foodsDiv = document.getElementById("foods-div")
    let foodDiv = document.createElement("div")
    foodDiv.classList.add("food-div")
    foodDiv.innerHTML = `
        <img id="image" src= "${food.image_url}" />
        <p>Name: ${food.name}</p>
        <p>Price: ${food.price}</p>
        <form id="edit-form" onsubmit="editFood(event,this,${food.id})">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" required><br>
            <label for="image">Image: </label>
            <input type="url" id="image" name="image" required><br>
            <label for="price">Price: </label>
            <input type="number" id="price" name="price"><br>
            <button>Edit Food</button>
        </form>
        <button onclick="deleteFood(${food.id})">Delete</button>
    `
    foodsDiv.appendChild(foodDiv)
}

function deleteFood(id){
    fetch(`${baseUrl}/${id}`,{
        method: "DELETE",
    })
    .then(res => res.json())
    .then(() =>{
        alert("Food Deleted Successfully")
    })
    .catch(err => console.log(err))
}
function editFood(e,form,id){
    e.preventDefault()
    let formData = new FormData(form)
        let foodObject = {
            name:formData.get("name"),
            image_url: formData.get("image"),
            price: parseInt(formData.get("price"))
        }
        fetch(`${baseUrl}/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodObject)
        })
        .then(res => res.json())
        .then(data => {
            alert(`${data.name} updated successfully`)
        })
        .catch(err => console.log(err))
    
}