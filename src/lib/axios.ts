import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`,
});
