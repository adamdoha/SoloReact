import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const logo_style = {
    opacity: 1,
    display: 'block'
}

// const space_style = {
//     opacity: 0,
//     display: 'block'
// }

class HeaderRole extends Component {
    render() {
        return (
                <div className="top-fixed">
                    <div id="logo" className="logo" style={logo_style}>
                        <ul className="icon-list" style={{float: "right"}}>
                            <Link to='/Customer'>손님 페이지</Link>
                            <Link to='/Owner'>사장 페이지</Link>
                        </ul>
                    </div>
                    {/* <a id="floating" className="app-download" style={space_style}><img src="" alt="" /></a> */}
                </div>
        );
    }
}

export default HeaderRole;