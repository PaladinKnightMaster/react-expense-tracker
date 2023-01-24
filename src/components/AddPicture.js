export const AddPicture = ({ handleReceipt }) => {
  return (
    <div className="col">
      <div className="fs-2 fw-light">Upload a picture of your Receipt</div>
      <div style={{ fontSize: 100 }}>

        <div>
          <label htmlFor="file-input">
            <i className="bi bi-camera" style={{ cursor: "pointer" }}
            ></i>
            <input id="file-input" className="d-none" type="file" onChange={(event) => { handleReceipt(event.target.files[0]) }} />
          </label>
        </div>

      </div>
    </div>
  )
}

