import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import {createCorn} from "./seeds/corn.js"
import {createSoybean} from "./seeds/soybean.js"
import {createPotato} from "./seeds/potato.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()  



//test for tractor
plantSeeds(yearlyPlan)
const seedsPlanted = usePlants()

//test for harvest

const harvestedPlants = harvestPlants(seedsPlanted)

catalog(harvestedPlants)



