import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../redux/hooks';
import { setUser, IUserState } from '../../redux/slices/userSlice';

import styles from './login.module.scss';

type Inputs = {
  id: number;
  api: string;
  phone: number;
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(setUser(data));

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>Please, fill the form:</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='number'
            placeholder='IdInstance'
            {...register('id', { required: true })}
          />
          {errors.id && <span>This field is required</span>}
          <input
            type='text'
            placeholder='ApiTokenInstance'
            {...register('api', { required: true })}
          />
          {errors.api && <span>This field is required</span>}
          <input
            type='number'
            placeholder='Phone number'
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>This field is required</span>}
          <button type='submit'>Join the chat</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
