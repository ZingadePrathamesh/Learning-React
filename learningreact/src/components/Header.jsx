const Header = ({selectedTeam, employeeCount}) => {
    return(
    <header className="container">
        <div className="row justify-content-center">
            <div className="col-8 m-3">
                <h1 className="title font-title heading mt-3">Employee Team Management</h1>
            </div>
        </div><div className="row justify-content-center">
            <div className="col-8 m-3">
                <h3>Selected Team: <b>{selectedTeam}</b></h3>
                <h3>Employee present: <b>{employeeCount}</b></h3>
            </div>
        </div>
        
    </header>
    );
}

export default Header;