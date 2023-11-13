interface Drivers {
    forename: String;
    surname: String;
}

function giveName (drivers: Drivers): string {
    return 'This drivers name is ${person.forename} ${person.surname}';
}

