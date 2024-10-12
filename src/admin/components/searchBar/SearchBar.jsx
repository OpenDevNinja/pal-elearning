import './seachBar.css'
const SearchBar = () => {
    return (
        <div className='search-bar'>
            <form
            className='search-form d-flex align-items-center'
            >
                <input
                    type="text"
                    name='querry'
                    placeholder='Search'
                    title=' Entrer serach keyword'
                />
                <button type="submit" title='Search'>
                    <i className="bi bi-search"></i>
                </button>
            </form>

        </div>
    )
}

export default SearchBar