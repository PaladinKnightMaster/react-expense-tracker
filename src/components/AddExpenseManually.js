import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { } from 'react-bootstrap-icons';


const AddExpenseManually = ({ onShow, onAddExpense, onPrefill }) => {
    const [form, setForm] = useState({ date: '', store: '', category: '', price: '' })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const id = Math.floor(Math.random() * 1000) + 1;
        onAddExpense({ id, ...form });
        setForm({ date: '', store: '', category: '', price: '' })
    }


    return (
        <>

            <Container>
                <Form onSubmit={onSubmit}>
                    {onPrefill.date !== '' ?
                        (<div>
                            <div>Please add a category and save</div>
                            <i className="bi bi-x-circle-fill d-flex flex-row-reverse" onClick={onShow} style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                        </div>) :
                        (<i className="bi bi-x-circle-fill d-flex flex-row-reverse" onClick={onShow} style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>)}

                    <div className="row">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <input className='form-control' type="date" id="input-date" defaultValue={onPrefill.date} onChange={(e) => { setForm((prev) => ({ ...prev, date: e.target.value })) }}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="text">Store</label>
                            <input className='form-control' type="text" id="input-store" placeholder="McDonald's" defaultValue={onPrefill.store} onChange={(e) => { setForm((prev) => ({ ...prev, store: e.target.value })) }}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="text">Category</label>
                            <input className="form-control" type="text" id="input-category" placeholder="ie. Food or Groceries" defaultValue={form.category} onChange={(e) => { setForm((prev) => ({ ...prev, category: e.target.value })) }}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="text">Amount</label>
                            <input className="form-control" type="number" id="input-number" placeholder='10.99' defaultValue={onPrefill.price} onChange={(e) => { setForm((prev) => ({ ...prev, price: e.target.value })) }}></input>

                        </div>
                    </div>

                    <div className="row mt-3 ">
                        <Button type="submit" className='btn btn-dark'>Save Expense</Button>
                    </div>
                </Form>
            </Container>








        </>
    )
}

export default AddExpenseManually



//  onChange={(e) => { setForm((prev) => ({ ...prev, date: e.target.value })) }}