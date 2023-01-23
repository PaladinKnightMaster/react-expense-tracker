
import axios from "axios";




export const AddPicture = ({ onShow, onApi }) => {


  const { REACT_APP_API_KEY } = process.env;

  const handleReceipt = (receipt) => {
    const data = new FormData();
    data.append("file", receipt);

    const options = {
      method: 'POST',
      url: 'https://receipt-recognition.p.rapidapi.com/api/external/receipt/recognition/photos',
      headers: {
        'X-RapidAPI-Key': `${REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'receipt-recognition.p.rapidapi.com',
        ...data.get('file')
      },
      data: data
    };

    axios.request(options)
      .then((res) => {
        onApi({ store: res.data.shop.shopName, price: res.data.totalPrice, date: res.data.receiptTime });
      })
      .catch((error) => {
        console.error(error);
      });





  }







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

