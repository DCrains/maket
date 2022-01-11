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
            <a  className="item">Наши услуги</a>
            <a  className="item">Цены</a>
            <a  className="item"> Контакты</a>
            <a  className="item">Наши работы</a>
        </div>
            </div>
    )
}


