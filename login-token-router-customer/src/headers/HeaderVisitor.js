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

class HeaderVisitor extends Component {
    render() {
        return (
            <div className="top-fixed">
                <div id="logo" className="logo" style={logo_style}><Link to='/'><img src="/img/logo.png" width="120px" alt="라떼는말이야" /></Link>
                    <ul className="icon-list" style={{float: "right"}}>
                        <Link to='/'><img src="/img/cafeinfo.png" alt="카페정보" /></Link>
                        <Link to='/'><img src="/img/shopmain.png" alt="매장 찾기" /></Link>
                        <Link to='/'><img src="/img/customercenter.png" alt="고객센터" /></Link>
                    </ul>
                </div>
                {/* <a id="floating" className="app-download" style={space_style}><img src="" alt="" /></a> */}
            </div>
        );
    }
}

export default HeaderVisitor;