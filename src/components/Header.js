import React, {
    PureComponent
} from 'react';


class Header extends PureComponent {
    // state = {  }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" >
                    <button type="button"
                        id="sidebarCollapse"
                        className="btn btn-default" >

                        <img className="logo" src="icon.png" alt="" />
                        <span >
                        </span>
                    </button >

                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation" >
                        <i className="fas fa-align-justify" > </i>
                    </button >

                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent" >
                        <ul className="nav navbar-nav ml-auto" >

                            {
                                /* <li className="nav-item">
                                    a className="nav-link" href="#">Page</a>
                                 </li> */
                            }
                        </ul>
                    </div>
                </div>
            </nav >);
    }
}

export default Header;