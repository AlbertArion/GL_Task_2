/*
 * @Author: Albert
 * @Date: 2025-02-20 12:35:42
 * @LastEditors: Elaine
 * @LastEditTime: 2025-02-21 19:15:41
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
      {/* Provider区域 */}
      <div style={{ width: "100%", background: "#000000", height: "784.72px", padding: "120px 120px" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: "64px" }}>Elevate Your Practice</div>
          <div style={{ flex: 1 }}></div>
          <div style={{ color: "#271F15", fontSize: "28px", padding: "8px 36px", borderRadius: "30px", background: "#FCEBCF", boxShadow: " 0 0 20px 10px rgba(252,235,207,0.5)" }}>Become a Provider</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}>
              <img className='w-[170px] h-[170px]' src="/images/image1.svg" />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. James Pattinson, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Explore longvity Clinic, Los Angeles</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
          <div style={{ width: "40px" }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}>
            <img className='w-[170px] h-[170px]' src="/images/image2.svg" />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. Clayton Anderwson, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Peek longvity Clinic, New York</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
          <div style={{ width: "40px" }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}>
            <img className='w-[170px] h-[170px]' src="/images/image3.svg" />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. Kate Ma, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Peek longvity Clinic, New Yorks</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
        </div>
      </div>
      {/* 产品区域 */}
      <div style={{
        width: "100%", background: "#FFFFFF", height: "781px", display: "flex", flexDirection: "column", alignItems: "center",  /* 利用两个线性渐变创建水平和垂直线条 */
        backgroundImage: "linear-gradient(rgba(255,0,0,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,0,0,0.3) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px"
      }}>
        <div style={{ fontSize: "96px", textAlign: "left", width: "100%", marginLeft: "40px", marginTop: "120px" }}>1 SAMPLE PROCESSING</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "806px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ fontSize: "64px" }}>Measure with Precision</div>
            <div style={{ fontSize: "36px" }}>Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our SystemAge Test, leveraging Illumina’s sequencing and Tempus’ CLIA-certified lab for precise aging insights.</div>
          </div>
          <div className='ml-[100px]' style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <img src="/images/image11.svg" alt="" />
            <img className='mt-[56px]' src="/images/image13.png" alt="" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;