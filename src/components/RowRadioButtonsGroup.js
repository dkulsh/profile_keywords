import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({ value, handleChange }) {

  return (

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Choose your Tech</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Java" control={<Radio />} label="Java" />
        <FormControlLabel value="Python" control={<Radio />} label="Python" />
        <FormControlLabel value="Golang" control={<Radio />} label="Golang" />
        <FormControlLabel value="NodeJS" control={<Radio />} label="NodeJS" />
        <FormControlLabel value="C++" control={<Radio />} label="C++" />

      </RadioGroup>
    </FormControl>
  );
}