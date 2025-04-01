import axios from "axios";
import { REACT_APP_API_URL, REACT_APP_BASE_URL } from "../../env";

// 인스턴스
export const instance = axios.create({
  //배포 환경
  //baseURL: REACT_APP_API_URL,

  //로컬 환경

  baseURL: REACT_APP_BASE_URL

});

// 에러 처리
const handleError = (error) => {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log("request failed");
  }
};

// 안전 검사
export const safeExecute = (func) => {
  try {
    return func();
  } catch (error) {
    handleError(error);
  }
};
