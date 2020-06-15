import React from 'react' 
import './Search.scss'
import Loading from '../Loading/Loading'
import {useDispatch,useSelector} from 'react-redux'
import {searchValue, setLoading} from '../../store/reducers/homeReducer/action'
import Searchitem from '../Searchitem/Searchitem'
const Search  = () => { 
    const {search_array,loading} = useSelector(store => store.homeReducer)
    const dispatch = useDispatch()
    const handleSearch = (e,text) => { 
         e.preventDefault()
         //dispatch(setLoading())
         dispatch(searchValue(text))
    }
    return (
        <div className = "sidebar"> 
          <div className = "search">
            <input onChange ={(e) => handleSearch(e,e.target.value)} />   
            { search_array != undefined ?
             search_array.map((item) => { 
                return (<Searchitem item ={item} />)
             })
            :  <Loading/>}
          </div>
        </div>
    )
}

export default Search