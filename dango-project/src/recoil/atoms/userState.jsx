import { atom } from 'recoil';
const loginUser = JSON.parse(localStorage.getItem('loginUser'));

export const userState = atom({
  key: 'userState',
  default: [],
});

export const loginUserState = atom({
  key: 'loginUserState',
  default: {
    nickname: loginUser ? loginUser.nickname : '', //닉네임
    accessToken: loginUser ? loginUser.accessToken : '', // accessToken
    refreshToken: loginUser ? loginUser.refreshToken : '', //refreshToken
  },
});
