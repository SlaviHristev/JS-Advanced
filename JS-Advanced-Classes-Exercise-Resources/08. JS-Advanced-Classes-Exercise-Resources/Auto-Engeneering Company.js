function autoEngineeringCompany(input) {
    const cars = input.reduce((acc, line) => {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);
        
        if (!acc[brand]) {
            acc[brand] = {};
        }
        if (!acc[brand][model]) {
            acc[brand][model] = 0;
        }
        acc[brand][model] += produced;
        
        return acc;
    }, {});

    return Object.entries(cars).map(([brand, models]) => {
        const modelDetails = Object.entries(models)
            .map(([model, count]) => `###${model} -> ${count}`)
            .join('\n');
        return `${brand}\n${modelDetails}`;
    }).join('\n');
}