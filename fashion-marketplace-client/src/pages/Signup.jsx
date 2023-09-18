// import { useState } from "react";
import { useDispatch } from "react-redux";
import signUpimage from "../assets/images/signupImg.png"
import style from "./styles/SignUp.module.css"
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../redux/features/user/userSlice";
import Swal from "sweetalert2";
import handleUserAuthentication from "../components/utils/userAuthentication";


const Signup = () => {
    // const [month, setMonth] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location?.state?.from?.pathname || '/';



    const handleFormSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const FName = data.FName
        const LName = data.LName
        const displayName = FName + " " + LName
        const role = data.seller || data.user
        const birth = {
            month: data.month,
            day: data.day,
            year: data.year,
        }
        const DOB = `${birth.month}-${birth.day}-${birth.year}`
        const user = {
            email, password, displayName, DOB, role, userImg: "https://i.ibb.co/5Wd7my5/Vana-Studio-Powerful-Viking-warrior-with-long-flowing-hair-and-a-majestic-0.png"
        }

        const signupData = handleUserAuthentication(user, 'create-user')
        signupData
            .then(res => {
                if (res.success) {
                    Cookies.set('profile', res.data.userImg, { expires: 3 })
                    Cookies.set('accessToken', res.token, { expires: 3 })
                    dispatch(setUser(res?.data))
                    Swal.fire({
                        title: `Congratulations ${res?.data?.displayName}`,
                        text: 'You have Been Signed In 👏👏🎉',
                        icon: 'success',
                        timer: 1500
                    })
                    dispatch(setLoading(false))
                    navigate(from, { replace: true })

                }
                if (res.errors) {
                    Swal.fire({
                        title: `Oh nooooo!`,
                        text: errors._message,
                        icon: 'error',
                        timer: 1500
                    })
                    dispatch(setLoading(false))
                }

            })

    }


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
                                <p className="text-[1.1rem] mt-6">Already a Member?<span className="text-primary"> <Link to={'/login'}>Log In</Link></span> </p>
                            </div>
                            <div className="mt-[3rem]  m-8">
                                <form onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div>
                                        <label>
                                            <input type="email"
                                                {...register('email')}
                                                placeholder="Email Address" />
                                            {errors.email && <p>{errors.email}</p>}
                                        </label>
                                        <div className="flex flex-row gap-5">

                                            <input type="text"
                                                {...register('FName')}
                                                placeholder="Full Name" />
                                            {errors.Fname && <p>{errors.Fname}</p>}

                                            <input type="text"
                                                {...register('LName')}
                                                placeholder="Last Name" />
                                            {errors.Lname && <p>{errors.Lname}</p>}
                                        </div>
                                        <label>
                                            <input type="password"
                                                {...register('password')}
                                                placeholder="Password" />
                                            {errors.password && <p>{errors.password}</p>}
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
                                                <input type="number"
                                                    {...register('day')}
                                                    placeholder="Day" />
                                                {errors.day && <p>{errors.day}</p>}
                                                <input type="number"
                                                    {...register('year')}

                                                    placeholder="Year" />
                                                {errors.year && <p>{errors.year}</p>}
                                            </div>
                                        </label>
                                        <div>
                                            <input type="radio" value="user" name="role"{...register('user')} /> User
                                            <input type="radio" value="seller" name="role" {...register('seller')} /> Seller
                                        </div>
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
