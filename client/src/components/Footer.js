import React from 'react';
import '../App.css'

const items = [
    {
        heading1: 'WHO WE ARE',
        miniheading1: 'ABOUT',
        para11: 'Mission',
        para12: 'Corporate strategy',
        para13: 'Leadership',
        para14: 'History',
        para15: 'Funding and donors',
     miniheading2: 'ACCOUNTABILITY',
        para21: 'Ethical culture',
        para22: 'Independent Revolution',
        para23: 'Internal investigations',
        para24: 'Performance',
        para25: 'Accountability'
    },
    {
        heading1: 'OUR GOAL',
        miniheading1: 'SAVING LIVES',
        para11: 'Disater risk education',
        para12: 'Food Assistance',
        para13: 'Emergency relief',
        para14: 'Humanitarian  services',
        para15: 'Suppy chain',
        miniheading2: 'CHANGING LIVES',
        para21: 'Assert creation',
        para22: 'Cash and market support',
        para23: 'Climate action',
        para24: 'Food systems',
        para25: 'Nutrition'
    },
    {
        heading1:'ABOUT HUNGER',
        para12:' Fighting famine',
        para13:'  Conflict and peace',
        para14:' A global food crisis',
        para15:'Conflict and peace',
        para11:'Ending hunger',
        // para16:'Fighting famine',

    },
    {
        heading1:'RESOURCES',
        para11:'New Releases',
        para12:'Publications',
        para13:'Videos',
        para14:'Stories',
        para15:'Images',

    },
    {
        heading:'EMERGENCIES',
        miniheading1:'AFGHANISTAN EMERGENCY',
        miniheading2:'SYRIA EMERGENCY',
        miniheading3:'ETHIOPIA EMERGENCY',
        miniheading4:'GLOBAL FOOD CRISIS',
        miniheading5:'HAITI EMERGENCY',
        miniheading6:'KENYA EMERGENCY',
        miniheading7:'MYANMAR EMERGENCY',
        miniheading8:'SAHEL EMERGENCY',
        miniheading9:'GLOBAL FOOD CRISIS',
        miniheading10:'HAITI EMERGENCY',
       

    }

]


function Box3() {
    const item3= items.filter((itemm, index) => index > 1 && index < 4).map((itemm, index) => {
        return (
            <div className='box' key={index}>
                <h3>{itemm.heading1}</h3>

                <p><a>{itemm.para11}</a></p>
                <p>{itemm.para12}</p>
                <p>{itemm.para13}</p>
                <p>{itemm.para14}</p>
                <p>{itemm.para15}</p> 
             </div>
        )

    })
    return (
        <div className='box'>{item3}
           <button><a className='box3-button' href="#">DONATE</a></button>
        </div>
    )

}
function Box4() {
    const item4 = items.filter((itemm, index) => index == 4).map((itemm, index) => {
        return (
            <div key = {index}> <a href="#"><h3>{itemm.heading}</h3></a>
                <p><a>{itemm.miniheading1}</a></p>
                <p><a>{itemm.miniheading2}</a></p>
                <p><a>{itemm.miniheading3}</a></p>
                <p><a>{itemm.miniheading4}</a></p>
                <p><a>{itemm.miniheading5}</a></p>
                <p><a>{itemm.miniheading6}</a></p>
                <p><a>{itemm.miniheading7}</a></p>
                <p><a>{itemm.miniheading8}</a></p>
                <p><a>{itemm.miniheading9}</a></p>
                <p><a>{itemm.miniheading10}</a></p>               
               </div>

        )
    })
    return (
        <>
            <div className='box' id="box4">{item4}</div>
        </>
    )
}

export default function Footer() {

    const itemscontent = items.filter((item, index) => index < 2).map((item, index) => {
        return (
            
                <div className='box' key={index}>
                    <a href="#"><h3>{item.heading1}</h3></a>
                    <h4>{item.miniheading1}   </h4>
                    <p><a href="#">{item.para11}</a></p>
                    <p><a href="#">{item.para12}</a></p>
                    <p><a href="#">{item.para13}</a></p>
                    <p><a href="#">{item.para14}</a></p>
                    <p><a href="#">{item.para15}</a></p>


                    <h4>{item.miniheading2}</h4>
                     <p><a href="#">{item.para21}</a></p>
                    <p><a href="#">{item.para22}</a></p>
                    <p><a href="#">{item.para23}</a></p>
                    <p><a href="#">{item.para24}</a></p>
                    <p><a href="#">{item.para25}</a></p>
                </div>

        
        )

    })

    return (


        <div className='container'>
          
                    {itemscontent}
            <div className='box4'><Box3 /></div>

            <div className='box4'><Box4 /></div>
        
        </div>


    )
}