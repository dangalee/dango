import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import FridgeIcon from '../assets/imgs/fridgeIcon.svg';
import '../styles/Footer.css';
import { BsPerson, BsFillPersonFill } from 'react-icons/bs';
import { IoFileTrayStackedOutline as TrayEmpty } from 'react-icons/io5';
import { IoFileTrayStacked as TrayFilled } from 'react-icons/io5';
import { isModalOpenState } from '../recoil/atoms/atom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartIcon, setCartIcon] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleCartIcon = () => {
    setCartIcon(!cartIcon);
  };
  const goToInside = () => {
    navigate('/fridge-inside');
  };

  const goToExterior = () => {
    navigate('/fridge-exterior');
  };

  const goToMypage = () => {
    navigate('/mypage');
  };

  return (
    <>
      <footer className='fixed bottom-0 left-0 right-0 h-24 overflow-hidden border-t-2 border-solid pt-3'>
        <div>
          <div className='flex flex-col items-center'>
            <button onClick={goToInside} style={{ marginTop: '5px' }}>
              {location.pathname === '/fridge-inside' ? (
                <TrayFilled size='35' />
              ) : (
                <TrayEmpty size='35' />
              )}
            </button>
          </div>

          <div className='font-aggroS'>신선칸</div>
        </div>
        <div className='flex flex-col items-center -z-10 relative'>
          <div onClick={goToExterior}>
            <img
              src={FridgeIcon}
              style={{
                marginTop: '-5px',
                opacity: isModalOpen ? 0.5 : 1,
              }}
            />
            <div
              className='font-aggroS'
              style={{ marginTop: '-5px', opacity: isModalOpen ? 0.5 : 1 }}
            >
              {' '}
              홈
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <button onClick={goToMypage}>
            {location.pathname === '/mypage' ? (
              <BsFillPersonFill size='40' style={{ marginTop: '2px' }} />
            ) : (
              <BsPerson size='40' style={{ marginTop: '2px' }} />
            )}
          </button>
          <div className='font-aggroS' style={{ marginTop: '-2px' }}>
            마이페이지
          </div>
        </div>
      </footer>
    </>
  );
}
