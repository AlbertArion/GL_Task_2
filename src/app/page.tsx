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
      {/* Provider区域 */}
      <div style={{ width: "100%", background: "#000000", height: "784.72px", padding: "120px 120px" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: "64px" }}>Elevate Your Practice</div>
          <div style={{ flex: 1 }}></div>
          <div style={{ color: "#271F15", fontSize: "28px", padding: "8px 36px", borderRadius: "30px", background: "#FCEBCF", boxShadow: " 0 0 20px 10px rgba(252,235,207,0.5)" }}>Become a Provider</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}></div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. James Pattinson, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Explore longvity Clinic, Los Angeles</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
          <div style={{ width: "40px" }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}></div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. Clayton Anderwson, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Peek longvity Clinic, New York</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
          <div style={{ width: "40px" }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, borderRadius: "32px", border: "1px solid #FCEBCF", padding: "40px 20px" }}>
            <div style={{ borderRadius: "50%", width: "170px", height: "170px", border: "1px solid #FCEBCF" }}></div>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "#FFEBCC" }}>Dr. Kate Ma, MD</div>
            <div style={{ fontSize: "18px", color: "#FFEBCC", marginTop: "6px" }}>Peek longvity Clinic, New Yorks</div>
            <div style={{ fontSize: "16px", color: "#FBF6ED", marginTop: " 12px" }}>“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”</div>
          </div>
        </div>
      </div>
      {/* 产品区域 1 */}
      <div style={{
        width: "100%", background: "#FFFFFF", height: "781px", display: "flex", flexDirection: "column",
        backgroundImage: "linear-gradient(rgba(255,0,0,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,0,0,0.3) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px"
      }}>
        <div style={{ fontSize: "75px", textAlign: "left", marginLeft: "66px", marginTop: "120px" }}>1 SAMPLE PROCESSING</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "806px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ fontSize: "48px", fontWeight: "bold" }}>Measure with Precision</div>
            <div style={{ fontSize: "30px" }}>Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our SystemAge Test, leveraging Illumina’s sequencing and Tempus’ CLIA-certified lab for precise aging insights.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div style={{ fontSize: "64px", fontWeight: "bold" }}>Tempus</div>
            <div style={{ fontSize: "50px" }}>illumina</div>
          </div>
        </div>
        {/* 产品区域 2 */}
      </div>
      <div style={{
        width: "100%", background: "linear-gradient(180deg, #F5F3F1 0%, #E4DFDB 100%)", height: "1380px", display: "flex", flexDirection: "column"
      }}>
        <div style={{ fontSize: "75px", textAlign: "left", marginLeft: "66px", marginTop: "120px" }}>2 MOST ADVANCED ANALYSIS</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "640px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ fontSize: "48px", fontWeight: "bold" }}>Go Beyond Just A Number</div>
            <div style={{ fontSize: "30px", marginTop: "15px" }}><span style={{ fontWeight: "bold" }}>BioNoise Level</span>: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div style={{ fontSize: "30px", marginTop: "15px" }}><span style={{ fontWeight: "bold" }}>Aging Trajectory</span>: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: "30px", height: "468px" }}>这里放曲线图</div>
            <div style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold", margin: "20px 0px" }}>Read our papers:</div>
            <div style={{ width: "697", display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px", background: "#498256" }}>这里放杂志图</div>
              <div style={{ width: "20px" }}></div>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px", background: "#498256" }}>这里放杂志图</div>
              <div style={{ width: "20px" }}></div>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px", background: "#498256" }}>这里放杂志图</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;