import SchoolClass from "./classes/SchoolClass";

const school_1 = new SchoolClass('#school_1', 'school_1');
console.log(school_1);

const school_2 = new SchoolClass('#school_2', 'school_2');
console.log(school_2);

const school_3 = new SchoolClass('#school_3', 'Durmstrang');
console.log(school_3);

school_1._name = 'Hogwarts';
school_2._name = 'Beauxbatons';