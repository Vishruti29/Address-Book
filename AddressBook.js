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

// add some sample contacts to the address book
try {
    addressBook.push(new Contact("Vishruti", "Patil", "D 207", "Pune", "MH", "425506", "7067181622", "vishu9673@hmail.com"));
    addressBook.push(new Contact("Gaurav", "Patil", "Anandvan", "Indore", "MP", "452016", "9993905250", "patilgaurav.23@gmail.com"));
} catch (error) {
  console.log(error.message);
}

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
