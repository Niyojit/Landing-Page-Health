import React from 'react';
import "./profile.css";
import {MoreVert} from '@mui/icons-material';

export default function Profile() {
  return (
    <div className="Profile">
      <div className="container">
        <div className="profileTop">
            <img src="/assests/Profile.jpg" alt="" className="profilepic"/>
            <div className="profileDetails">
                <span className="name">Dr.Darlene Robertson</span>
                <span className="Designation">Nutritionist</span>
            </div>
        </div>
        <div className="Profilecontent">
          <span className="Profilecontentdetails">lorem isps dolor sit ament sonndere </span>
           <MoreVert className="ProfileLogo"/>
        </div>
      </div>
        <div className="continer2">
             <div className="continerLine"></div>
             <div className="containerTable">
              <div className="containerTableHeading">
              <span className="left">Rx</span>
              <span className="center">Duration</span>
              <span className="right">Duration</span>
              </div>
              <div className="TableContent">
                <ul className="TableContent1">
                  <div className="rows">
                  <li className="rowData">1.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber">100g</span>
                  </div>
                  <div className="rows">
                  <li className="rowData">2.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber">100g</span>
                  </div>
                  <div className="rows">
                  <li className="rowData">3.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber">100g</span>
                  </div>
                  <div className="rows">
                  <li className="rowData">4.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber">100g</span>
                  </div>
                </ul>
                <ul className="TableContent2">
                  <div className="rows2">
                  <li className="rowData2">1.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber2">100g</span>
                  </div>
                  <div className="rows2">
                  <li className="rowData2">2.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber2">100g</span>
                  </div>
                  <div className="rows2">
                  <li className="rowData2">3.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber2">100g</span>
                  </div>
                  <div className="rows2">
                  <li className="rowData2">4.lorem isosd pisdjf gard hunfd ghrt sadij</li><span className="rowNumber2">100g</span>
                  </div>
                </ul>
                
              </div>
             </div>
             <div className="Advice">
              <span className="AdviceHeading"> Advice</span>
              <span className="Advicecontent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt voluptatem possimus odit? Doloribus dolorem enim voluptatem totam, quas iusto distinctio officia quia unde ex rerum quos hic quidem perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt voluptatem possimus odit? Doloribus dolorem enim voluptatem totam, quas iusto distinctio officia quia unde ex rerum quos hic quidem perspiciatis.</span>
             </div>
        </div>
    </div>
  )
}
