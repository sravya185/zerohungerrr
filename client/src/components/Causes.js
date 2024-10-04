import React from 'react';
import { useState } from 'react';


const Causes = () => {
    const data = [
        {
            heading: "Causes",
            h1: "POVERTY",
            img1:"https://www.concernusa.org/wp-content/uploads/2021/11/concern-drc-manono-graduation-food-market-1180x885.jpg",
            description1: "Poverty and hunger exist in a vicious cycle. Families trapped in the cycle of poverty usually can’t afford nutritious food, leading to undernourishment. In turn, undernourishment makes it difficult for people to earn more money so that they can afford healthy food. Families living in poverty might also sell off their livestock or tools to supplement their income.",

            h2: "FOOD SHORTAGES",
            img2:"https://www.concernusa.org/wp-content/uploads/2013/10/concer-hunger-header3-460x460.jpg",
            description2: "Across regions like the Sahel and the Horn of Africa, farming families experience periods before harvests known as “hunger seasons.” ",

            h3: " WAR & CONFLICT",
            img3:"https://www.concernusa.org/wp-content/uploads/2021/10/concern-drc-nutrition-agriculture-assistance-usaid-460x460.jpg",
            description3: "Conflict and hunger form another vicious cycle. In South Sudan, civil war has led to mass displacement and abandoned fields. The result is crop failure which, combined with a soaring inflation rate that makes imported food unaffordable, has left 7.2 million people in a food crisis.",

            h4: "CLIMATE CHANGE",
            img4:"https://www.concernusa.org/wp-content/uploads/2018/02/concern-niger-crops-1180x885.jpg",
            description4: "Countries like Zambia enjoy relative peace and political stability. However, they are also plagued by hunger due to climate change. Too little — or too much — rainfall can destroy harvests or reduce the amount of animal pasture available. ",
        },{
            heading: "Solution",
            h1:"BREAK THE CYCLE OF CONFLICT AND HUNGER",
            img1:"https://www.wfpusa.org/wp-content/uploads/2022/11/WF1690506__I2A8321.jpg",
            description1:"Conflict and hunger create a vicious cycle. When war erupts, instability forces people to find illicit and sometimes violent means of acquiring their necessities. In this unstable period where access to food is fought over, the risk of social unrest heightens.",

            h2:"INCREASE SUSTAINABILITY AND BUILD RESILIENCE TO CLIMATE CHANGE",
            img2:"https://www.wfpusa.org/wp-content/uploads/2023/02/AP_23037521420199-scaled-e1675710534325-800x534.jpg",
            description2:"Climate extremes are one of the main drivers of severe  hunger. We have entered a ‘new normal’ where consecutive and extreme weather events – like droughts, flooding, hurricanes and cyclones – decimate farming and drive displacement.",

            h3:"ADDRESS POVERTY & INEQUALITY THROUGH SOCIAL SAFETY NETS",
            img3:"https://www.wfpusa.org/wp-content/uploads/2022/11/WF1692199_IMG_1756.jpg",
            description3:"Poverty and inequality are the root causes of global hunger. Imagine being a mother who must forgo her daily meals to feed her children, or a farmer who must sell food rations in exchange for farming equipment.",

            h4:"HELP RURAL FARMERS CONNECT TO MARKETS",
            img4:"https://www.wfpusa.org/wp-content/uploads/2022/11/WF1677636_20220908_GTM_Giulio-dAdamo_219.jpg",
            description4:"One of the cruelest ironies of hunger is its disproportionate impact on small-scale farmers—the very people who grow food for a living. Small-scale farmers make up the majority of people living in poverty. ",
        },
    ];
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(!show);
    }

    return (
        <div className="causes-solution">
            <div onClick={()=>handleOpen()} className="box-title">
                <h2>SAY NO TO HUNGER : CAUSES AND SOLUTIONS</h2>&nbsp;&nbsp;&nbsp;
            <div className="sign">{show ? 'x' : '+'}</div></div>
            {
                data.map((item, index) => {
                    return (
                        <div className="box-causes" key={index}>
                            <div className="box-title" style={{backgroundColor:"#f8f8f8"}}>
                                <div><h2>{item.heading}</h2></div>
                                {/* <div className="sign">{show ? 'X' : '+'}</div> */}
                            </div>
                            {show && (
                                <div className="box-body">
                                        <div className="box-details">
                                            <h4>{item.h1}</h4><br></br>
                                            <div className='details-section'>
                                            <div><img src={item.img1} alt="alternate" /></div>
                                                <p>{item.description1}</p></div>
                                        </div>
                                        <hr />
                                        <div className="box-details">
                                            <h4>{item.h2}</h4><br></br>
                                            <div className='details-section'>
                                                <div><img src={item.img2} alt="alternate" /></div>
                                                <p>{item.description2}</p></div>
                                        </div>
                                        <hr />
                                        <div className="box-details">
                                            <h4>{item.h3}</h4><br></br>
                                            <div className='details-section'>
                                            <div><img src={item.img3} alt="alternate" /></div>
                                                <p>{item.description3}</p></div>
                                        </div>
                                        <hr />
                                        <div className="box-details">
                                            <h4>{item.h4}</h4><br></br>
                                            <div className='details-section'>
                                            <div><img src={item.img4} alt="alternate" /></div>
                                                <p>{item.description4}</p></div>
                                        </div>
                                </div>                                            
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Causes;