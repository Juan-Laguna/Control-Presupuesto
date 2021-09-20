import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({setinitialbadge, setcreateExpense}) => {

    const [name, setname] = useState('');
    const [amount, setamount] = useState(0);
    const [error, seterror] = useState(false);

    const onsubmit = e => {
        e.preventDefault();

        // Validar
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            seterror(true);
            return;
        }

        // Construir el gasto
        const spending = {
            name,
            amount,
            id: shortid.generate()
        }
        console.log(spending);

        // Pasar el gasto al componente principal
        setinitialbadge(spending);
        setcreateExpense(true);

        // resetear el form
        setname('');
        setamount(0);
        seterror(false);
    }

return (
        <form
            onSubmit={onsubmit}
        >
            <h2>Agrega tus gastos</h2>

            {error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className="campo">
                <label htmlFor="spending">Nombre del gasto</label>
                <input
                    type="text"
                    id="spending"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => setname(e.target.value)}
                />

                <label htmlFor="amount">Cantidad del gasto</label>
                <input
                    type="number"
                    id="amount"
                    className="u-full-width"
                    placeholder="Ej. 500"
                    value={amount}
                    onChange={e => setamount(parseInt(e.target.value, 10))}
                />
            </div>

            <button
                type="submit"
                className="button-primary u-full-width"
            >
                Agregar Gasto
            </button>
        </form>
    )
}

Form.propTypes = {
    setinitialbadge: PropTypes.func.isRequired, 
    setcreateExpense: PropTypes.func.isRequired
}

export default Form;
