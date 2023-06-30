// import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
// import Input from '@material-ui/core/Input';
import { Input, Select, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import '../css/Form.css';

const Form = () => {
  const [data, setData] = useState();
  const [onSale, setOnSale] = useState(null);
  const { control, handleSubmit, field } = useForm({
    defaultValues: {
      datePurchased: '',
      onSale: '',
      price: '',
      store: '',
      ounces: '',
      zipCode: '',
    },
  });

  const onSubmit = async (data) => {
    //   const formData = `{
    //     "date_purchased": ${data.datePurchased},
    //     "on_sale": ${data.onSale},
    //     "price": ${data.price},
    //     "store_name": ${data.store},
    //     "ounces_per_week": ${data.ounces},
    //     "zip_code": ${data.zipCode}
    // }`;

    const formData = `{
    "date_purchased": "2023-06-23",
    "on_sale": false,
    "price": "${data.price}",
    "store_name": "${data.store}",
    "ounces_per_week": ${data.ounces},
    "zip_code": ${data.zipCode}
    }`;

    console.log(formData);
    try {
      const response = await fetch('oatmilk/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });
      // setData(response);
    } catch (e) {
      console.error(e);
    }
  };

  let options1 = [
    { value: 'false', label: 'no' },
    { value: 'true', label: 'yes' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      When was the last time you purchased oat milk?
      <br />
      <Controller
        name="datePurchased"
        control={control}
        render={({ field }) => <Input label="YYYY-DD-MM" {...field} />}
      />
      <br />
      Was it on sale?
      <br />
      {/* <Controller
        name="onSale"
        control={control}
        render={({ ...field }) => (
          <Select
            {...field}
            options={options1}
            value={options1.find((e) => e.value === onSale)}
          />
        )}
      /> */}
      <br />
      How much did it cost?
      <br />
      <Controller
        name="price"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      What is the name of the store you purchased it from?
      <br />
      <Controller
        name="store"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      How many ounces of oat milk do you drink per week?
      <br />
      {/* this can be a number counter going up and down */}
      <Controller
        name="ounces"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      What is your zip code?
      <br />
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      <Button variant="contained" type="submit">
        Submit
      </Button>
      {/* {data ? (
        <div>Thank you for your entry!</div>
      ) : (
        <div>Something went wrong!</div>
      )} */}
    </form>
  );
};

export default Form;
