import React, { useState } from 'react';
import {getTypeGroceryInfo} from '../../api/Api'

function DropDownComponent() {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('필터');

    const optDropDown = async (option) => {
        console.log(`${option}`);
        setIsOpenDropDown(false);
        setSelectedOption(option);
        if (selectedOption === "과일류") {
          // try {
          //   const response = await getTypeGroceryInfo("과일");
          //   console.log("타입에 따른 검색 성공", response.data);
          // } catch (error) {
          //   console.log('조회 실패', error);
          // }
        }
        else if (selectedOption === "야채류"){
          // try {
          //   const response = await getTypeGroceryInfo("야채");
          //   console.log("타입에 따른 검색 성공", response.data);
          // } catch (error) {
          //   console.log('조회 실패', error);
          // }          
        }
    }

    return (
        <div className="flex-col">
        <button
          className="border-violet-200 border-4 border-solid rounded-lg mr-5 hover:bg-violet-200 h-[4vh] w-[10vw]"
          onClick={() => setIsOpenDropDown(!isOpenDropDown)}
        >
          {selectedOption}
        </button>
            {isOpenDropDown && (
        <div className="mr-5">
          <ul className="absolute w-[10vw] mt-1 border-gray-200 bg-violet-300 border-2 border-solid rounded-lg">
            <li className="h-10 hover:bg-slate-100 rounded-lg flex z-40">
              <button className="w-[10vw]" onClick={() => optDropDown('과일류')}>과일류</button>
            </li>
            <li className="h-10 hover:bg-slate-100 rounded-lg flex z-40">
              <button className="w-[10vw]" onClick={() => optDropDown('야채류')}>야채류</button>
            </li>
            </ul>
        </div>
      )}
      </div>
    );
}

export default DropDownComponent;