const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, "/db/contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.table(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId.toString());

    console.log(contact);
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const contacts = JSON.parse(data);

    const newContact = {
      id: (contacts.length + 1).toString(),
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("New contact has been added!");
    });
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const contacts = JSON.parse(data);
    const newContacts = contacts.filter((c) => c.id !== contactId.toString());

    fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Contact has been removed!");
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
