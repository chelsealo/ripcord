import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', id, checked = false, onChange }) => (
  <input type={type} id={id} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;