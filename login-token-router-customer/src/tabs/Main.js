import React, { Component } from 'react'
import CafeInfo from '../components/CafeInfo';
import './Main.css';

export default class Main extends Component {
    state = {
        cafes: [
            {
                name: "Twosome Place",
                picture: "http://www.newsgn.com/imgdata/newsgn_com/201709/2017092554155245.jpg",
            },
            {
                name: "Starbucks",
                picture: "https://t1.daumcdn.net/cfile/tistory/236B503C5961BE5536",
            },
            {
                name: "Coffeebean",
                picture: "http://www.mirae-biz.com/news/photo/201803/37567_30810_4718.jpg",
            },
            {
                name: "Banapresso",
                picture: "http://mblogthumb1.phinf.naver.net/MjAxOTAzMjJfMjM4/MDAxNTUzMjIzNjAwMDU4.jUAy36LFmP88TJk1On4VNol4xYeMPXrEOyMqI83VXOYg.wWNmxoaAUtzUHJ-xSsN48Oif-856lcTlGJCSwBImLE8g.JPEG.lovenonsul/IMG_2529.JPG?type=w800",
            },
            {
                name: "Idiya Coffee",
                picture: "http://danmee.chosun.com/site/data/img_dir/2017/08/18/2017081801938_0.jpg",
            },
            {
                name: "Hollys Coffee",
                picture: "http://admin.hollys.co.kr/upload/branch/store_201609210824422010.jpg",
            },
        ]
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <h2>라떼는 말이야~</h2>
                <p>커피를 미리 주문하는건 꿈도 못꿨다구!</p>
                <div className="Main">
                {this.state.cafes.map((Cafe, index) => {
                  return <CafeInfo name={Cafe.name} picture={Cafe.picture} key={index} />
                })}
                </div>
            </div>
        )
    }
}

