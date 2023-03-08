import PropTypes from 'prop-types';

export const Filter = ({ value, handleChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={value}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
