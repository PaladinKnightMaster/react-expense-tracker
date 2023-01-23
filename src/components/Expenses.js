import Expense from "./Expense"

const Expenses = ({ expenses, onDelete }) => {
    return (
        <div className="container mt-5 ">
            <table className="table table-hover text-center ">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Store</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                     
                    {expenses.map((expense) => (<Expense key={expense.id} expense={expense} onDelete={onDelete} />))}
                    

                </tbody>
            </table>
        </div>
    )
}

export default Expenses

