import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AddPicture } from './AddPicture';
import AddManually from './AddManually';
import AddExpenseManually from './AddExpenseManually';
import axios from "axios";

const { REACT_APP_API_KEY } = process.env;


const MainContainer = ({ onAddExpense }) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [apiForm, setapiForm] = useState({ date: '', price: '', store: '' })

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

    setIsLoading(true);

    axios.request(options)
      .then((res) => {
        setIsLoading(false);
        addApiValues({ store: res.data.shop.shopName, price: res.data.totalPrice, date: res.data.receiptTime });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleAddExpense = (...args) => {
    setapiForm({ date: '', price: '', store: '' });
    onAddExpense(...args)
  }


  const handleManualExpenseForm = () => {
    setShowAddExpenseForm(!showAddExpenseForm);
  }

  const addApiValues = (items) => {
    const newDate = items.date.slice(0, 10);
    setapiForm({ ...items, date: newDate });
    setShowAddExpenseForm(!showAddExpenseForm);
  }





  return (
    <Container className='text-center mt-5 mb-5'>

      {isLoading ? (<div className="d-flex justify-content-center">
        <div className="spinner-grow text-dark mt-5 mb-5" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-2 mt-5 mb-5" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark mt-5 mb-5" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
        : (
          showAddExpenseForm ?
            (<div className="row align-items-center">
              <AddPicture onRequestStarted={() => setIsLoading(true)} handleReceipt={handleReceipt} />
              <AddManually onShow={handleManualExpenseForm} />
            </div>)
            :
            (<AddExpenseManually onShow={handleManualExpenseForm} onAddExpense={handleAddExpense} onPrefill={apiForm} />)
        )}
    </Container>
  )
}



export default MainContainer



