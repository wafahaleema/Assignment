const plane1 = {
    name: "basic",
    price: 3.99,
    space: 100,
    dataTransfer: "1000 GB/Month",
    pages: 5,
}

const plane2 = {
    name: "pro",
    price: 5.99,
    space: 200,
    dataTransfer: "1000 GB/Month",
    pages: 10,
}
console.log(plane1.name, plane1.space);
console.log(plane1.dataTransfer);
console.log(plane2.name, plane2.space);
console.log(plane2.dataTransfer);

plane2.name = {
    name:"prof",
    name2: "professional"
}

console.log(plane2.name,plane2.space);
console.log(plane2);
console.log(plane2.name.name2);


class student {
    constructor(name,course,roll, marks){
        this.name = name
        this.course = course
        this.roll = roll
        this.marks = marks
    }
}

const student1 = new student("abcd","web","web-01",90)
const student2 = new student("xyz","graphic","gr-001",89)
const student3 = new student("xyz","graphic","gr-001",89)
const student4 = new student("xyz","graphic","gr-001",89)
const student5 = new student("xyz","graphic","gr-001",89)

console.log(student1)



