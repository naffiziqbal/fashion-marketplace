// import { useState } from "react";
import signUpimage from "../assets/images/signupImg.png"
import style from "./styles/SignUp.module.css"
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

const Signup = () => {
    // const [month, setMonth] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <div className={style}>
            <div className="bg text-white ">
                <div className="flex justify-center items-center min-h-screen">
                    <div className=" flex flex-col md:flex-row justify-evenly items-center gap-5">
                        <div className=" ">
                            <figure>
                                <img src={signUpimage} alt="one-man-standing-image" />
                            </figure>
                        </div>
                        <div className="md:min-h-[36rem] md:min-w-[34rem]  bg-[#ffffff20]  rounded-xl pl-8 m-6">
                            <div>
                                <h3 className="text-3xl font-extrabold mt-6  tracking-widest">Sign Up</h3>
                                <p className="text-[1.1rem] mt-6">Already a Member?<span className="text-primary"> <Link>Sign in</Link></span> </p>
                            </div>
                            <div className="mt-[3rem]  m-8">
                                <form onSubmit={handleSubmit()}>
                                    <div>
                                        <label>
                                            <input type="email"
                                                {...register('email')}
                                                placeholder="Email Address" />
                                        </label>
                                        <div className="flex flex-row gap-5">

                                            <input type="text"
                                                {...register('fullName')}
                                                placeholder="Full Name" />


                                            <input type="text"
                                                {...register('lastName')}
                                                placeholder="Last Name" />

                                        </div>
                                        <label>
                                            <input type="password"
                                                {...register('password')}
                                                placeholder="Password" />
                                        </label> <br />
                                        <label htmlFor="dob">
                                            Date Of Birth
                                            <div className="flex flex-row gap-6">
                                                <select name="months"
                                                    {...register('month')}
                                                    placeholder="Month">
                                                    <option value="January">January</option>
                                                    <option value="February">February</option>
                                                    <option value="March">March</option>
                                                    <option value="April">Aprill</option>
                                                    <option value="May">May</option>
                                                    <option value="Jume">Jume</option>
                                                    <option value="July">July</option>
                                                    <option value="August">August</option>
                                                    <option value="September">September</option>
                                                    <option value="October">October</option>
                                                    <option value="November">November</option>
                                                    <option value="December">December</option>
                                                </select>
                                                <input type="text"
                                                    {...register('day')}
                                                    placeholder="Day" />
                                                <input type="number"
                                                    {...register('year')}

                                                    placeholder="Year" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex justify-end mt-20">
                                        <input className="btn cursor-pointer" type="submit" value="Create Account" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
