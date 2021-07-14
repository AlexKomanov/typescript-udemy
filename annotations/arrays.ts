const colors = ['red', 'yellow', 'orange'];

const dates: Date[] = [new Date(), new Date()];

const arraysInArrays = [
    ['macbook'],
    ['23434'],
    ['iPhone']
];

const nested: string[][] = [];

const color = colors[1];
const color1 = colors.pop();

colors.map((color:string): void => {
    console.log(color);
})

//Flexible arrays
const importantDates: (Date | string)[] = [new Date(), '22-4-2021'];
importantDates.push('4-4-2021');
importantDates.push(new Date());
importantDates.forEach(( date) => {
    console.log(date);
})

