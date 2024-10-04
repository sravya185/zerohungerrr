import React, { useEffect,useState } from 'react';
import axios from 'axios'
const SuccessStories = () => {
    // const stories=[
    //     {
    //         title:"Maria’s Story",
    //         description:"Maria lives on a fixed income and struggles to pay the rent on her small apartment. She knew she had to stop eating the processed foods that were making her condition worse and eat more healthily, but she didn’t know how she could afford to.",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/maria-150x150.jpeg",
    //     },{
    //         title:"Jamie’s Story",
    //         description:"“I was so weak, and so hungry that I was willing to do anything for a hot meal and a warm bed. I came to a realization. I knew I was going to die, sick and alone unless I got some help.”",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/jamie-2.jpg",
    //     },{
    //         title:"Carole’s Story",
    //         description:"Carole had already cut out her phone, cable television and all other luxuries in order to reduce her spending. “It is hard to ask for help, but I must do what I can to keep food on the table for me and my daughter.”",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/Carole-150x150.jpg",
    //     },{
    //         title:"Crosby’s Story",
    //         description:"Crosby liked his independence, but he recognized that he needed help. “I’m thankful for first chances and second chances, and for beautiful people. Someone helped me, so now I help others.”",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/Crosby-150x150.jpg",
    //     },{
    //         title:"Maya’s Story",
    //         description:"Sometimes Maya skipped meals so that there would be enough food for her daughters and enough money to pay the rent. Eventually, even that was not enough. Faced with possible eviction, she asked everyone she knew where she could get some help.",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/tatiana-1.jpeg",
    //     },{
    //         title:"Jacob’s Story",
    //         description:"The biggest things Jacob needed during his time without a home were food and shelter. “Food first. You can’t move an inch if you don’t have any food in you. I’m telling you, when you’re out there, you’re starving. If you’re not fed, it’s impossible.“",
    //         link:"https://www.wsfb.org/wp-content/uploads/2020/06/janelle-2-150x150.jpg",
    //     },
    // ]

    const [stories,setStories] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3453/story/getStories');
            setStories(response.data.success_stories);
            // console.log(response.data.success_stories)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    

    return (
        <>
        <div className="image-success">
            <h2>Stories of Success</h2>
        </div>
        <div className='success'>
            <h2>These are the stories of people who escaped dire circumstances and were given the opportunity to thrive.</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By reaching out for help, the thousands of brave people our member agencies serve undergo incredible transformations. They are able to escape homelessness and hunger, many while managing chronic or diet-related health conditions. Often, they achieve independent success. All along the way, the power of food is clear: to sustain, support, and nourish them like nothing else can.</p>
            {stories.map((item,index)=>{
                    return(
                        <div className="blog-success" key = {index}>
                            <div className="blog-box-success">
                                <div className="blog-img-success">
                                    <img src={item.image} alt="alternate" />
                                </div>
                                <div className="blog-details-success">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    {/* <a href={item.url}>Continue Reading</a> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
        </>
    );
};

export default SuccessStories;