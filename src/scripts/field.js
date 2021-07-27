


const field = []

export const addPlant = (seed) => {

    if (Array.isArray(seed)) {
        for (const corn of seed) {
            field.push(corn)
        }
    } else { 
        field.push(seed)
    }
    return field
}

export const usePlants = () => {
    return field.slice()
    
}