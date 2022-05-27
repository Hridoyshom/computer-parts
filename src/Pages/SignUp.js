import React from 'react';
import auth from './firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form"
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gError || updateError) {
        signInError = <p className='text-red-500   ' >{error?.message || gError?.message}</p>
    }

    if (gUser) {
        console.log(gUser);
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword
            (data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('updated');
        navigate('/login')

    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center' >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Signup</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Name</span>

                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.name.message}</span>}



                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>

                                </label>
                                <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'email is required'
                                        },
                                        pattern: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    })} />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500 ">{errors.email.message}</span>}


                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>

                                </label>
                                <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },
                                        minLength: 6,
                                        message: 'must be 6 character'
                                    })} />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                    {errors.password?.type === 'minlength' && <span class="label-text-alt text-red-500 ">{errors.password.message}</span>}


                                </label>
                            </div>


                            {signInError}
                            <input className='btn w-full max-w-xs' type="submit" value="Signup" />
                        </form>
                        <p><small>Already aave an account? <Link className='text-primary' to='/login'>Please Login</Link></small></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;