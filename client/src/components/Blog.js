import React from 'react';
import '../App.css';

const Blog = () => {

    const images=[
        {
            heading:'Fighting Famine',
            img:'https://www.wfp.org/sites/default/files/images/famine-child-having-arm-measured-splash_0.jpg',
            content:'The factors behind the risk of famine looming over millions of people, and the steps WFP is taking to address it',
            button:'Read More',
            boxcolor:'#fff',
            buttoncolor:'#007dbc',
            linkcolor:'#fff'
        },{
            heading:'Sustainable Development Goals',
            img:"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/6997b370405597.5f29d1967ff48.jpg",
            content:'How our work contributes to the SDGs, in particular in achieving zero hunger and harnessing the global partnerships that can help achieve',
            button:'Read More',
            buttoncolor:'#fff',
            boxcolor:'#007dbc',
            linkcolor:'#000'
        },]


    return (
        <div className='blog' >
        <h2 style={{color:'#007dbc'}} id="goal">GOALS</h2>
        {
        images.map((imgg,index)=>{
            return(
                <div className='images' key = {index}>
                    <img src={imgg.img} alt="alternate" />
                    <div className='content1' style={{ backgroundColor: imgg.boxcolor }}><br></br>
                        <h4>{imgg.heading}</h4><br></br>
                        <p>{imgg.content}</p><br></br>
                        <button className='button' style={{ backgroundColor: imgg.buttoncolor, color: 'black' }}>
                            <a href="#" style={{ color: imgg.linkcolor }}>{imgg.button}</a>
                        </button>
                    </div>
                </div>
            )
        })}
        </div>
    );
};

export default Blog;