import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const loginUser = JSON.parse(localStorage.getItem('loginUser'));
const { persistAtom } = recoilPersist();

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
    refrigeratorNickname: loginUser ? loginUser.refrigeratorNickname : '',
    effects_UNSTABLE: [persistAtom],
  },
});

export const foodItems = atom({
  key: 'foodItems',
  default: [],
});
