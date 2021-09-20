import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({setbadget, setremaining, setshowquestion}) => {

    const [amount, setamount] = useState(0);
    const [error, seterror] = useState(false);

    // Funcion que lee el presupuesto
    const onChange = e => {
        setamount(parseInt(e.target.value));
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar 
        if (amount < 1 || isNaN(amount)) {
            seterror(true);
            return
        }

        // Si se pasa la validacion
        seterror(false);
        setbadget(amount);
        setremaining(amount);
        setshowquestion(false);
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                >
                <label htmlFor="input">
                    <h2>Coloca tu presupuesto</h2>  
                </label>

                {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

                <input 
                    type="number" 
                    name="" 
                    id="input" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={onChange}
                />

                <button 
                    type="submit"
                    className="button-primary u-full-width"
                >
                    Definir Presupuesto
                </button>
            </form>
        </>
    )
}

Question.propTypes = {
    setbadget: PropTypes.func.isRequired, 
    setremaining: PropTypes.func.isRequired, 
    setshowquestion: PropTypes.func.isRequired
}

export default Question
