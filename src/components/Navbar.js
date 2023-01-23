import moneylogo from '../images/navbar-money.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1 p-5 fs-1 mx-auto" href="/">
                    <img src={moneylogo} alt="" width="40" height="28" className="align-text-center"></img>
                      Expense Tracker</a>
            </div>
        </nav>
    )
}

export default Navbar