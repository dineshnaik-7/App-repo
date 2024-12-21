import React from "react";
import NavBar from "./NavBar";

import '../mycss/my.css'

export default function Photos() {
  const places = [
    {
      name: "Xuv 700",
phone:"984509845",
      description:
        "2000/day T&C apply",
      url: "https://meetassociates.com/uploads/models/model1634122712xuv700redrage.png",
    },

    {
      name: "Mahindra Thar",
      
      description:
        "1900/day",
      url: "https://pnghq.com/wp-content/uploads/2023/02/mahindra-thar-png-1411.png",
    },
    {
      name: "Ambassador ",
      
      description:
        "3000/day",
      url: "https://th.bing.com/th/id/OIP.CYJ1s6RGuGhQaO1dyiH5uwAAAA?rs=1&pid=ImgDetMain",
    },
    {
      name: "Suziki Swift",
      
      description:
        "1500/day",
      url: "https://imgs.search.brave.com/PrslBYeIKo7tMtehnLktCCrCA_YDSy2ELizmRPKh6v0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXp1/a2lsYXN0b3JyZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL3N3aWZ0/LWJvb3N0ZXJqZXQt/cm9qby12YW5hZGlv/LnBuZw",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4 st-bg">
        {places.map((place) => (
          <div className="col">
          <div className="card">
            <img src={place.url} className="card-img-top" alt="..." />
            <div><button>Hello</button></div>
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.description}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}