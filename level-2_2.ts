import Driver from "./classes/Driver";
import Car from "./classes/Car";

const car_1 = new Car('Tesla', 2019, '322 km/h');
const car_2 = new Car('Volkswagen', 2019, '215 km/h');
const car_3 = new Car('Toyota', 2020, '195 km/h');
const car_4 = new Car('Ferrari', 2013, '350 km/h');

const driver_1 = new Driver('Andre', 'Cadete', 30, car_1);
const driver_2 = new Driver('Paulo', 'Marques', 40, car_2);
const driver_3 = new Driver('Max', 'Dielan', 22, car_3);
const driver_4 = new Driver('Lina', 'Lopes', 42, car_4);

console.log(driver_1);
console.log(driver_2);
console.log(driver_3);
console.log(driver_4);
