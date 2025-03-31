import { useState } from "react";

const AddExpense = (props) => {
    const {setExpense, setTotalExpense} = props;
    const [amount, setAmount] = useState("")

    const handleCredit = () => {
        setExpense((prevstate) => {
            return [...prevstate, {amount: amount, type: "credit"}]
        }) 
        setAmount("");
    }

    const handleDebit = () => {
        setExpense((prevstate) => [...prevstate, {amount: amount, type: "debit"}])
        setTotalExpense((prevTotalExpenses) => prevTotalExpenses + amount)
        setAmount("");
    }

    return(
      <>
      <div className="addExpense-main">

        <input type="number" value={amount} onChange={(e) => {
            const amount = parseInt(e.target.value);
            setAmount(amount);
        } } />
        <button onClick={handleCredit}>Credit</button>
        <button onClick={handleDebit}>Debit</button>

      </div>
      </>
    )
  }
  
export default AddExpense;