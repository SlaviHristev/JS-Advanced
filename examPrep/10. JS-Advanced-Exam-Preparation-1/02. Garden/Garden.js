class Garden {
    constructor(spaceAvailabe) {
        this.spaceAvailabe = spaceAvailabe;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailabe) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailabe -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(x => x.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        };
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        };
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        };

        plant.ripe = true;

        if (quantity === 1) {
            plant.quantity += quantity;
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            plant.quantity += quantity;
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        let plant = this.plants.find(x => x.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let quantity = plant.quantity;
        this.spaceAvailabe += plant.spaceRequired;
        this.storage.push({ plantName, quantity });
        let index = this.plants.indexOf(plantName);
        this.plants.splice(index, 1);
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        const spaceUsed = this.plants.reduce((total, plant) => total + plant.spaceRequired, 0);

        const freeSpaceLeft = this.spaceAvailable - spaceUsed;

        const plantedPlants = this.plants.map(plant => plant.plantName).sort().join(', ');

        let plantsInStorageInfo = '';
        if (this.storage.length === 0) {
            plantsInStorageInfo = 'The storage is empty.';
        } else {
            const plantsInStorage = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`).join(', ');
            plantsInStorageInfo = `Plants in storage: ${plantsInStorage}`;
        }

        const gardenInfo = [
            `The garden has ${freeSpaceLeft} free space left.`,
            `Plants in the garden: ${plantedPlants}`,
            plantsInStorageInfo
        ];
        return gardenInfo.join('\n');
    }
}
        


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());