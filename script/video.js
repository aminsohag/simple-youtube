// console.log("hello js");

// fetch load and  show api

const loadCategories = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))

}


const displayCategories = (catData) => {
    const btnContainer = document.getElementById('btn-container');
    // add data html
    catData.forEach( (item) => {
     // create btn
    const btn = document.createElement("button");
    btn.classList = "btn";
    btn.innerText = item.category;

    // add
    btnContainer.appendChild(btn)
    })
   
}



loadCategories();