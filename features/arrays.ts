const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

//Help with inferene when extractring values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(20);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"]; //Always use anotation
importantDates.push("2030-10-10");
importantDates.push(new Date());
