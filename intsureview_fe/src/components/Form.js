// import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
// import Input from '@material-ui/core/Input';
import { Input, Select } from '@mui/material';

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      zipCode: '',
      select: {},
      dateTime: '',
      price: '',
      store: '',
      oatMilkQuantity: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  let options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      When was the last time you purchased oatmilk?
      <br />
      <Controller
        name="dateTime"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      Was it on sale?
      <br />
      <Controller
        name="select"
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
      What store did you purchase it from?
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
        name="oatMilkQuantity"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      Zip Code?
      <br />
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
