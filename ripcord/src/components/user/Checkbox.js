import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', id, isChecked = false, onChange }) => (
  <input type={type} id={id} isChecked={isChecked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;