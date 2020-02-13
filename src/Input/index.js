import React from 'react';
import TextField from './TextField';
import Radio from './Radio';
import Hidden from './Hidden';

const INPUT_TYPES = {
  checkbox: null,
  radio: Radio,
  hidden: Hidden,
};

const Input = React.forwardRef((props, ref) => {
  if (INPUT_TYPES[props.type?.toLowerCase()]) {
    const Element = INPUT_TYPES[props.type];
    return <Element ref={ref} {...props} />;
  } else {
    return <TextField ref={ref} {...props} />;
  }
});

export default Input;
