import { useState } from "react";
import iconMusic from "./icon-music.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[327px] h-[567px] sm:w-[450px] sm:h-[697px] bg-white flex flex-col text-center rounded-[20px]">
      <div className="bg-hero-illustration bg-cover w-full h-[160px] sm:h-[220px] rounded-t-[20px]"></div>
      <div className="flex flex-col sm:p-12">
        <div className="m-8 mb-0 sm:m-0">
          <h1 className="font-redhatdisplay font-black text-header-blue text-[22px] sm:text-[28px] leading-[29px] sm:leading-[37px]">
            Order Summary
          </h1>
          <p className="font-redhatdisplay font-medium text-subtext-blue text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px] mt-4 sm:pl-2 sm:pr-2">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="relative flex items-center bg-lightgray m-6 p-4 sm:p-6 rounded-[11px] sm:m-0 sm:mt-5 ">
          <img src={iconMusic} alt="icon music" />
          <div className="ml-5 flex flex-col gap-[6px]">
            <h2 className="font-redhatdisplay font-black text-header-blue text-[14px] sm:text-[16px] leading-[19px] sm:leading-[21px]">
              Annual Plan
            </h2>
            <p className="font-redhatdisplay font-medium text-subtext-blue text-[14px] sm:text-[16px] leading-[19px] sm:leading-[21px]">
              $59.99/year
            </p>
          </div>
          <a
            href="#"
            className="absolute font-redhatdisplay font-bold text-default-blue hover:text-hover text-[13px] sm:text-[14px] leading-[17px] sm:leading-[19px] underline hover:no-underline right-0 mr-4"
          >
            Change
          </a>
        </div>
        <button className="h-[50px] bg-default-blue hover:bg-hover rounded-[11px] font-redhatdisplay font-black text-white text-[15px] leading-[20px] shadow-button-shadow m-6 mt-0 sm:m-0 sm:mt-8 sm:mb-8">
          Proceed to Payment
        </button>
        <button className="font-redhatdisplay font-black text-subtext-blue hover:text-hover-secondary text-[15px] leading-[20px]">
          Cancel Order
        </button>
      </div>
    </main>
  );
}

export default App;
