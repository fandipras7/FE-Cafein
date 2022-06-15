import React from 'react'
import style from './card.module.css'
import Levi from '../../../assets/img/levi2.jpg'

export default function Card({
    image,
    Key,
}) {
    return (
        <>
            <div className="col-sm-3 mb-4">
                <div className={[["card"], style["cards"]].join(" ")} key={Key}>
                    <div className={style["card-body"]} >
                        <div className={style["img-div"]}>
                            <img className={style['imgproduct']} src={Levi} alt="jas" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// {style['imgproduct']}