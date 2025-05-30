import "./css/SearchBox.css";
export const SearchBox = ({searchValue,setSearchValue}) => {

    let handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    // console.log(searchValue)
    return (
        <>
        <div id="searchBox">
            <input type="search" id="searchInput" autoComplete="off" placeholder="Search here ..." onChange={handleChange} value={searchValue} />
            <span><i className="fas fa-search"></i></span>
        </div>
        </>
    )
}

{/*
Way to use:
Step 1: import { useState } from 'react'
Step 2: const [searchValue, setSearchValue] = useState(''), this useState is lifted up, so use this in parent body on it.
Step 3: import { SearchBox } from '../components/SearchBox'
Step 4: Use this component in parent body <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
*/}