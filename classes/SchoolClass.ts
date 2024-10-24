//==========================
//     Level-1_2 und 2_1
//==========================
import Person from "./Person";

class SchoolClass {
    _id: string;
    _name: string;
    _endDate?: string;
    _personen?: Person[];


    constructor(id: string, name: string, personen?: Person[]) {
        this._id = id;
        this._name = name;
        this._personen = personen ?? [];
        console.log('School class creation successful');
    }

    addPerson(person: Person) {
        this._personen?.push(person);
    }
}

export default SchoolClass;