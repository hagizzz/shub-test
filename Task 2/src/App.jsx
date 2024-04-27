import "./App.css";
import Carousel from "./components/Carousel";
import Slider from "react-slick";
import networkingImage from "./assets/networking.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="flex mx-0 px-[24px] mt-16">
      <div className="w-[75vw] flex flex-col mx-auto">
        <img src={networkingImage} className="w-16 h-16 m-auto" />
        <div className="flex flex-col">
          <p className="text-[32px] font-semibold mt-[14px] mb-[24px] text-center leading-[44px] tracking-[0.1px]">
            Hoạt động tiêu biểu từ cộng đồng giáo dục
          </p>
        </div>
        <div className="w-[100%]">
          <p className="text-center text-[20px] leading-[32px] tracking-[0.1px] font-normal w-[35em] m-auto mb-5">
            Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
            trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
