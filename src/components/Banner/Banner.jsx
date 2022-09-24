import "../Banner/Banner.css";

// import { Box } from "@chakra-ui/react";
import React from "react";

//** Images */
import imageCard from "./images/card.svg";
import inputImg from "./images/input.svg";
import servicesCard from "./images/services.svg";
import signIn from "./images/sign-in.svg";

export default function Banner() {
  return (
    <>
      <div className="Banner-container">
        <div className="Banner">
          <div className="Banner-left">
            <h2>
              Online ödəniş <span>etməyin ən asan yolu</span>
            </h2>
            <p>
              Repellat deserunt eos vero est necessitatibus quia. Repellendus
              voluptatem reprehenderit maiores et. Velit vero accusantium
              quaerat tempore animi porro.
            </p>

            <button>
              <img src={signIn} alt="sign-in" />
              İndi başla
            </button>
          </div>
          <div className="Banner-right">
            <div className="services-img">
              <img src={servicesCard} alt="Services image" />
            </div>
            <div className="card-img">
              <img src={imageCard} alt="Card image" />
            </div>
            <div className="input-img">
              {" "}
              <img src={inputImg} alt="Search" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
