import { Controller } from 'react-hook-form';
import { Select } from '@mui/material';

const DropDown = () => {
  let options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div>
      <Controller
        name="select"
        control={control}
        render={({ ...field }) => <Select {...field} options={options1} />}
      />
    </div>
  );
};

export default DropDown;
