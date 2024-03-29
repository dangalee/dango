import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FridgeFrame from '../components/Fridge-Inside/FridgeFrame';
import TrashButton from '../components/Fridge-Inside/TrashButton';
import AddButton from '../components/Fridge-Inside/AddButton';
import DropDownComponent from '../components/Fridge-Inside/DropDown';
import SearchComponent from '../components/Fridge-Inside/Search';
import SearchButton from '../components/Fridge-Inside/SearchButton';
import { getRefrigeratorIngred } from '../api/Api';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginUserState } from '../recoil/atoms/userState';

function FridegeInside() {
  useEffect(() => {
    getRefrigerator();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const getRefrigeratorDetailInfo = async () => {

  const getRefrigerator = async () => {
    try {
      const response = await getRefrigeratorIngred(nickname);
      console.log('냉장고 조회 성공', response);
      console.log({ refreshToken });
    } catch (error) {
      console.log('냉장고 조회 실패', error);
      console.log({ refreshToken });

    }
  };

  return (
    <>
      <Header text={`${nickname}예은이의 냉장고`} />

      <div className='flex-col ml-[9.5vw]'>
        <div className="flex mb-[1vh] mt-[1vh]">
        <DropDownComponent/>
        <SearchComponent onSearch={handleSearch} searchTerm={searchTerm}/>
        <SearchButton searchTerm= {searchTerm}/>
        </div>

        <div className='mb-[2vh]'>
          <FridgeFrame buttonText='삭제' />
        </div>
        <div className='mb-[1vh] flex'>
          <AddButton />
          <div className='w-[2vw]'></div>
          <TrashButton />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FridegeInside;
