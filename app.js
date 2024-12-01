
// Student klassi
export class Student {
    constructor(name, surname, tell, address) {
        this._name = name;
        this._surname = surname;
        this._tell = tell;
        this._address = address;
    }

    // Getter va setter: fullname
    get fullname() {
        return `${this._name} ${this._surname}`;
    }

    set fullname(newFullname) {
        const [name, surname] = newFullname.split(" ");
        this._name = name;
        this._surname = surname;
    }

    // Getter va setter: telefon
    get tell() {
        return this._tell;
    }

    set tell(newTell) {
        this._tell = newTell;
    }

    info() {
        console.log(`Name: ${this.fullname}, Phone: ${this.tell}, Address: ${this._address}`);
    }
}

// Teacher klassi
export class Teacher {
    constructor(fname, lname, address, salary, level) {
        this._fname = fname;
        this._lname = lname;
        this._address = address;
        this._salary = salary;
        this._level = level;
    }

    // Getter va setter: fullname
    get fullname() {
        return `${this._fname} ${this._lname}`;
    }

    set fullname(newFullname) {
        const [fname, lname] = newFullname.split(" ");
        this._fname = fname;
        this._lname = lname;
    }

    // Getter va setter: oylik maosh
    get salary() {
        return this._salary;
    }

    set salary(newSalary) {
        this._salary = newSalary;
    }

    description() {
        console.log(`Teacher: ${this.fullname}, Address: ${this._address}, Salary: ${this.salary}, Level: ${this._level}`);
    }
}

// Group klassi
export class Group {
    constructor(name, room, level, studentCounts, teacher) {
        this._name = name;
        this._room = room;
        this._level = level;
        this._studentCounts = studentCounts;
        this._teacher = teacher;
    }

    // Getter va setter: studentCounts
    get studentCounts() {
        return this._studentCounts;
    }

    set studentCounts(newCount) {
        this._studentCounts = newCount;
    }

    fullInformation() {
        console.log(`Group Name: ${this._name}, Room: ${this._room}, Level: ${this._level}`);
        console.log(`Student Count: ${this.studentCounts}, Teacher: ${this._teacher.fullname}`);
    }
}

// Payment klassi
export class Payment {
    constructor(from, to, amount, date, status) {
        this._from = from;
        this._to = to;
        this._amount = amount;
        this._date = new Date(date);
        this._status = status;
    }

    // Getter va setter: status
    get status() {
        return this._status ? "Completed" : "Pending";
    }

    set status(newStatus) {
        this._status = newStatus;
    }

    getStatus() {
        return this.status;
    }
}

// Salary klassi
export class Salary {
    constructor(to, amount, type, date, status) {
        this._to = to;
        this._amount = amount;
        this._type = type;
        this._date = new Date(date);
        this._status = status;
    }

    // Getter va setter: amount
    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        this._amount = newAmount;
    }

    getInfo() {
        console.log(`Salary to: ${this._to}, Amount: ${this.amount} ${this._type}`);
        console.log(`Date: ${this._date.toDateString()}, Status: ${this._status ? "Paid" : "Unpaid"}`);
    }
}

// Organization klassi
export class Organization {
    constructor(name, founder, address, employeeCount = 400) {
        this._name = name;
        this._founder = founder;
        this._address = address;
        this._employeeCount = employeeCount;
    }

    // Getter va setter: employeeCount
    get employeeCount() {
        return this._employeeCount;
    }

    set employeeCount(newCount) {
        this._employeeCount = newCount;
    }

    getInfo() {
        console.log(`Organization Name: ${this._name}, Founder: ${this._founder}`);
        console.log(`Address: ${this._address}, Employee Count: ${this.employeeCount}`);
    }
}
