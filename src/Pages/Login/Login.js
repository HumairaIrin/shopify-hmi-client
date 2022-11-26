import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../contexts/AuthProvider';
import furniture from '../../images/Furniture-store.gif';

const Login = () => {
    useTitle('Login');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // if (token) {
    // }

    const handleLogin = data => {

        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message)
            });
    }
    return (
        <section className='md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly'>
            <div>
                <img className='w-4/5 mx-auto md:w-[100%]' src={furniture} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='border-2 rounded-xl sm:w-96 p-7'>
                    <h2 className='text-xl text-center font-semibold'>Welcome Back</h2>
                    <p className='text-center mb-8 text-xs'>Please Login</p>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Email</span></label>
                            <input type="text"  {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className=' pt-1 text-red-400 mt-1'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required"
                                })
                                } className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className=' pt-1 text-red-400'>{errors.password?.message}</p>}
                            {loginError && <p className='text-red-400 pt-1'>{loginError.slice(10, -1)}</p>}
                            {/* <label className="label"><span className="label-text font-semibold text-[12px]">Forget Password?</span></label> */}
                        </div>
                        <input type="submit" value='Login' className='btn btn-primary text-white font-semibold w-full max-w-xs mt-10' />
                    </form>
                    <p className='mt-4 w-4/5 mx-auto text-[13px] mb-9'>New to Shopify HMI? <Link to='/signup' className='text-secondary font-bold'>Create new account</Link> </p>
                    <div className="divider">Or login with</div>
                    <div className='border border-1 p-3 rounded-full flex items-center justify-center space-x-3'><span><FcGoogle /></span><span>Google</span></div>
                </div>
            </div>
        </section>
    );
};

export default Login;