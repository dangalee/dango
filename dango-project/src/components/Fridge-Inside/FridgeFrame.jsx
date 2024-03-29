import React, { useEffect } from 'react';
import FoodItem from './FoodItem';

<<<<<<< HEAD
function FridgeFrame() {
 

  return (
    <div className=' w-[80vw] h-[65vh] border-slate-500 border-4 rounded-xl'>
      <FoodItem nameText='아보카도' />
=======
function FridgeFrame({buttonText}) {

    const foodItems = [];

    for (let i = 0; i < 15; i++) {
        foodItems.push(<FoodItem nameText="아보카도" buttonText={buttonText} />);

    }
    return (
    <div className=' w-[80vw] h-[65vh] border-slate-500 border-4 rounded-xl flex flex-wrap overflow-y-scroll'>
        {foodItems}        
>>>>>>> cef5d6ab1445601f6e8f605f624883d30012bf71
    </div>
  );
}
export default FridgeFrame;
