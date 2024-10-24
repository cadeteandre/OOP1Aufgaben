import SchoolClass from './classes/SchoolClass';
import Person from "./classes/Person";

const person_1 = new Person('#person_1', 'Andre', 'Cadete', '04-08-1994');
const person_2 = new Person('#person_2', 'Sarah', 'Fox', '03-12-1987');
const person_3 = new Person('#person_3', 'Lucas', 'Matos', '21-11-2001');
const person_4 = new Person('#person_4', 'Caio', 'Ferreira', '14-01-1999');

const schoolClass_1 = new SchoolClass('#schoolClass_1', 'Hogwarts',);
const schoolClass_2 = new SchoolClass('#schoolClass_2', 'Beauxbatons', [person_1, person_2]);
const schoolClass_3 = new SchoolClass('#schoolClass_3', 'Durmstrang', [person_3]);

schoolClass_1.addPerson(person_4);

console.log(schoolClass_1);
console.log(schoolClass_2);
console.log(schoolClass_3);



