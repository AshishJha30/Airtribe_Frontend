
const SetDailyBudget = (props) => {
  const {setTotalExpense, setExpense, dailyBudgetvalue, changeDailyBudget} = props;

    const handleBudget = (e) => {
      e.preventDefault();
      // console.log(e);
      // let val = e.target.form;
      changeDailyBudget(e.target[0].value);
      e.target[0].value=null;
    }
    const resetBudget = () => {
      changeDailyBudget(null);
      setExpense([]);
      setTotalExpense(null);
      
    }
    return(

      <form onSubmit={handleBudget} className="dailyBudget">  

        <input type="number" />

        {!dailyBudgetvalue ? <button type="submit">Set Daily Budget</button> : null}
        
        { dailyBudgetvalue > 0 ? 
          <button onClick={resetBudget}>Reset Daily Budget</button> 
          : null
        }

      </form>
    )
  }
  
export default SetDailyBudget;