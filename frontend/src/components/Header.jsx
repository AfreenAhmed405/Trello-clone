import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="row nav-row">
                <div className="header-left col-3">
                    <button className="header-button m-1"><i className="fa-solid fa-grip"></i></button>
                    <button className="header-button m-1"><i className="fa-solid fa-house"></i></button>
                    <form className="form-inline my-2 my-lg-0 m-1">
                        <input className="header-search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </input>
                    </form>
                </div>
                <div className="header-center col-6">
                    <h1>Trello</h1>
                </div>
                <div className="header-right col-3">
                        <button className="header-button m-1"><i className="fa-solid fa-plus"></i></button>
                        <button className="header-button m-1"><i className="fa-solid fa-circle-info"></i></button>
                        <button className="header-button m-1"><i className="fa-regular fa-bell"></i></button>
                </div>
            </div>




        </nav>
    )
}

export default Header;