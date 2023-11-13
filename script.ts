interface Drivers {
    forename: String;
    surname: String;
}

function giveName (drivers: Drivers): string {
    return 'This drivers name is ${person.forename} ${person.surname}';
}

let lh = {forename: "Lewis", surname: "Hamilton"};
console.log(giveName(lh));  