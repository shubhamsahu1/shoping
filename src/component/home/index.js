import React from 'react'
import Offer from './offer'
import Card from './card'
const cardData=[{
      url:"./asset/fruits.png",
      heading:"Fruits & Vegetable", 
      info:"A varity of fresh fruits and vegitable",
      btnLable:"Explore fruit-and-veg",
      rowRev:false
}]
export default () => (
  <div>
    <Offer/>
    {cardData.map((card)=>(
       <Card 
       url={card.url}
       heading={card.heading}
       info={card.info}
       btnLable={card.btnLable}
       rowRev={card.rowRev}
       />
    ))}
   
  </div>
)