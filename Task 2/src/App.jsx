import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div className="flex mx-0 px-[24px]">
      <div className="w-[66%] flex flex-col mx-auto">
        <div className="flex flex-col mx-auto">Logo</div>
        <div className="flex flex-col">
          <p className="text-[32px] font-semibold mt-[14px] mb-[24px] text-center leading-[44px] tracking-[0.1px]">
            Hoạt động tiêu biểu từ cộng đồng giáo dục
          </p>
        </div>
        <div className="w-[100%]">
          <p className="text-center text-[20px] leading-[32px] tracking-[0.1px] font-normal">
            Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
            trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 ">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
