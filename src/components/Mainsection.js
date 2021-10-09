import React from 'react'
import '../css/Mainsection.css'
import girl from '../images/girl.png'
import myprofile from '../images/myprofile.png'
import enrolled from '../images/enrolled.png'
import wishlist from '../images/wishlist.png'
import review from '../images/review.png'
import purchase from '../images/purchase.png'
import settings from '../images/settings.png'
import logout from '../images/logout.png'
import { Table } from 'reactstrap';
export default function MainSection() {
    return (
        <div className='container'>
            <div className='head' > 
           <p> Home > My Profile</p>
            </div>

           
            <div className="main_block" >
                <div className="img_block">
                    <img src={girl} alt=""/>
                </div>
                <div className="text_content">
                    <h4 className="girl_text">Hello, Priya</h4>

                </div>
            </div>
           

           <div className="section">
           <div style={{height:'12rem', width:'20rem'}}>
       <Table borderless>
      
      <tbody>
        <tr>
            <img src={myprofile} alt="" />
          <td style={{margin:'0rem'}}>My Profile</td>
        </tr>
        <tr>
          <img src={enrolled} alt="" />
          <td>Enrolled course</td>
        </tr>
        <tr>
          <img src={wishlist} alt="" />
          <td>Wishlist</td>
        </tr>
        <tr>
          <img src={purchase} alt="" />
          <td>purchase History</td>
        </tr>
        <tr>
          <img src={settings} alt="" />
          <td>settings</td>
        </tr>
        <tr>
          <img src={logout} alt="" />
          <td>Larry</td>
        </tr>
        <tr>
          <img src={review} alt="" />
          <td>logout</td>
        </tr>
      </tbody>
    </Table>
       </div>

       <div className='review' style={{height:'34rem', width:'30rem'}}>
                <h6>Review</h6>
                <p>Sorry, but you are looking for something that isn't here.</p>
       </div>

           </div>
          

      
     
            
        </div>
    )
}
