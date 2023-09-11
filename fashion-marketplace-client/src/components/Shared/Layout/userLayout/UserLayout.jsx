import { Link, Outlet } from 'react-router-dom';
import { Close, MenuOpen } from "@mui/icons-material"
import { useState } from 'react';

const UserLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = (isMenuOpen) => {
        setIsMenuOpen(isMenuOpen)
        console.log(isMenuOpen)
    }
    return (
        <div className='min-h-screen'>
            <div className='flex flex-row relative gap-5 h-full'>
                <div className='w-1/4 absolute lg:hidden'>
                    <button onClick={() => handleMenuOpen(!isMenuOpen)}>
                        <MenuOpen />
                    </button>
                </div>


                {/* sidebar */}
                <nav className={`
                 ${isMenuOpen === true ?
                        "flex flex-row-reverse justify-between absolute h-full bg-2  w-[25rem] rounded duration-700"
                        : "hidden lg:flex w-1/4 lg:mr-0 duration-700 shadow-xl"} h-screen`}>

                    {
                        isMenuOpen === true && <div className='relative top-5 right-5'
                            onClick={() => handleMenuOpen(!isMenuOpen)}
                        >
                            <Close />
                        </div>
                    }
                    <ul className='mt-8 mx-5 flex flex-col gap-5 '>
                        <li>
                            <Link to={'/dashboard/user-profile'}>Profile</Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-products'}>My Products</Link>
                        </li>
                        <li>Orders</li>
                    </ul>
                </nav>
                <div className='w-full mt-14'>
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default UserLayout;
