import { Component } from 'react'

import { ContactForm } from 'components/Phonebook/ContactForm'
import { ContactList } from "components/Phonebook/ContactList";
import { Filter } from "components/Phonebook/Filter";

export class App extends Component  {

  state = {
    contacts: [
    {contactId: 'id-1', contactName: 'Rosie Simpson', contactNumber: '459-12-56'},
    {contactId: 'id-2', contactName: 'Hermione Kline', contactNumber: '443-89-12'},
    {contactId: 'id-3', contactName: 'Eden Clements', contactNumber: '645-17-79'},
    {contactId: 'id-4', contactName: 'Annie Copeland', contactNumber: '227-91-26'},
  ],
  filter: '',
}

  addContact = (contactName, contactNumber, contactId) => {
    if (this.checkName(contactName)) {
      this.state.contacts.push({ contactName, contactNumber,contactId });
    this.setState({
      contacts: this.state.contacts,
    })
    }
  }

  checkName = (name) => {
    if (this.state.contacts.find(contact => contact.contactName === name
    )) {
      alert(`${name}is already in contacts`);
      return false;
    }
    return true;
  }

  handleChange = ({target}) => {
    this.setState({
      filter: target.value
    })
  }

  filterContacts = (contacts) => {
    return contacts.filter(contact => contact.contactName.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  deleteContact = ({ target }) => {
    const newContactList = this.state.contacts.filter((contact) => contact.contactId !== target.id)
    this.setState({
      contacts: newContactList
    })
  }

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts(contacts)

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact = {this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChange={ this.handleChange } />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={ this.deleteContact} />
      </div>
    );
  }
};
