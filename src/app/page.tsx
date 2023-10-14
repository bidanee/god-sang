import Image from "next/image";
import StartBtn from "./components/home/StartBtn";
import Logo from "./icon.png";

export default function Home() {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="w-[40rem] h-[40rem] bg-white flex flex-col justify-center items-center rounded-3xl">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className="w-[10rem] rounded-full"
            priority
          />
          <div>
            {year}년 {month}월 {date}일 {week[day]}요일
          </div>
          <div>오늘의 날씨</div>
        </div>
        <StartBtn />
      </div>
    </main>
  );
}
