import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import furniture from '../../images/Furniture-store-2.gif';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    useTitle('Sign Up');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    const handleSignup = data => {
        setSignUpError('');
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error))
                saveUser(data.name, data.email, data.accountType)
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }
    const saveUser = (name, email, accountType) => {
        const user = {
            name,
            email,
            accountType
        }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/');
            })
    }

    return (
        <section className='md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly'>
            <div>
                <img className='w-4/5 mx-auto md:w-[100%]' src={furniture} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='border-2 rounded-xl sm:w-96 p-7'>
                    <h2 className='text-xl text-center font-semibold mb-8'>Create Account Now</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-400 mt-1'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-400 mt-1'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be atleast 6 characters" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have atleast one uppercase,number and special character" }
                                    })
                                }
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-400 mt-1'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Continue account as:</span>
                            </label>
                            <select {...register('accountType')} className="select select-bordered">
                                <option disabled >Select account option Buyer or Seller</option>
                                <option>buyer</option>
                                <option>seller</option>
                            </select>
                        </div>
                        <input type="submit" value='Sign Up' className='btn btn-primary text-white font-semibold w-full max-w-xs mt-10' />
                    </form>
                    {signUpError && <p className='text-red-400'>{signUpError.slice(10, -1)}</p>}
                    <p className='mt-4 w-4/5 mx-auto text-[13px]'>Already have an account? <Link to='/login' className='text-secondary font-bold'>Login Now</Link> </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;