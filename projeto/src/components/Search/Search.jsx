import React from 'react' 
import './Search.scss'
import Loading from '../Loading/Loading'
import {useDispatch,useSelector} from 'react-redux'
import {searchValue} from '../../store/reducers/homeReducer/action'
import Searchitem from '../Searchitem/Searchitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {closeSearch} from '../../store/reducers/Navreducers/action'
const Search  = () => { 
    const {search_array} = useSelector(store => store.homeReducer)
    const dispatch = useDispatch()
    const handleSearch = (e,text) => { 
         e.preventDefault()
         dispatch(searchValue(text))
    }
    function handleClose() { 
        dispatch(closeSearch())
    }
    return (
        <div className = "sidebar"> 
          <div className = "search">
            <button className= "sidebar__top__close"> 
             <FontAwesomeIcon icon = {faTimes} onClick = {handleClose} />
            </button>
            <input onChange ={(e) => handleSearch(e,e.target.value)} />   
           <div className = "search__content">
            { search_array !==  undefined ?
             search_array.map((item) => { 
                return (<Searchitem item ={item} />)
             })
            :  <Loading/>}
           </div>  
          </div>
        </div>
    )
}

export default Search