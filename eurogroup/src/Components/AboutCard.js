import React from 'react';
import chairmanImage from '../Asset/images/chairman.png'
import brandImage from '../Asset/images/CrownFarms2.png'
import brandImage1 from '../Asset/images/crownfarms1.png'
import brandImage2 from '../Asset/images/masala.png'
import brandImage3 from '../Asset/images/zoy.png'
import brandImage4 from '../Asset/images/al-rohim.png'
import '../App.css'
export const AboutCard = () => {
  return <div >
      <h3 className='heading' style={{textAlign:'center',padding:'10px 0px'}}>About Us</h3>
    <div className='about'>
      <div style={{width:'50%'}}>
      <img src={chairmanImage} style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',border:'1px solid green'}}/>
      </div>
    
    
    <div className='paragraph-about'>
         <p className='paragraph'>
         With an initial investment of £20, Euro Foods Group founder, Shelim Hussain MBE began his adventure into the frozen foods industry.

Established in 1991, the company began the journey by supplying the Indian restaurants and takeaways in Wales and the West Country. With hard work and determination the business then developed rapidly, and the supply chain became national.

The story has many successful chapters, Euro Foods started with frozen, fresh and ambient food distribution – as demand grew, Euro Foods progressed their services into manufacturing and established the following:
         </p>
         <ul className='paragraph'>
             <li >
             Finger food and snacks factory in Dhaka, Bangladesh,
             </li>
             <li >
             Bangladeshi fish processing in Sunamgonj, Bangladesh
             </li >
             <li >
             Shrimp processing in Khulna, Bangladesh
             </li>
             <li >
             Poultry processing plant in Cwmbran, South Wales (UK)
             </li>
             <li>
             Spice packaging plant in Cwmbran, South Wales (UK)
             </li>
         </ul>
       <p className='paragraph'>
       Euro Foods has become a leading international manufacturer and distributor of frozen and fresh foods, serving the restaurant, catering and specialist supermarket sectors.

Euro Foods have a total of 6 depots around the UK and now also export around the globe. The organisation now comprises the following companies:

EFG Wholesale: Euro Foods has a proud history of serving the specialist supermarket/shop sectors – our Wholesale division is focused on ensuring that our products are of the highest standard and our prices offer great value.

Masala Bazaar: This is a highly regarded, growing chain of UK retail outlets, specialising in offering Asian food products to members of the public looking for authentic ingredients in an inviting setting.

Kukd.com: An online takeaway ordering and table booking system, designed to give consumers an easy way to order takeaways or book a table at their favourite eateries in their localities.

Logistics & Technology

Unlike some other suppliers to restaurants and catering premises, we can offer you a bespoke delivery service to further enhance your customer service experience. Not only delivering all multi-temperature foodservice & catering supplies on the same order and vehicle, we also offer you a designated delivery day for your complete order of both food & non-food items, reducing the need for multiple suppliers on different days. With ongoing work to train and instruct all our crews to deliver your goods direct into your premises, we’re building on the level of customer service that was one of the foundations that built the business from the beginning and remains to this day.
Over the last 5 years, we have invested over £5million upgrading & developing our delivery fleet and in-cab technology, to meet both our customers’ and delivery drivers’ needs. 

Our fully temperature controlled fleet of over 50 commercials vehicles, ranging from 44 tonne articulated vehicles to sprinter type vans, are all fitted with full 360° CCTV camera systems & the latest telematics equipment. This now includes real time vehicle tracking & driver monitoring equipment supplied by TMS2.
This enables us to have real time visibility of our entire fleet nationwide, giving you the customer up to date information on the location of your delivery and any delays resulting from traffic etc. Secondly, this allows us to closely monitor our drivers’ behaviour and driving style, optimising our fuel efficiency & allowing us to reduce our carbon footprint year on year.
       </p>
       
     </div>
    </div>
    
   
     
    
<div style={{marginBottom:'2%'}}>
    <h3 className='heading'>OUR BRAND</h3>
    <div className='brand-cover'>
    <img src={brandImage}/>
    <img src={brandImage1}/>
    <img src={brandImage2} />
    <img src={brandImage3} />
    <img src={brandImage4} />
    </div>
    
</div>
  </div>;
};
