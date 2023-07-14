import { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

export class ContactForm extends Component {

  addContact = this.props.addContact;

  onFormSubmit = (event) => {
    event.preventDefault();
    const contactName = event.currentTarget.elements.name.value
    const contactNumber = event.currentTarget.elements.number.value
    const contactId = nanoid()

    this.addContact(contactName, contactNumber, contactId)
  }

  render() {
    return (
      <form className="form" action="add contact" onSubmit={this.onFormSubmit}>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className="btn">Add contact</button>
    </form>
  )
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
}
