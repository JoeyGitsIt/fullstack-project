import {
  Select,
  Button,
  FormLabel,
  TextField,
  MenuItem,
  Container,
} from '@mui/material';
import { useState } from 'react';
import '../css/Form.css';

const Form = () => {
  const [datePurchased, setDatePurchased] = useState('');
  const [onSale, setOnSale] = useState(false);
  const [price, setPrice] = useState('');
  const [ounces, setOunces] = useState('');
  const [zipCode, setZipCode] = useState('');

  const submitSurvey = async () => {
    const formData = `{
        "date_purchased": "${datePurchased}",
        "on_sale": ${onSale},
        "price": "${price}",
        "ounces_per_week": ${ounces},
        "zip_code": ${zipCode}
    }`;

    if (isZipCodeValid(zipCode) === false) {
      return;
    }

    try {
      const response = await fetch('survey/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });
      alert(response.statusText);
    } catch (e) {
      console.error(e);
    }
  };

  const isZipCodeValid = (zipCode) => {
    if (zipCode.length === 5 && zipCode.match(/^[0-9]+$/)) {
      return true;
    } else {
      alert('Enter a valid zip code!');
      return false;
    }
  };

  return (
    <Container>
      <form>
        <div>
          <FormLabel className="form-label">
            When was the last time you purchased oat milk?
          </FormLabel>
          <TextField
            className="text-field"
            required={true}
            label="YYYY-MM-DD"
            onChange={(e) => setDatePurchased(e.target.value)}
            value={datePurchased}
          />
        </div>
        <div>
          <FormLabel className="form-label">Was it on sale?</FormLabel>
          <Select
            className="select"
            onChange={(e) => setOnSale(e.target.value)}
            value={onSale}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </div>
        <div>
          <FormLabel className="form-label">How much did it cost?</FormLabel>
          <TextField
            className="text-field"
            required={true}
            label="$"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <FormLabel className="form-label">
            How much oat milk do you drink per week?
          </FormLabel>
          <TextField
            className="text-field"
            required={true}
            label="ounces"
            onChange={(e) => setOunces(e.target.value)}
            value={ounces}
          />
        </div>
        <div>
          <FormLabel className="form-label">What is your zip code?</FormLabel>
          <TextField
            className="text-field"
            required={true}
            label="zip code"
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />
        </div>
        <Button variant="contained" type="button" onClick={submitSurvey}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
