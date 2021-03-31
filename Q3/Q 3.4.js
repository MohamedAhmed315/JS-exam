

function getBudget(people){
    let budgets = 0;
    for (let i = 0; i < people.length; i++){
        budgets = budgets + people[i].budget;
    }

    return budgets;
}


let people = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
    ];

console.log(getBudget(people));