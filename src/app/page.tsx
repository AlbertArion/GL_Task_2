/*
 * @Author: Albert
 * @Date: 2025-02-20 12:35:42
 * @LastEditors: Albert
 * @LastEditTime: 2025-02-21 11:58:49
 * @FilePath: /workspace/GL_Task_2src/app/page.tsx
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
      <div className='bg-[yellow] w-full h-88 max-w-[1583px]' style={{ height: "907px", padding: '0px 20px', background: "linear-gradient(180deg, #121211 0%, #6E7069 100%)" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", verticalAlign: "middle", background: '#F0E6D4', borderRadius: "32px", height: "64px", margin: '20px 40px' }}>
          <span style={{ height: "32px", width: "2px", borderLeft: "2px solid #39280E", marginLeft: "30px" }} />
          <span style={{ padding: '0px 20px 0px 6px', marginTop: "24px", height: '64px', lineHeight: "19px", textAlign: 'start', fontWeight: "bold", color: '#39280E' }}>Generation<br></br>Lab</span>
          <span style={{ flex: 2 }}></span>
          <span style={{ padding: '0px 20px', height: '64px', textAlign: 'center', lineHeight: '64px', color: '#47371F' }}>Science</span>
          <span style={{ padding: '0px 20px', height: '64px', textAlign: 'center', lineHeight: '64px', color: '#47371F' }}>About US</span>
          <span style={{ padding: '0px 20px', height: '64px', textAlign: 'center', lineHeight: '64px', color: '#47371F' }}>FAQs</span>
          <span style={{ padding: '0px 20px', height: '64px', textAlign: 'center', lineHeight: '64px', color: '#47371F' }}>Blog</span>
          <span style={{ flex: 1 }}></span>
          <div style={{ display: 'inline', borderRadius: '20px', background: "#47371E", color: "white", fontSize: "16px", padding: "6px 24px" }}>For Providers</div>
          <span style={{ flex: 0.3 }}></span>
          <div style={{ display: 'inline', borderRadius: '20px', background: "#6C5127", color: "white", fontSize: "16px", padding: "6px 24px" }}>Order Test</div>
          <div style={{ display: 'inline', fontSize: "16px", padding: "6px 24px", marginRight: "10px" }}>Sign in</div>
        </div>
        <div style={{ fontSize: "96px", fontWeight: "lighter", color: "white", marginLeft: "60px", marginTop: "60px" }}>Measure Aging</div>
        <div style={{ fontSize: "52px", fontWeight: "lighter", fontStyle: "italic", color: "white", marginLeft: "60px", marginTop: "-10px" }}>widh golden standard</div>
        <div style={{ marginLeft: "60px", marginTop: "30px" }}>
          <div style={{ width: "20px", backgroundImage: "url('/public/icon/arrow_left.svg')" }}></div>
          <div style={{ display: "inline", padding: "24px", fontSize: "36px", color: "white", borderRadius: "40px", background: "#4F4E4D" }}>Learn about our test</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginRight: "60px" }}>
          <div style={{ flex: 1 }}></div>
          <div style={{ marginTop: "60px" }}>
            <div style={{ fontSize: "96px", fontWeight: "lighter", color: "white" }}>Intervene Health</div>
            <div style={{ fontSize: "52px", fontWeight: "lighter", fontStyle: "italic", color: "white", marginTop: "-10px", marginLeft: "120px" }}>widh scientific confidence</div>
            <div style={{ width: "auto", padding: "24px", marginTop: "30px", marginLeft: "320px", fontSize: "36px", color: "white", borderRadius: "40px", background: "#4F4E4D" }}>Learn about our plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;