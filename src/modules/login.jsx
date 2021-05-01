// import { httpLogin } from 'app/api/auth';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { ElrInput } from '../components/Input';
import { ElrButton } from '../components/Button';

const Login = () => {
  const defaultState = {
    email: '',
    password: '',
  };
  const history = useHistory();
  const [formState, setState] = useState(defaultState);
  const queryClient = useQueryClient();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await queryClient.fetchQuery('user', () =>
        // httpLogin({
        ({
          email: formState.email,
          password: formState.password,
        })
      );
      return history.push('/library');
    } catch (error) {
      // display error here
      return error;
    }
  };

  // todo-typings
  const onInputChange = (e) =>
    setState({
      ...formState,
      [e.target?.name]: e.target?.value,
    });

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-elr-gray-500">
        <div className="h-376 md:h-376 w-11/12 md:w-96 bg-elr-white-400 rounded-2xl flex flex-col items-center">
          <form onSubmit={onSubmit} className="w-5/6 md:w-72 pb-14">
            <div className="mt-14 mb-7 text-xl text-center"> Login </div>
            <div className="mb-3">
              <ElrInput
                className="bg-elr-gray rounded-none border-none"
                onChange={onInputChange}
                name="email"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-10">
              <ElrInput
                className="bg-elr-gray rounded-none border-none"
                onChange={onInputChange}
                type="password"
                required
                placeholder="Password"
                name="password"
              />
            </div>
            <div>
              <ElrButton
                text="Login"
                submit
                className="bg-elr-black text-white text-lg mb-4 md:mb-4 w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;