// an array to hold the contacts
let addressBook = []; 

// constructor function to create contact objects
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

// add some sample contacts to the address book
addressBook.push(new Contact("Vish", "Patil", "D 207", "Pune", "MH", "425506", "7067181622", "vishu9673@hmail.com"));
addressBook.push(new Contact("Gaurav", "Patil", "Anandvan", "Indore", "MP", "452016", "9993905250", "patilgaurav.23@gmail.com"));

// display the contents of the address book
for (let i = 0; i < addressBook.length; i++) {
  console.log(`Name: ${addressBook[i].firstName} ${addressBook[i].lastName}`);
  console.log(`Address: ${addressBook[i].address}`);
  console.log(`City: ${addressBook[i].city}`);
  console.log(`State: ${addressBook[i].state}`);
  console.log(`ZIP: ${addressBook[i].zip}`);
  console.log(`Phone: ${addressBook[i].phone}`);
  console.log(`Email: ${addressBook[i].email}`);
  console.log("");
}
