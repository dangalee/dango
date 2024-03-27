import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FridgeFrame from '../components/Fridge-Inside/FridgeFrame';
import TrashButton from '../components/Fridge-Inside/TrashButton';
import DropDownComponent from '../components/Fridge-Inside/DropDown'
import SearchComponent from '../components/Fridge-Inside/Search'
import SearchButton from '../components/Fridge-Inside/SearchButton'
import { getRefrigerator } from '../api/Api'

import { useState, useEffect } from 'react';

function FridegeInside() {
  useEffect(() => {
    getRefrigeratorInfo();
  }, []);

  const getRefrigeratorInfo = async () => {

    try {
      const response = await getRefrigerator();
      console.log('냉장고 조회 성공', response)
      
    } catch (error) {
      console.log('냉장고 조회 실패', error);

    }
  }

  return (
    <>
      <Header text={'예은이의 냉장고'} />

      <div className='flex-col ml-[9.5vw]'>
        <div className="flex mb-[1vh] mt-[1vh]">
        <DropDownComponent/>
        <SearchComponent/>
        <SearchButton/>
        </div>
        <div className="mb-[2vh]">
          <FridgeFrame/>
          
        </div>
        <div className="mb-[1vh]">
          <TrashButton/>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FridegeInside;