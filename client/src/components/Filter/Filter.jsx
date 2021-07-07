import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'felx-end',
        justifyContent: 'flex-end',
        justifySelf: 'center',
        color: 'white',
        textShadow: '1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue',
    },
    button: {
        fontWeight:'bold',
        backgroundColor: fade('#33eb91', 0.6),
        border: '1px solid blue',
        "&:focus":{
            marginLeft: '2px',
            border: '1px solid green',
            fontWeight:'bolder',
            textShadow:'black',
        backgroundColor: fade('#00e676', 0.5),
        }
    }

}));

export const Filter = (props) => {

    const classes = useStyles()

    const { recipesIn, setView, diets } = props

    const [newRecipesOut, setNewRecipesOut] = useState(recipesIn)

    useEffect(() => {
        setView(newRecipesOut);
    }, [newRecipesOut, setNewRecipesOut])


    function filter(e) {
        e.preventDefault();
        const { currentTarget } = e;
        const { value } = currentTarget;
        let newToShow = recipesIn
        newToShow = newToShow.filter(r => r.diets.includes(value));
        if(newToShow.length) setNewRecipesOut(newToShow);
        else {
            setNewRecipesOut(recipesIn);
            Swal.fire('Aviso!', `No hay recetas ${value}`, 'info')
        }
    }

    function reset(e) {
        e.preventDefault();
        setNewRecipesOut(recipesIn);
    }


    function order(e) {
        e.preventDefault();
        const { currentTarget } = e;
        const { value } = currentTarget;
        let newToShow = recipesIn;
        console.log(value)
        if (value === 'A-Z') newToShow = [...newToShow].sort((a, b) => a.title > b.title ? 1 : -1);
        else if (value === 'Z-A') newToShow = [...newToShow].sort((a, b) => a.title < b.title ? 1 : -1);
        else if (value === 'Most Likes') newToShow = [...newToShow].sort((a, b) => (b.aggregateLikes - a.aggregateLikes));
        else if (value === 'Health Score') newToShow = [...newToShow].sort((a, b) => (b.healthScore - a.healthScore));
        setNewRecipesOut(newToShow);
    }

    return (
        <div key='filter' className={classes.root}>
            <b>Filter :</b>
            {diets.map((d, i) =>
                <Button className={classes.button} key={i} variant="outlined" color="primary" value={d.diet} onClick={filter}>{d.diet}</Button>)}
            <b>Sort By :</b>
            <Button className={classes.button} key='Alphabetic' variant="outlined" color="primary" value='A-Z' onClick={order}>Alphabetic</Button>
            <Button className={classes.button} key='RevAlphabetic' variant="outlined" color="primary" value='Z-A' onClick={order}>Alphabetic Asec.</Button>
            <Button className={classes.button} key='Most Likes' variant="outlined" color="primary" value='Most Likes' onClick={order}>Most Likes</Button>
            <Button className={classes.button} key='health score' variant="outlined" color="primary" value='Health Score' onClick={order}>Health Score</Button>
            <Button className={classes.button} key='Reset' variant="outlined" color="primary" onClick={reset}>Reset</Button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        diets: state.diets,
    }
}


export default connect(mapStateToProps, null)(Filter)
