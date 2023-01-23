
const AddManually = ({ onShow }) => {
  return (

    <>
        <div className="col">
          <div className="fs-2 fw-light">Add Expense Manually</div>
          <div style={{ fontSize: 100 }}>
            <i className="bi bi-pencil-square" onClick={onShow} style={{ cursor: "pointer"}}></i>
          </div>
        </div>
    </>
  )
}

export default AddManually