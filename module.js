import { Student, Teacher, Group, Payment, Salary, Organization } from './module.js';


let student = new Student("John", "Doe", "123-456-7890", "123 Main Street");
console.log(student.fullname); 
student.fullname = "Jane Smith";
student.tell = "987-654-3210"; 
student.info(); 


let teacher = new Teacher("Alice", "Johnson", "456 Elm Street", 6000, "Advanced");
console.log(teacher.fullname); 
teacher.salary = 7000; 
teacher.description(); 

let group = new Group("Math Group", "Room 101", "Advanced", 25, teacher);
group.studentCounts = 30; 
group.fullInformation(); 

let payment = new Payment("John", "Nurbek", 1000, "2024-01-01", false);
console.log(payment.getStatus());
payment.status = true; 
console.log(payment.getStatus()); 

let salary = new Salary("Mike", 1500, "USD", "2024-01-01", true);
salary.amount = 2000;
salary.getInfo(); 

let organization = new Organization("Tech Solutions", "Elon Musk", "123 Innovation Street", 500);
organization.employeeCount = 600; 
organization.getInfo(); 
