import React from 'react'
import { connect } from 'react-redux';
import './Diets.css'

export function Diets(props) {

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


export default connect(mapStateToProps, null)(Diets)