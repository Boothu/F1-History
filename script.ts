interface Drivers {
    forename: string;
    surname: string;
}

function giveName (drivers: Drivers): string {
    return `This drivers name is ${drivers.forename} ${drivers.surname}`;
}

let lh = {forename: "Lewis", surname: "Hamilton"};
console.log(giveName(lh));  

// type tsc script.ts into terminal, and then this should run in test.html