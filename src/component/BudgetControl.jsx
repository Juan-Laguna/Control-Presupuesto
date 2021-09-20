import React from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../helpers';

const BudgetControl = ({badget, remaining}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {badget}
            </div>

            <div className={checkBudget(badget, remaining)}>
                Restante: $ {remaining}
            </div>
        </>
    )
}

BudgetControl.propTypes = {
    badget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default BudgetControl;
