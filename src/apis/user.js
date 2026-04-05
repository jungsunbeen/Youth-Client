import { createMockLoginResponse, seedDemoSession } from "./mockData";

export const signUp = async (password, username, hash, first_name, college) => {
  seedDemoSession();
  return { data: { message: "회원가입 성공" } };
};

export const login = async (username, password) => {
  seedDemoSession();
  return createMockLoginResponse(username || '선빈');
};

export const isUsernameDuplicate = async (username) => {
  return true;
};

export const SendAuthCodeToEmail = async (answer) => {
  return { message: "인증코드 전송 완료" };
};

export const postAuthCode = async (answer) => {
  return { verified: true };
};
