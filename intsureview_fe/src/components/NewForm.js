import { Input, Select, Button, FormLabel, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import '../css/Form.css';

let onSaleOptions = [
  { label: 'yes', value: true },
  { label: 'no', value: false },
];

const NewForm = () => {
  const [datePurchased, setDatePurchased] = useState('');
  const [onSale, setOnSale] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');
  const [ounces, setOunces] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSurvey = (data) => {
    data.preventDefault();
    console.log({ datePurchased: datePurchased });
    // alert(datePurchased);
  };

  return (
    <form onSubmit={handleSurvey}>
      <div>
        <FormLabel>When was the last time you purchased oat milk?</FormLabel>
        <TextField
          label="date"
          onChange={(e) => setDatePurchased(e.target.value)}
          value={datePurchased}
        ></TextField>
      </div>
      <div>
        <label>Was it on sale?</label>
      </div>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewForm;
