import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { } from 'react-bootstrap-icons';


const AddExpenseManually = ({ onShow, onAddExpense, onPrefill }) => {


    const onSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000) + 1;
        onAddExpense({
            id, date: e.target.date.value,
            store: e.target.store.value,
            category: e.target.category.value,
            price: e.target.price.value
        });

        e.target.reset();
    }


    return (
        <>
            <Container>
                <Form onSubmit={onSubmit}>
                    {onPrefill.store !== '' ? <div>Please add a category and save</div> : null}
                    <div className=" d-flex flex-row-reverse">
                        <i className="bi bi-x-circle-fill" onClick={onShow} style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <input className='form-control' required type="date" id="date" name="date" defaultValue={onPrefill.date} />
                        </div>
                        <div className="col">
                            <label htmlFor="text">Store</label>
                            <input className='form-control' type="text" required id="store" name="store" placeholder="McDonald's" defaultValue={onPrefill.store} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="text">Category</label>
                            <input className="form-control" type="text" required id="category" name="category" placeholder="ie. Food or Groceries" ></input>
                        </div>
                        <div className="col">
                            <label htmlFor="text">Amount</label>
                            <input className="form-control" type="decimal" required id="price" name="price" placeholder='10.99' defaultValue={onPrefill.price} ></input>

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
