import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const DEV = 'http://localhost:8080/api/';
const HOST = 'https://j10a702.p.ssafy.io/api/';

// const [refrigeratorId, setRefrigeratorId] = useState();

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});
// 요청 인터셉터
api.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('accessToken')) {
      config.headers.Authorization =
        'Bearer ' + localStorage.getItem('accessToken');
    }
    // 요청 성공 직전 호출됩니다.
    // console.log(config);
    return config;
  }
  // function (error) {
  //   // 요청 에러 직전 호출됩니다.
  //   // console.log(error);
  //   if (error.response.status === 404 || error.response.status === 429) {
  //     window.location.href = "/error";
  //   }
  //   return Promise.reject(error);
  // }
);

export const loginUser = async (userLoginRequest) => {
  try {
    const response = await api.post('/users/login', userLoginRequest);

    console.log(response);
    const nickname = response.data.data.nickname;
    const accessToken = response.data.data.accessToken;
    const refreshToken = response.data.data.refreshToken;
    const user = {
      nickname: nickname,
      accessToken: accessToken,
      refreshToken: refreshToken,
    }

    // const { nickname, accessToken, refreshToken } = response.data.data;
    // setUser({ nickname, accessToken, refreshToken });
    localStorage.setItem('loginUser', JSON.stringify(user));
    JSON.parse(localStorage.getItem('loginUser'));
    // updateLoginUser(nickname, accessToken, refreshToken);
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정

    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

export const signUpUser = async (signUpRequest) => {
  try {
    const response = await api.post('/users/register/profile', signUpRequest);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};

export const getRefrigerator = async () => {
  try {
    const response = await api.get('/refrigerator');

    console.log(response);
    return response.data;
  } catch (error) {
    console.error('냉장고 조회 실패:', error);
    throw error;
  }
};

export const getRefrigeratorIngred = async (refrigeratorId) => {
  try {
    const response = await api.get(`/refrigerator/${refrigeratorId}`);
    return response.data;
  } catch (error) {
    console.error('냉장고 물품 조회 실패:', error);
    throw error;
  }
};

export const postRefrigerator = async (postRequest) => {
  try {
    const response = await api.post('/refrigerator', postRequest);
    return response.data;
  } catch (error) {
    console.error('냉장고 등록 실패:', error);
    throw error;
  }
};

export const putRefrigerator = async (putRequest) => {
  try {
    const response = await api.put('/refrigerator', putRequest);
    return response.data;
  } catch (error) {
    console.error('냉장고 수정 실패:,', error);
    throw error;
  }
};

export const deleteRefrigerator = async (deleteRequest) => {
  try {
    const response = await api.delete('/refrigerator', deleteRequest);
    return response.data;
  } catch (error) {
    console.error('냉장고 삭제 실패:', error);
    throw error;
  }
};

export const getRefrigeratorDetail = async (refrigeratorId) => {
  try {
    const response = await api.get(`/refrigerator/${refrigeratorId}`);
    return response.data;
  } catch (error) {
    console.error('냉장고 품목 정보 얻어오기 실패:', error);
    throw error;
  }
};

export const deleteGrocery = async (deleteRequest) => {
  try {
    const response = await api.delete('/log', deleteRequest);
    return response.data;
  } catch (error) {
    console.error('식재료 삭제 실패', error);
    throw error;
  }
};

export const getGroceryDetail = async (groceryId) => {
  try {
    const response = await api.get(`/log/${groceryId}`);
    return response.data;
  } catch (error) {
    console.error('식재료 정보 얻어오기 실패:', error);
    throw error;
  }
};

export const addGrocery = async (addRequest) => {
  try {
    const response = await api.post(`/log`, addRequest);
    return response.data;
  } catch (error) {
    console.error('식재료 정보 추가하기 실패:', error);
    throw error;
  }
}

export const getAllGroceryInfo = async (pageInfo) => {
  try {
    const response = await api.get(`/ingredient/search`, pageInfo);
    return response.data;
  } catch (error) {
    console.error("전체 식재료 정보 불러오기 실패")
  }
}

export const getTypeGroceryInfo = async (keyword, pageInfo) => {
  try {
    const response = await api.get(`/ingredient/search/type/${keyword}`, pageInfo);
    return response.data;
  } catch (error) {
    console.error("전체 식재료 정보 불러오기 실패")
  }
}

export const getNameGroceryInfo = async (keyword, pageInfo) => {
  try {
    const response = await api.get(`/ingredient/search/name/${keyword}`, pageInfo);
    return response.data;
  } catch (error) {
    console.error("전체 식재료 정보 불러오기 실패")
  }
}




export default api;
