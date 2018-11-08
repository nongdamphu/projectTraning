import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : ''
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className="nav-link">{label}</Link>
                    </li>
                )
            }}
        />
    )
}

const menuList = [
    {
        label: "LOGO",
        to: "/",
        exact: true
    },
    {
        label: "Trang Chủ",
        to: "/home",
        exact: false
    },
    {
        label: "Quản Lí Sản Phẩm",
        to: "/product-list",
        exact: false
    }
]

class Menu extends Component {
    render() {
        return (
            <div className="mb-5">
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <ul className="nav navbar-nav">
                        {this.showMenu(menuList)}
                    </ul>
                </nav>
            </div>
        );
    }

    showMenu = menuList =>{
        let result = null
        if(menuList.length > 0){
            result = menuList.map((menu, index)=>{
                return <MenuLink 
                    key={index}
                    label={menu.label} 
                    to={menu.to} 
                    activeOnlyWhenExact={menu.exact} 
                />
            })
        }
        return result
    }
}

export default Menu;