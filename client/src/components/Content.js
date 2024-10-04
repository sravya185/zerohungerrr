import React from 'react';
import '../App.css'


const Content = () => {
    const data=[{
        p1:"Ending world hunger is one of the greatest challenges of our times. Across the globe, ",
        b1:"up to 828 million people do not have enough food and 49 million people are facing emergency levels of hunger. ",
        p2:" Indeed, parts of  Yemen, South Sudan, Ethiopia and Nigeria may be close to or are already in the grip of famine. ",
        b2:"",
        p3:"",
        b3:"",
        p4:"",

    },{
        p1:"The consequence of diets poor in vitamins, minerals and other nutrients are affecting the health and life prospects of millions more, and casting a shadow over the future of communities and entire countries. ",
        b1:"",
        p2:"",
        b2:"",
        p3:"",
        b3:"",
        p4:"",
    },
    {
        p1:"The consequence of diets poor in vitamins, minerals and other nutrients are affecting the health and life prospects of millions more, and casting a shadow over the future of communities and entire countries. ",
        b1:"zero hunger, ",
        p2:"as set out in the 2030 Agenda for Sustainable Development and specifically in ",
        b2:"Sustainable Development Goal 2, ",
        p3:"remains hugely challenging due to a ",
        b3:"toxic cocktail of conflict, climate change, disasters and structural poverty and inequality. Over the past two years, the socioeconomic consequences of the COVID-19 pandemic ",
        p4:"have further exacerbated global hunger by pushing millions of vulnerable people into greater food insecurity and driving up the costs of reaching people in need. ",
    }]



    return (
        <div className='content'>
            {
               data.map((item,index)=>{
                    return(
                        <div className='diff-para' key={index}>
                            <div><p>{item.p1}<strong>{item.b1}</strong>{item.p2}<strong>{item.b2}</strong>{item.p3}<strong>{item.b3}</strong>{item.p4}</p></div>
                        </div>
                    )
               }) 
            }
        </div>
    );
};

export default Content;