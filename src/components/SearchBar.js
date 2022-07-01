import React,{useState} from 'react'

const SearchBar = () => {
  
  const [search,setSearch] = useState('');

  const handleClick = (e) =>{
    e.preventDefault();
    setSearch('');
    console.log(search);
  }

  

  return (
    <div className="w-full absolute mt-40 flex items-center justify-center z-[-1]">
      <form className="h-10 flex justify-center w-64">
        <input 
          type="text" 
          className="shadow-md rounded-l-full font-[Poppins] text-gray-800 pl-2" placeholder="Enter an ingridient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button 
          className="bg-red-600 w-44 rounded-r-full hover:bg-red-800" 
          type="submit"
          onClick={handleClick}
        >
            Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar