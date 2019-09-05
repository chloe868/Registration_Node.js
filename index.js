var input = require("readline-sync");
var student = require("./student");
var list = [];

while (true) {
    var menu = input.question("Add, View, Remove, Exit : ")
    if ( menu == "Add") {
        do {
            var estudyante = new student();
            console.log("Add Student : ");
            estudyante.setName(input.question("\tName : "));
            console.log("Add Course: ");
            estudyante.addCourse(input.question("\tCourse : "), input.question("\tYear : "));
            console.log("Add Schedule: ");
            estudyante.addSchedule(input.question("\tSchedule(Day) : "), input.question("\tTime : "));
            list.push(estudyante)
        } while (input.question("Done? : ") != "yes");
        console.log("Successfully Added!")
    } else if (menu == "View") {
        console.log(list);
    } else if (menu == "Remove") {
        var Delete = input.question(`Remove Student No. : `);
        list.splice((parseInt(Delete)-1),1);
        console.log("Successfully Deleted!")
    } else if (menu == "Exit") {
        console.log("--------End of Transaction-------")
        break;
    }

}
