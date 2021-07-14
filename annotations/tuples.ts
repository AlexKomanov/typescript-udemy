const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
//Type alias
type Drink = [string, boolean, number];

//Tuple
const cola: Drink = ['brown', true, 42];
console.log(cola);

const coffee: Drink = ['black', false, 8];