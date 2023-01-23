import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AddPicture } from './AddPicture';
import AddManually from './AddManually';
import AddExpenseManually from './AddExpenseManually';


const MainContainer = ({ onAddExpense }) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(true);
  const [apiForm, setapiForm] = useState({ date: '', price: '', store: '' })


  const handleManualExpenseForm = () => {
    setShowAddExpenseForm(!showAddExpenseForm);
  }

  const addApiValues = (items) => {
    const newDate = items.date.slice(0, 10);
    console.log("Adding API Values:", items)
    setapiForm({ ...items, date: newDate });
    setShowAddExpenseForm(!showAddExpenseForm);
    console.log("data got here -->", items);
  }





  return (
    <Container className='text-center mt-5'>

      {showAddExpenseForm ?
        (<div className="row align-items-center">
          <AddPicture onApi={addApiValues} />
          <AddManually onShow={handleManualExpenseForm} />
        </div>)
        :
        (<AddExpenseManually onShow={handleManualExpenseForm} onAddExpense={onAddExpense} onPrefill={apiForm} onSetForm={setapiForm}/>)}
    </Container>
  )
}



export default MainContainer



