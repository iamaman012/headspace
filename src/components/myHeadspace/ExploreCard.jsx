import React from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function ExploreCard() {
    const location = useLocation();
    const lastPart = location.pathname.split("/").pop();
    const meditateData = useSelector(state=>state.meditate.cards)
    // console.log(meditateData)
    const navigate = useNavigate();
    

  return (
    <div className="explore-cont">
      <p className="explore-txt">Explore {lastPart==="meditate"?"Meditation":"Focus"}</p>
      <div className="explore-card-tot-cont mt-3">
        <div className="explore-card-cont space-y-6">
          {
            meditateData.map((data,index)=>(
              
              <div className="flex justify-between bg-[#F9F4F2] py-2 pl-4 items-center rounded-xl max-sm:justify-center max-sm:items-center" key={index}
              onClick={()=>navigate(`/cards/meditate/music/${data.id}`)}>
                <div>
                  <h2 className="text-xl font-medium mb-1">{data.heading}</h2>
                  <p className="font-light">{data.subheading}</p>
                </div>
                <div>
                  <img src={data.img} className="w-28"/>
                </div>

              </div>
              
            ))
          }

        </div>

      </div>
    </div>
  );
}
