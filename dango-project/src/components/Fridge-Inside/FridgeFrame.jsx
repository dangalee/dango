// import React, { useEffect } from 'react';
// import FoodItem from './FoodItem';

// function FridgeFrame({ buttonText }) {
//   const foodItems = [];

//   for (let i = 0; i < 15; i++) {
//     foodItems.push(<FoodItem  nameText='딸기' buttonText={buttonText} />);
//   }
//   return (
//     <div className=' w-[80vw] h-[65vh] border-slate-500 border-4 rounded-xl flex flex-wrap overflow-y-scroll'>
//       {foodItems}
//     </div>
//   );
// }
// export default FridgeFrame;
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import FoodItem from './FoodItem';
import { foodItems } from '../../recoil/atoms/userState';

function FridgeFrame({ buttonText }) {
  // Get the value of foodItems atom
  const foodItemsValue = useRecoilState(foodItems);

  for (let i = 0; i < 15; i++) {
    foodItemsValue.push(<FoodItem nameText='딸기' buttonText={buttonText} />);
  }
  for (let i = 0; i < 15; i++) {
    foodItemsValue.push(
      <FoodItem nameText='아보카도' buttonText={buttonText} />
    );
  }

  // Use the foodItemsValue to render FoodItem components
  // const foodItemsComponents = foodItemsValue.map((food, index) => (
  //   <FoodItem key={index} nameText='딸기' buttonText={buttonText} />
  // ));

  return (
    <div className='w-[80vw] h-[65vh] border-slate-500 border-4 rounded-xl flex flex-wrap overflow-y-scroll'>
      {foodItemsValue}
    </div>
  );
}
export default FridgeFrame;
