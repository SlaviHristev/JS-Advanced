function roadRaddar(speed, area){
    let speedLimit = 0;
    let overLimitSpeed = 0;
    let status;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                overLimitSpeed = speed - speedLimit;
                if(overLimitSpeed <= 20){
                    status = 'speeding';
                }else if(overLimitSpeed <= 40){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            
            break;
        case 'interstate':
            speedLimit = 90;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                overLimitSpeed = speed - speedLimit;
                if(overLimitSpeed <= 20){
                    status = 'speeding';
                }else if(overLimitSpeed <= 40){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            
            break;
        case 'city':
            speedLimit = 50;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                overLimitSpeed = speed - speedLimit;
                if(overLimitSpeed <= 20){
                    status = 'speeding';
                }else if(overLimitSpeed <= 40){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            
            break;
        case 'residential':
            speedLimit = 20;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                overLimitSpeed = speed - speedLimit;
                if(overLimitSpeed <= 20){
                    status = 'speeding';
                }else if(overLimitSpeed <= 40){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            
            break;
    }
}
roadRaddar(21, 'residential');