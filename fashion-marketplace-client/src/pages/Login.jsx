// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signUpimage from "../assets/images/signupImg.png"
import style from "./styles/SignUp.module.css"
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../redux/features/user/userSlice";

import Swal from "sweetalert2";
import handleUserAuthentication from "../components/utils/userAuthentication";
import Cookies from "js-cookie";

const Signup = () => {
    const dispatch = useDispatch()
    // const [month, setMonth] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'



    //  asapsd
    const user = useSelector(state => state.user)

    const handleFormSubmit = (data) => {
        dispatch(setLoading(true))
        const email = data.email;
        const password = data.password
        //**Login Action From Redux 
        const user = { email, password }

        //Handle user Login
        const loginData = handleUserAuthentication(user, 'login')

        // Returned Promise
        loginData
            .then(res => {
                if (res.success) {
                    Cookies.set('user', res.data._id, { expires: 3 })
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
                Swal.fire({
                    title: `Oh nooooo!`,
                    text: res.error,
                    icon: 'error',
                    timer: 1500
                })
                dispatch(setLoading(false))
            })
    }
    console.log(user)

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
                        <div className="md:min-h-[25rem] md:min-w-[34rem]  bg-[#ffffff20]  rounded-xl pl-8 m-6">
                            <div>
                                <h3 className="text-3xl font-extrabold mt-6  tracking-widest">Log In</h3>
                                <p className="text-[1.1rem] mt-6">Don&apos;t have any Account?<span className="text-primary"> <Link to={'/signup'}>Sign up</Link></span> </p>
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
                                        <label>
                                            <input type="password"
                                                {...register('password')}
                                                placeholder="Password" />
                                            {errors.password && <p>{errors.password}</p>}
                                        </label>
                                    </div>
                                    <div className="flex justify-end mt-20">
                                        {
                                            user?.isLoading ? "Loading....." : <input className="btn cursor-pointer" type="submit" value="Log In" />
                                        }
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
