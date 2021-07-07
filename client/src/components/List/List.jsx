import React, { useEffect } from 'react'
import Recipe from '../Recipe/Recipe'
import { connect } from 'react-redux'
import UsePagination from '../../hooks/Pagination'
import Filter from '../Filter/Filter'
import { LinearProgress } from '@material-ui/core'
import './List.css'
import { setView } from '../../actions'


export function List(props) {

    const { recipesOut, recipesIn, setView } = props

    useEffect(() => {
        setView(recipesIn)
    }, [recipesIn])

    const { prev, currentPage, currentData, next, jump, maxPage } = UsePagination(recipesOut, 9)

    
    
    
    return (
        <div key='list' className='list'>
            <div className='pages-top'>
                {currentPage !== 1 && <input className="button" type="button" onClick={prev} value='<' />}
                {currentPage > 1 && <input className="button" type="button" onClick={() => jump(1)} value='1..' />}
                ..{currentPage}..
                {(currentPage + 1) < maxPage && <input className="button" type="button" onClick={() => jump(maxPage)} value={`..${maxPage}`} />}
                {maxPage > currentPage && <input className="button" type="button" onClick={next} value='>' />}
            </div>
           <Filter recipesIn={recipesIn} setView={setView}/>
           {currentData().length < 1 && <LinearProgress color="secondary" />}
            <div key='results' className='results'>
                    {currentData() && currentData().map((r, index) => {
                        return <Recipe recipe={r} key={`${r.id}-${index}`} />
                    })}
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        recipesOut: state.recipesOut,
        recipesIn: state.recipesIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setView: (toShow) => dispatch(setView(toShow))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)