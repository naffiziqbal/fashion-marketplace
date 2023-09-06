import { useState } from 'react';
import { useGetAllProductsQuery } from '../../../redux/features/products/apis/productApi';
import Loading from "../../ui/loading/Loading"
import { Link } from 'react-router-dom';
import style from "./Search.module.css"

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedData, setSearchedData] = useState(null)
    const { data, isLoading } = useGetAllProductsQuery(undefined);

    let content


    const handleSearch = (e) => {
        e.preventDefault()
        const query = e.target.value;
        setSearchQuery(query)
        const filterdData = data?.data?.filter(item => item?.name?.toLowerCase()?.includes(query?.toLowerCase()))
        setSearchedData(filterdData)
    }

    if (isLoading) {
        content = <Loading />
    }
    if (searchedData) {
        content = searchedData.map(data => <Link key={data._id} to={`${data._id}`}>
            <div className='flex items-center gap-5 my-2 duration-300 hover:text-blue-600'><img className='w-24' src={data.image} alt="" /> <p>{data.name}</p></div>
        </Link>)
    }
    if (searchQuery === "") {
        content = ''
    }
    return (
        <div className={style?.search}>
            <div>
                <label htmlFor="searchField">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Items"
                        className="lg:min-w-[358px] min-h-[48px] w-full md:w-1/2 md:border border-b rounded-none md:rounded-3xl outline-none"
                        onChange={handleSearch}
                        value={searchQuery}
                    />

                </label>
            </div>

            <div className='absolute z-50 w-full overflow-scroll overflow-x-hidden max-h-[24rem]'>
                {content}
            </div>

        </div>
    );
};

export default Search;
