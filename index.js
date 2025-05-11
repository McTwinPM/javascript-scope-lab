const burgers = ["Hamburger", "Cheeseburger"]
let featuredDrink = "Strawberry Milkshake"

function addBurger(){
    const newBurger = "Flatburger"
    burgers.push(newBurger)
    if (burgers[0] !== "Maple Bacon Burger"){
        const addAnotherBurger = "Maple Bacon Burger"
        burgers.push(addAnotherBurger)
    }
}
function changFeaturedDrink(){
    featuredDrink = "The JavaShake"
}

