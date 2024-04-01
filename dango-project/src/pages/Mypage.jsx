import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import { useRecoilValue } from 'recoil';
import { loginUserState } from '../recoil/atoms/userState';

function Mypage() {
  const { nickname, refrigeratorNickname } = useRecoilValue(loginUserState);

  return (
    <>
      <Header text={`${nickname}의 냉장고`} />
      <div className='flex flex-col justify-center items-center h-[70vh]'>
        <InfoBox
          boxName='이름'
          content={nickname}
          modifybool={false}
          deletebool={false}
        />
        <InfoBox
          boxName='이메일 주소'
          content='dango@ssafy.com'
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
