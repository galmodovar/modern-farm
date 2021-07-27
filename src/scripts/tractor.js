import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createSunflower} from "./seeds/sunflower.js"
import { addPlant } from "./field.js"




export const plantSeeds = (plan) => {
    
    for (let i = 0; i < plan.length; i++) {
        for (const seeds of plan[i]) {
            let seed;
            switch (seeds) {
                case "Wheat":
                    seed = createWheat();
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    break;
                case "Potato":
                    seed = createPotato();
                    break;
                case "Corn":
                    seed = createCorn();
                    break;
                case "Asparagus":
                    seed = createAsparagus();
                    break;
                case "Soybean":
                    seed = createSoybean()
                    break;
            }
            addPlant(seed)
        }
        //console.log(plan[i])
    }
    
}

