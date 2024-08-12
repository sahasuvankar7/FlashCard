// "use client";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [cards, setCards] = useState([]);
//   useEffect(() => {
//     getAllCards();
//   }, []);

//   async function getAllCards() {
//     const res = await fetch("/api/getAllCards");
//     const card = await res.json();
//     if(!res.ok){
//         throw new Error("couldn't get card");
//     }
//     console.log(card)
//   }
//   return (
//     <div className="flex justify-start items-start w-full ">
//       <div className="h-screen grid grid-cols-3 grid-rows-2 p-8 gap-4">
//         <div className="rounded-md px-5 py-4 bg-pink-200">
//           <div>
//             <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</h1>
//             <div>
//               <p>1.javascript</p>
//               <p>2.React</p>
//               <p>3.Python</p>
//               <p>4.Java</p>
//             </div>
//           </div>
//           <div className="mt-10 flex justify-between ">
//             <button className="rounded-lg border-[1px] border-gray-950 bg-gray-950 text-white px-4 py-2 font-semibold">
//               Update
//             </button>
//             <button className="rounded-lg border-[1px] border-gray-950 bg-gray-950 text-white px-4 py-2 font-semibold">
//               Delete
//             </button>
//           </div>
//         </div>
//         {/* <div className="rounded-md px-6 py-20 bg-pink-200">card2</div>
//     <div className="rounded-md px-6 py-20 bg-pink-200">card3</div> */}
//       </div>
//     </div>
//   );
// };

// export default page;

import React from 'react'

const page = () => {
  return (
    <div>
      admin
    </div>
  )
}

export default page
