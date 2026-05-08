import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getDiets } from '../../actions/index'
import './Diets.css'

export function Diets({ diets, loading, getDiets }) {

    useEffect(() => {
        getDiets()
    }, [getDiets])

    return (
        <div className='diets-page'>
            <h2 className='diets-title'>Diet Types</h2>
            {loading ? (
                <div className="state-msg">
                    <div className="spinner" />
                    <p>Loading diets...</p>
                </div>
            ) : !diets || diets.length === 0 ? (
                <div className="state-msg">
                    <p className="empty">No diets available</p>
                    <p className="hint">The diet list could not be loaded. Try again later.</p>
                </div>
            ) : (
                <div className='diet-grid'>
                    {diets.map((d, i) => {
                        let { diet } = d
                        return (
                            <div key={i} className='diet-card'>
                                <span className='diet-name'>{diet}</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        diets: state.diets,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDiets: () => dispatch(getDiets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diets)
