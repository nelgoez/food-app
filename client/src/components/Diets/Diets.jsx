import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getDiets } from '../../actions/index'
import './Diets.css'

export function Diets(props) {

    useEffect(() => {
        props.getDiets()
    }, [])

    return (
        <div className='diet-container' key='diets'>
            <label className='label'>Diets: </label>
            <ul className='list'>
                {props.diets.map((d, i) => {
                    let { diet } = d
                    return (
                        <li key={`${i}`} className='item'>{diet}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        diets: state.diets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDiets: () => dispatch(getDiets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diets)