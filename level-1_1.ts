import IceCreamFlavor from './classes/IceCreamFlavor';

const iceCream_1 = new IceCreamFlavor('Strawberry', 5, false);
console.log(iceCream_1);

const iceCream_2 = new IceCreamFlavor('Chocolate', 5, true);
console.log(iceCream_2);

const iceCream_3 = new IceCreamFlavor('Pistachio Cream', 6, false,);
console.log(iceCream_3);

const iceCream_4 = new IceCreamFlavor('Nuts Mix', 6.5, true, 'A delicious blend of peanuts and hazelnuts');
console.log(iceCream_4);

const allIceCreams: IceCreamFlavor[] = [iceCream_1, iceCream_2, iceCream_3, iceCream_4];

allIceCreams.forEach((iceCream) => iceCream._isPopular === true ? console.log(iceCream._name) : null);