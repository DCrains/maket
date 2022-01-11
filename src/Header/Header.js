import React from 'react'

import '../Header.css';

  

export default function Header(){
    return (
        <div className="nav" >
            <div className="leftbar">
            <p  className="leftbar1">8-911-113-93-95</p>
            <p className="leftbar2">ПН-ВС 10:00 - 20:00 </p>
             </div>
             <div className="ebuch">
            <a href="#" className="item">Наши услуги</a>
            <a href="#" className="item">Цены</a>
            <a href="#" className="item"> Контакты</a>
            <a href="#" className="item">Наши работы</a>
        </div>
            </div>
    )
}


