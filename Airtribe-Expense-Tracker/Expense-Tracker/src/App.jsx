import SetDailyBudget from "./Components/SetDailyBudget";
import ExpenseTable from "./Components/ExpenseTable";
import AddExpense from "./Components/AddExpense";
import { useEffect, useState } from "react";

const App = () => {
  const [dailyBudget, setDailyBudget] = useState(null);
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(null);

  useEffect(() => {
    if(totalExpense > dailyBudget){
      alert("Your expenses exceeded the daily budget");
      setDailyBudget(null);
      setTotalExpense(null);
      setExpense([]);
    }
  }, [totalExpense])

  return(
    <div className="main-comp">

      <h1>Expense Tracker - Aeon</h1>
 
      {dailyBudget <= 0 ? <p>Set your daily budget</p> : <p> Your Daily Budget is: {dailyBudget}</p>}
      {totalExpense > 0 ? <p style={{color: totalExpense < (dailyBudget/3)? "green": totalExpense >= (dailyBudget/3) && totalExpense < (dailyBudget-(dailyBudget/3))? "orange" : "red"}} > Your total expenses are : {totalExpense}</p> :null}
      
      <SetDailyBudget setTotalExpense={setTotalExpense} setExpense={setExpense} dailyBudgetvalue={dailyBudget} changeDailyBudget={setDailyBudget}></SetDailyBudget>
      
      {
        dailyBudget > 0 ? 
        <div>
          <ExpenseTable expenses={expense}></ExpenseTable>
          <AddExpense setTotalExpense={setTotalExpense} setExpense={setExpense}></AddExpense>
        </div> : null 
      }

    </div>
  );
}

export default App;


// [
//   {"amount": 100,
//     type: "cr", "dr"
//   }
// ]