export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary data-bs-theme='dark'" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>New Science News</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">


                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
