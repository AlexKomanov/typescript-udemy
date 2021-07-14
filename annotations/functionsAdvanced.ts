const add = (a:number, b:number)=> {
    return a + b;
}

const subtract = (a:number, b:number): number => {
    return a - b;
}

const printLog = (text: string): void => {
    console.log(text);
}

const throwsError = (message: string): never => {
    throw new Error(message);
}

function divide(a: number, b: number): number {
    return a / b;
}

/**
 * @name: multiply
 * @type: anonymous
 * @param: a: number
 * @param: b: number
 * @return: a * b
 * */
const multiply = function (a: number, b: number) {
    return a * b;
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather)
}

logWeather(todayWeather);




