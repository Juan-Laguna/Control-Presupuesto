import React, { useState, useEffect } from 'react';
import Question from './component/Question';
import Form from './component/Form';
import List from './component/List';
import BudgetControl from './component/BudgetControl';


const App = () => {

  const [badget, setbadget] = useState(0);
  const [remaining, setremaining] = useState(0);
  const [showquestion, setshowquestion] = useState(true);
  const [expenses, setexpenses] = useState([]);
  const [initialBadge, setinitialBadge] = useState({});
  const [createExpense, setcreateExpense] = useState(false)

  // UseEffect que actualiza el restante

  useEffect(() => {
    if (createExpense) {

      // Agrega el nuevo presupuesto
      setexpenses([
        ...expenses,
           initialBadge
      ]);

      // Resta del presupuesto actual
      const remainingBudget = remaining - initialBadge.amount;
      setremaining(remainingBudget);

      // Resetear a false
      setcreateExpense(false);
    }
  }, [initialBadge, createExpense, expenses, remaining])



  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {showquestion ? 
                <Question
                  setbadget={setbadget}
                  setremaining={setremaining}
                  setshowquestion={setshowquestion}
                />
              : <div className="row">
                    <div className="one-half column">
                      <Form 
                        setinitialbadge={setinitialBadge}
                        setcreateExpense={setcreateExpense}
                      />
                    </div>

                    <div className="one-half column">
                      <List 
                        expenses={expenses}
                      />

                      <BudgetControl 
                        badget={badget}
                        remaining={remaining}
                      />
                    </div>
                </div>
          }



        </div>

      </header>
    </div>
  )
}

export default App
