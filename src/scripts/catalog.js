



export const catalog = (harvestedFoodArray) => {

    const html = document.querySelector(".container")

    for (let foodObject of harvestedFoodArray) {

        html.innerHTML +=

        
         `<section class="plant"> ${foodObject.type} </section>`
        
    }

}