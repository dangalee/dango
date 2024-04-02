import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import { loginUserState } from '../recoil/atoms/userState';
import { useRecoilValue } from 'recoil';

function Mypage() {
  const { refrigeratorNickname, nickname, email } =
    useRecoilValue(loginUserState);
  return (
    <>
      <Header text='예은이의 냉장고' />
      <div className='flex flex-col justify-center items-center h-[70vh]'>
        <InfoBox
          boxName='이름'
          content={nickname}
          modifybool={false}
          deletebool={false}
        />
        <InfoBox
          boxName='이메일 주소'
          content={email}
          modifybool={false}
          deletebool={false}
        />
        <InfoBox
          boxName='냉장고 정보'
          content={refrigeratorNickname}
          modifybool={true}
          deletebool={true}
        />
      </div>
      <Footer />
    </>
  );
}

export default Mypage;
