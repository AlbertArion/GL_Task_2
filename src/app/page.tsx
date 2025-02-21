/*
 * @Author: Albert
 * @Date: 2025-02-20 12:35:42
 * @LastEditors: Elaine
 * @LastEditTime: 2025-02-21 18:48:23
 * @FilePath: /GL_Task_2/src/app/page.tsx
 * @Description: 
 * 
 */
import type { NextPage } from 'next';

const spanStyle = {
  width: '100px',
  height: '64px',
  textAlign: 'center',
  lineHeight: '64px',
  color: '#47371F'
};

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-full items-start flex-wrap  min-h-screen bg-gray-100 h-full">
      {/* 顶部导航栏 */}
      <div className='w-full h-[907px] max-w-[1583px] py-0 px-20 bg-frame14 bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-row items-center align-middle bg-[#F0E6D4] rounded-[32px] h-[64px] my-[20px] mx-[40px]'>
          <img src="/images/LOGO-Blk.svg" className='ml-[30px]' alt="" srcset="" />
          <span className='flex-[2_1_0%]'></span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>Science</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>About US</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>FAQs</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>Blog</span>
          <span className='flex-1'></span>
          <div className='inline rounded-[20px] bg-[#47371E] text-white text-[16px] p-[6px_24px]'>For Providers</div>
          <span className='flex-[0.3_1_0%]' ></span>
          <div className='inline' style={{ borderRadius: '20px', background: "#6C5127", color: "white", fontSize: "16px", padding: "6px 24px" }}>Order Test</div>
          <div className='inline' style={{  fontSize: "16px", padding: "6px 24px", marginRight: "10px" }}>Sign in</div>
        </div>
        <div style={{ fontSize: "96px",  color: "white", marginLeft: "60px", marginTop: "60px" }}>Measure Aging</div>
        <div style={{ fontSize: "52px",  fontStyle: "italic", color: "white", marginLeft: "60px", marginTop: "-10px" }}>widh golden standard</div>
        <div style={{ marginLeft: "60px", marginTop: "30px" }}>
          <div style={{ width: "20px", backgroundImage: "url('/public/icon/arrow_left.svg')" }}></div>
          <div className='inline' style={{ padding: "24px", fontSize: "36px", color: "white", borderRadius: "40px", background: "#4F4E4D" }}>Learn about our test</div>
        </div>
        <div className='flex' style={{ flexDirection: "row", marginRight: "60px" }}>
          <div style={{ flex: 1 }}></div>
          <div style={{ marginTop: "60px" }}>
            <div style={{ fontSize: "96px",  color: "white" }}>Intervene Health</div>
            <div style={{ fontSize: "52px",  fontStyle: "italic", color: "white", marginTop: "-10px", marginLeft: "120px" }}>widh scientific confidence</div>
            <div style={{ width: "auto", padding: "24px", marginTop: "30px", marginLeft: "320px", fontSize: "36px", color: "white", borderRadius: "40px", background: "#4F4E4D" }}>Learn about our plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;