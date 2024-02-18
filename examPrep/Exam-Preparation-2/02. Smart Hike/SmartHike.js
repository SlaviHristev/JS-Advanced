class SmartHike {
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak,attitude){
        if(this.goals[peak]){
            return `${peak} has already been added to your goals`
        }else{
            this.goals[peak] = attitude;
            return `You have successfully added a new goal - ${peak}`
            }
    }
    hike(peak,time,difficultyLevel){
        if(!this.goals[peak]){
            throw new Error(`${peak} is not in your current goals`);
        }
        if(this.resources <= 0){
            throw new Error("You don't have enough resources to start the hike");
        }
        if(this.resources - (time * 10) < 0){
            return "You don't have enough resources to complete the hike"
        }else{
            this.listOfHikes.push({peak, time, difficultyLevel});
            this.resources -= time * 10;
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }
    rest(time){
        this.resources += time * 10;
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }else{
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }
    showRecord(criteria){
        if(this.listOfHikes.length <= 0){
            return `${this.username} has not done any hiking yet`
        }
        if(criteria === 'hard' || criteria === 'easy'){
            let filteredHikes = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);

            if(filteredHikes.length === 0){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            let bestHike = filteredHikes.reduce((prev, current)=> {
                return current.time >prev.time ? current : prev;
            })
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
        if(criteria === 'all'){
            let allHikes = this.listOfHikes.map(hike => {
                return `${this.username} hiked ${hike.peak} for ${hike.time} hours`
            })

            return `All hiking records:\n${allHikes.join('\n')}`;
        }

    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
