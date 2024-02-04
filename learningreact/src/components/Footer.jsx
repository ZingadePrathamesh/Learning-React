const Footer = (props) => {
    var today = new Date();
    return(
    <footer>
        <div className="container">
            <div className="row justify-content-center m-3">
                <div className="col-8 ">
                    <h4>Employee Team Management - {today.getFullYear()}</h4>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
