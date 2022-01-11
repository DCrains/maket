import React from 'react'

import '../Body.css';

const Body = () => {
    const [authed, setAuthed] = React.useState(false)
    return (
    <div className="body">
        <div className="main">
            <div className="first">
                Замена и ремонт глушителей <br>
                </br>в Санкт-Петербурге
            </div>
            <div className="vertical">
                GLUSHAC
            </div>
            <div className="main2">
                <button className="button">
                    Записаться
                </button>
                <div className="second">
                    Скидка при повторном посещении<br>
                    </br>10% на работы и запчасти
                </div>

            </div>
            <div className="spisok">
                <ul>
                    <li>Гарантия от 1 года до 3 лет на все виды работ</li>
                    <li>Бесплатная диагностика</li>
                    <li>Современное оборудование</li>
                </ul>
            </div>

        </div>
        <button onClick={authed ? ()=> setAuthed(false) : ()=> setAuthed(true) } >{authed ? 'log out' : 'log in'}</button>
    </div>
)
}

export default Body