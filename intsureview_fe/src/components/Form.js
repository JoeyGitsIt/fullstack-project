// import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
// import Input from '@material-ui/core/Input';
import { Input, Select, Button } from '@mui/material';
import '../css/Form.css';

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      datePurchased: '',
      onSale: {},
      price: '',
      store: '',
      ounces: '',
      zipCode: '',
    },
  });

  // const formData = `{
  //     "date_purchased": ${zipCode},
  //     "on_sale": false,
  //     "price": null,
  //     "store_name": "",
  //     "ounces_per_week": null,
  //     "zip_code": null
  // }`;

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch('http://127.0.0.1:8000/oatmilk/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

    return console.log('success!');
  };

  let options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      When was the last time you purchased oat milk?
      <br />
      <Controller
        name="datePurchased"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      Was it on sale?
      <br />
      <Controller
        name="onSale"
        control={control}
        render={({ ...field }) => <Select {...field} options={options1} />}
      />
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
    </form>
  );
};

export default Form;
