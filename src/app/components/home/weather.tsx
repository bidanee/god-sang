"use client";
import { weatherAPI } from "@/lib/axios";

interface ItemType {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export const getWeatherData = async () => {
  const today = new Date();
  const date = () => {
    if (today.getHours() === 0 || 1) {
      return `${today.getFullYear()}${today.getMonth() + 1}${
        today.getDate() - 1
      }`;
    } else {
      return `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
    }
  };
  const nowTime = today.getHours();
  const time = () => {
    switch (nowTime) {
      case 2:
      case 3:
      case 4:
        return "0200";
      case 5:
      case 6:
      case 7:
        return "0500";
      case 8:
      case 9:
      case 10:
        return "0800";
      case 11:
      case 12:
      case 13:
        return "1100";
      case 14:
      case 15:
      case 16:
        return "1400";
      case 17:
      case 18:
      case 19:
        return "1700";
      case 20:
      case 21:
      case 22:
        return "2000";
      case 23:
      case 0:
      case 1:
        return "2300";
    }
  };
  const getData = await weatherAPI({
    params: {
      serviceKey: process.env.NEXT_PUBLIC_API_KEY,
      pageNo: 1,
      numOfRows: 35,
      base_date: date(),
      base_time: time(),
      nx: "55",
      ny: "127",
      dataType: "JSON",
    },
  }).then((res) => res.data.response.body.items.item);
  const vvv = getData.filter((x: ItemType) => {
    if (x.category === "VVV") {
      return x.fcstValue;
    }
  });
  console.log(vvv);
};

/* 
단기예보
POP
강수확률
%
8

PTY
강수형태
코드값
4

PCP
1시간 강수량
범주 (1 mm)
8

REH
습도
%
8

SNO
1시간 신적설
범주(1 cm)
8

SKY
하늘상태
코드값
4

TMP
1시간 기온
℃
10

TMN
일 최저기온
℃
10

TMX
일 최고기온
℃
10

UUU
풍속(동서성분)
m/s
12

VVV
풍속(남북성분)
m/s
12

WAV
파고
M
8

VEC
풍향
deg
10
*/
