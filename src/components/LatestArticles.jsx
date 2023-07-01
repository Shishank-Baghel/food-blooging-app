import React from "react";
import Cards from "./Card";
import './LatestArticles.css'
import img1 from "../assets/images/grilled-tomatoes-1.png";
import img2 from "../assets/images/grilled-tomatoes-2.png";
import img3 from "../assets/images/meal-prep-ideas-1.png";
// import img4 from "../assets/images/meal-prep-ideas-2.png";
// import img5 from "../assets/images/meal-prep-ideas-3.png";
// import img6 from "../assets/images/meal-prep-ideas-4.png";

const LatestArticles = ()=>{
    const cardsData = [
        {
          id: 1,
          img: img1,
          title: "Grilled Tomatoes at Home",
          desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          id: 2,
          img: img2,
          title: "Snacks for Travel",
          desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          id: 3,
          img: img3 ,
          title: "Post-workout Recipes",
          desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        }
        // {
        //   id: 4,
        //   img: { img4 },
        //   title: "How To Grill Corn",
        //   desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        // },
        // {
        //   id: 5,
        //   img: { img5 },
        //   title: "Crunchwrap Supreme",
        //   desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        // },
        // {
        //   id: 6,
        //   img: { img6 },
        //   title: "Broccoli Cheese Soup",
        //   desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        // },
      ];

    return(
        <>
        <div className="latest-articles">
                <div className="latest-article-title">
                  Latest Article
                </div>
                <div className="cards">
                  {cardsData.map((data) => {
                      return <Cards key={data.id} img={data.img} title={data.title} desc={data.desc}/>;
                  })}
                </div>
            </div>
        </>
        
    )
}

export default LatestArticles;