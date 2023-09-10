import { Link, Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div>
            <div className='flex flex-row'>
                {/* sidebar */}
                <div className='bg-2 w-2/4 mix-blend-lighten  rounded-lg lg:flex'>
                    <ul className='mt-8 mx-5 flex flex-col gap-5'>
                        <li>
                            <Link to={'/dashboard/my-products'}>My Products</Link>
                        </li>
                        <li>Orders</li>
                    </ul>
                </div>
                <div className='w-full bg mix-blend-lighten'>
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default UserLayout;
