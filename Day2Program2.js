function RentalCarCost(days){
    
    let costPerDay = 40
    var totalCost = costPerDay * days
    
    if (days >= 7) {
        totalCost -= 50
    }
    else if (days >= 3) {
        totalCost -= 20
    }
    
    return totalCost
}
console.log(RentalCarCost(50));
