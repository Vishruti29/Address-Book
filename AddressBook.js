// create an array to hold the contacts
let addressBook = [];

// create a constructor function to create contact objects
function Contact(firstName, lastName, address, city, state, zip, phone, email) {
  // validate the inputs
  if (!/^[A-Z][a-z]{2,}$/.test(firstName)) {
    throw new Error("Invalid first name. Must start with capital letter and have at least 3 characters.");
  }
  if (!/^[A-Z][a-z]{2,}$/.test(lastName)) {
    throw new Error("Invalid last name. Must start with capital letter and have at least 3 characters.");
  }
  if (!/^[A-Za-z0-9\s]{4,}$/.test(address)) {
    throw new Error("Invalid address. Must have at least 4 characters.");
  }
  if (!/^[A-Za-z\s]{4,}$/.test(city)) {
    throw new Error("Invalid city. Must have at least 4 characters.");
  }
  if (!/^[A-Z]{2}$/.test(state)) {
    throw new Error("Invalid state. Must be a 2-letter abbreviation.");
  }
  if (!/^\d{6}$/.test(zip)) {
    throw new Error("Invalid ZIP code. Must be a 5-digit number.");
  }
  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Invalid phone number. Must be in the format xxxxxxxxxx.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email address.");
  }

  // if all inputs are valid, create the contact object
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.email = email;
}

// create a new empty address book
let newAddressBook = [];

// add some sample contacts to the address book
try {
    addressBook.push(new Contact("Vishruti", "Patil", "D 207", "Pune", "MH", "425506", "7067181622", "vishu9673@hmail.com"));
    addressBook.push(new Contact("Gaurav", "Patil", "Anandvan", "Indore", "MP", "452016", "9993905250", "patilgaurav.23@gmail.com"));
} catch (error) {
  console.log(error.message);
}


// add a new contact to the new address book
try {
    newAddressBook.push(new Contact("Garv", "Patil", "Sch 140", "Mumbai", "MH", "400001", "7350985660", "garv_24@gmail.com"));
  } catch (error) {
    console.log(error.message);
  }

// display the contents of the new address book
for (let i = 0; i < newAddressBook.length; i++) {
    console.log(`Name: ${newAddressBook[i].firstName} ${newAddressBook[i].lastName}`);
    console.log(`Address: ${newAddressBook[i].address}`);
    console.log(`City: ${newAddressBook[i].city}`);
    console.log(`State: ${newAddressBook[i].state}`);
    console.log(`ZIP: ${newAddressBook[i].zip}`);
    console.log(`Phone: ${newAddressBook[i].phone}`);
    console.log(`Email: ${newAddressBook[i].email}`);
    console.log("------------------------------");
    }