function PrintList() {
    document.getElementById("printList").innerHTML = "";
    myName = "";
    myAddress = "";
    myPhone = "";
    myName = "<div class='Card' onclick='RemoveList(" + this.id + ")'><b>Name: </b>" + this.name + "<br>\n";
    myAddress = "<b>Address: </b>" + this.address + "<br>\n";
    myPhone = "<b>Phone: </b>" + this.phone + "</div><hr>\n";


    listPerson.forEach(function (listPerson, index) {
        // console.log(listPerson);
        document.getElementById("printList").innerHTML += "<div class='Card' onclick='RemoveList(" + index + ")'><b>Name: </b>" + listPerson.name + "<br>\n" + "<b>Address: </b>" + listPerson.address + "<br>\n" + "<b>Phone: </b>" + listPerson.phone + "</div>\n";
    });


    //document.write(myName, myAddress, myPhone);s
    // var printList = document.getElementById("printList");

    //listPerson.forEach(()=> printList.innerHTML += "<div class='Card' onclick='RemoveList(" + this.id + ")'><b>Name: </b>" + this.name + "<br>\n"+"<b>Address: </b>" + this.address + "<br>\n"+"<b>Phone: </b>" + this.phone + "</div><hr>\n");
    //document.getElementById("printList").innerHTML = JSON.stringify(listPerson, null, 2);


}
class Person {
    constructor(id, name, address, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.PrintList = PrintList;
    }
}

function CreatePerson() {
    checkName = document.getElementById("name").value;
    checkAddress = document.getElementById("address").value;
    checkPhone = document.getElementById("phone").value;
    if (checkName.length == 0 ||checkAddress.length == 0 ||checkPhone.length == 0) {
        alert("Unesi sva polja");
        return false;
    }
    let person = new Person(id, document.getElementById("name").value, document.getElementById("address").value, document.getElementById("phone").value);
    // Dragan.PrintList();
    // Marko.PrintList();
    // Dejan.PrintList();
    // Danko.PrintList();

    listPerson.push(person);
    console.log(listPerson);
    ClearFields(person);
    person.PrintList();
    id++;
}
function ClearFields() {

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}
function RemoveList(myId) {
    //findId= listPerson.find(x => x.id === myid);
    //  listPerson.remove(findId); 

    let confirmAction = confirm("Jesi siguran da zelis obrisati?");
    if (confirmAction) {
        alert("Action successfully executed");
    } else {
        alert("Action canceled");
        return;
    }
    listPerson.splice(myId, 1);
    console.log(myId);
    PrintList();
}

let id = 1;
let listPerson = [];

Dragan = new Person("1", "Dragan Gagi", "Darda", "098 326 626");
Ivan = new Person("2", "Ivan Hus", "Visnjevac", "091 251 654");
Dejan = new Person("3", "Dejan Stirko", "Josipovac", "095 456 987");
Danko = new Person("4", "Danko Nik", "Osijek", "098 767 756");
listPerson.push(Dragan, Ivan, Dejan, Danko);
PrintList();
// Dragan.PrintList();
// Ivan.PrintList();
// Dejan.PrintList();
// Danko.PrintList();