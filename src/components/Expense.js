const Expense = ({ expense, onDelete }) => {
    return (
        <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.store}</td>
            <td>{expense.category}</td>
            <td>${expense.price}</td>
            <td><i className="bi bi-x-circle" style={{ color: "cornflowerblue", fontSize: "1rem", cursor: "pointer" }}
                onClick={() => onDelete(expense.id)}></i></td>
        </tr>
    )
}

export default Expense