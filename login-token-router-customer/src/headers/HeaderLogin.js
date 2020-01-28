import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const logo_style = {
    opacity: 1,
    display: 'block'
}

class HeaderLogin extends Component {
    render() {
        return (
                <div className="top-fixed">
                    <div id="logo" className="logo" style={logo_style}>
                        <ul className="icon-list" style={{float: "right"}}>
                            <Link to='/Login'><img src="/img/login.png" alt="로그인" /></Link>
                            <Link to='/Signup'><img src="/img/signup.png" alt="회원가입" /></Link>
                        </ul>
                    </div>
                    {/* <a id="floating" className="app-download" style={space_style}><img src="" alt="" /></a> */}
                </div>
        );
    }
}

export default HeaderLogin;