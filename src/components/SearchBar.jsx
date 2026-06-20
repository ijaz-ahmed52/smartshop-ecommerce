
const SearchBar = ({searchTerm , setSearchTerm}) => {
    return(
        <div>
            <div>
                <input value={searchTerm} className=" hidden md:block border-gray-400 w-32 md:w-60 p-2 outline-none focus:border-blue-800 border-2 rounded-lg " type="search"  onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Product..."/>
            </div>
        </div>
    )
}
export default SearchBar