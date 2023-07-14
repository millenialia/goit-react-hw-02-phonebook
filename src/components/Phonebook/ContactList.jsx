import PropTypes from "prop-types";

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({contactName, contactNumber, contactId}) => {
        return (
          <li key={contactId} >
            <p>{contactName}: {contactNumber}</p>
            <button type="button" onClick={deleteContact} id={contactId}>Delete</button>
          </li>
        )
      })}
    </ul>
)
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
}
