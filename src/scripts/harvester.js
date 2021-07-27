

export const harvestPlants = (plantArr) => {
    let plantCount = []

    for (let plant of plantArr) {   
        if (plant.type === 'Corn') {
            let cornOutput = plant.output / 2

            for (let i = 0; i < cornOutput; i++) {
            plantCount.push(plant) 
        } 
    } else {

            for (let i =0; i < plant.output; i++) {
                plantCount.push(plant)
            }
        }

    }
    return plantCount

}