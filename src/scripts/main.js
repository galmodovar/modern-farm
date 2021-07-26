import { createPlan } from "./plan.js"
import { addPlant, usePlant } from "./field.js"
import {createCorn} from "./seeds/corn.js"
//const yearlyPlan = createPlan()  

let seed = createCorn()

addPlant(seed)

let work = usePlant()


console.log(work)

