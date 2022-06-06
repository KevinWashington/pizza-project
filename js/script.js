pizzaJson.map((item, index) => {
    let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector(".pizza-item--img img").src = item.img
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2).replace(".", ",")}`
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description

    pizzaItem.querySelector("a").addEventListener("click",(e)=>{
        e.preventDefault();
        
        let key = e.target.closest(".pizza-item").getAttribute("data-key")
        document.querySelector(".pizzaBig img").src = pizzaJson[key].img
        document.querySelector(".pizzaInfo h1").innerHTML = pizzaJson[key].name
        document.querySelector(".pizzaInfo--desc").innerHTML = pizzaJson[key].description
        document.querySelector(".pizzaInfo--price").innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace(".", ",")}`

        document.querySelector(".pizzaWindowArea").style.display = "flex"
        setTimeout(()=>{
            document.querySelector(".pizzaWindowArea").style.opacity = 1
        },200)
    })

    document.querySelector(".pizza-area").append(pizzaItem)
})