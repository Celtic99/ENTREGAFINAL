import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src="https://previews.dropbox.com/p/thumb/ACHZEpotNYDPgM3Nnn0J_mlREJjy2-MaU991lOGh6gQZFtBKRjs4zZaVXZpNYQNugOl3sy-q0uRvqUpTrmjB-s3b1hl8B2-_CB2v_2cKoowExF9B2-0SsnLDFqziSaB218nLK3VgPuPKUzpE65qjYbhNZGDrK6IIvY3kanlruxArjOXTYigfQ62z9CLO0WmpICzNXPcEZBoOQkO72fKzWoVEuP0p9rEzq8nPllS8SxKugyct_oZ8pbEIDLCrA9T68YBNpHyr-zJ6RQlKQSfpHO0SZqt--AELbqUJRmtLVZBlollNaCMVe49A7Xpbryg6_SA22AkrtRJRMqNXwCO1rBy4/p.png" alt="tecno" width={100} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/tops"} >Tops</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/musculosas"}>Musculosas</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/buzos"}>Buzos</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="justify-content-end  align-items-center" to={"/cart"}><CartWidget/></Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        
            </div>
        </div>
        
            
    )
}

export default NavBar;
