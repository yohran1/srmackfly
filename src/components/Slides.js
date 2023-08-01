import 'swiper/css'
import 'swiper/css/navigation'  // arrows de navegação
import 'swiper/css/pagination'  // bolinhas de paginação
import 'swiper/css/scrollbar'   // scroll
import bolo_1 from '../IMG/bolo-1.jpg'
import bolo_2 from '../IMG/bolo-2.jpg'
import bolo_3 from '../IMG/bolo-3.jpg'
import bolo_4 from '../IMG/bolo-4.jpg'
import bolo_5 from '../IMG/bolo-5.jpg'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
register()

// const data = [
//     { id: '1', image: {bolo_1} },
//     { id: '2', image: {bolo_2} },
//     { id: '3', image: {bolo_3} },
//     { id: '4', image: {bolo_4} },
//     { id: '5', image: {bolo_5} }
// ]

const Data = [bolo_1, bolo_2, bolo_3, bolo_4, bolo_5]

export default function Slides(props){
    return (
        <div className="slide">
                <p>MEU ACERVO DE BOLOS</p>
                <br></br>
                <Swiper
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    navigation
                    loop
                    
                >
                    {Data.map((item, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <img 
                                src={item}
                                alt="slide"
                                className="slide-item"
                             />
                        </SwiperSlide>
                        )})}
                </Swiper>
            </div>
    )
}