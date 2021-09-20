import React from 'react';
import PropTypes from 'prop-types';
import Spending from './Spending';

const List = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {expenses.map(spending => (
                <Spending 
                    key={spending.id}
                    spending={spending}
                />
            ))}
        </div>
    )
}

List.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default List;
