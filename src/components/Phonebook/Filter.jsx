import PropTypes from "prop-types";

export const Filter = ({filter, handleChange}) => {
    return (
        <label htmlFor="filter">
          Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  deleteCohandleChangentact: PropTypes.func.isRequired
}
