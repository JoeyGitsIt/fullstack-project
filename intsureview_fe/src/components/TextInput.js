import { Controller } from 'react-hook-form';
import { Input } from '@mui/material';

const TextInput = () => {
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
    </>
  );
};

export default TextInput;
