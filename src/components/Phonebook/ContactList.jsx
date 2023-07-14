import PropTypes from "prop-types";

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className="contactNameList">
      {filteredContacts.map(({contactName, contactNumber, contactId}) => {
        return (
          <li key={contactId} className="contactName">
            <p>{contactName}: {contactNumber}</p>
            <button type="button" onClick={deleteContact} id={contactId} className="delete">Delete</button>
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
