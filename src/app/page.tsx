/*
 * @Author: Albert
 * @Date: 2025-02-20 12:35:42
 * @LastEditors: Elaine
 * @LastEditTime: 2025-02-21 20:24:35
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
      <div className='w-full h-[907px]  py-0 px-20 bg-frame14 bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-row items-center align-middle bg-[#F0E6D4] rounded-[32px] h-[64px] my-[20px] mx-[40px]'>
          <img src="/images/LOGO-Blk.svg" className='ml-[30px]' alt="" srcSet="" />
          <span className='flex-[2_1_0%]'></span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>Science</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>About US</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>FAQs</span>
          <span className='py-0 px-20 h-64 leading-[64px] text-center text-[#47371F]'>Blog</span>
          <span className='flex-1'></span>
          <div className='inline rounded-[20px] bg-[#47371E] text-white text-[16px] p-[6px_24px]'>For Providers</div>
          <span className='flex-[0.3_1_0%]' ></span>
          <div className='inline rounded-[20px] bg-[#6C5127] text-white text-[16px] p-[6px_24px]' >Order Test</div>
          <div className='inline text-[16px] p-[6px_24px] mr-[10px] text-[#47371E]' >Sign in</div>
        </div>
        <div className='text-[96px] text-white ml-[60px] mt-[60px]'>Measure Aging</div>
        <div className='text-[52px] italic text-white ml-[60px] mt-[-10px]' >with golden standard</div>
        <div className='ml-[60px] mt-[30px]' >
          <div className='inline p-[24px] text-[36px] text-white rounded-[40px] bg-[#4F4D4D]' >
            <img className='w-[20px] h-[20px]' src="/icons/arrow_left.svg" style={{ display: "inline", marginRight: "12px", marginBottom: "6px" }} />
            Learn about our test</div>
        </div>
        <div className='flex flex-row mr-[60px]'>
          <div className='flex-1'></div>
          <div className='mt-[60px]' >
            <div className='text-[96px] text-white' >Intervene Health</div>
            <div className='mt-[-10px] ml-[120px]' style={{ fontSize: "52px", fontStyle: "italic", color: "white" }}>widh scientific confidence</div>
            <div className='p-[24px] mt-[30px] ml-[320px]' style={{ width: "auto", fontSize: "36px", color: "white", borderRadius: "40px", background: "#4F4E4D" }}>
              Learn about our plan
              <img className='w-[20px] h-[20px]' src="/icons/arrow_right.svg" style={{ display: "inline", marginLeft: "12px" }} />
            </div>
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
      {/* 产品区域 1 */}
      <div style={{
        position: "relative", width: "100%", background: "#FFFFFF", height: "680px", display: "flex", flexDirection: "column",
        backgroundImage: "linear-gradient(rgba(255,0,0,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,0,0,0.3) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px"
      }}>
        <div style={{ position: "absolute", left: "0px", top: "40px", width: "160px", height: "600px", marginLeft: "-80px", border: "1px solid #000000", borderRadius: "80px" }}></div>
        <div style={{ color: "#160D01", fontSize: "75px", textAlign: "left", marginLeft: "20px", marginTop: "120px" }}><span style={{ marginRight: "40px" }}>1</span>SAMPLE PROCESSING</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "750px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ fontSize: "48px", fontWeight: "bold", color: "#271F15" }}>Measure with Precision</div>
            <div style={{ fontSize: "30px", color: "#160D01" }}>Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our SystemAge Test, leveraging Illumina’s sequencing and Tempus’ CLIA-certified lab for precise aging insights.</div>
          </div>
          <div className='ml-[100px]' style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <img src="/images/image11.svg" alt="" style={{ marginRight: "200px" }} />
            <img className='mt-[56px]' src="/images/image13.png" alt="" style={{ marginRight: "200px" }} />
          </div>
        </div>
      </div>
      {/* 产品区域 2 */}
      <div style={{
        position: "relative", width: "100%", background: "linear-gradient(180deg, #F5F3F1 0%, #E3DFD9 100%)", height: "1380px", display: "flex", flexDirection: "column"
      }}>
        <div style={{ position: "absolute", left: "0px", top: "40px", width: "160px", height: "1341px", marginLeft: "-80px", border: "1px solid #000000", borderBottom: "1px solid transparent", borderTopRightRadius: "80px" }}></div>
        <div style={{ color: "#160D01", fontSize: "75px", textAlign: "left", marginLeft: "20px", marginTop: "120px" }}><span style={{ marginRight: "40px" }}>2</span>MOST ADVANCED ANALYSIS</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "640px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ color: "#271F15", fontSize: "48px", fontWeight: "bold" }}>Go Beyond Just A Number</div>
            <div style={{ color: "#160D01", fontSize: "30px", marginTop: "15px" }}><span style={{ fontWeight: "bold" }}>BioNoise Level</span>: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div style={{ color: "#160D01", fontSize: "30px", marginTop: "15px" }}><span style={{ fontWeight: "bold" }}>Aging Trajectory</span>: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non.</div>
            <div style={{ color: "#271F15", fontSize: "28px", padding: "8px 10px", width: "450px", textAlign: "center", marginTop: "20px", borderRadius: "30px", border: "0.5px solid #000000", background: "linear-gradient(180deg, #FEFBF5 0%, #FCEFDA 100%)", boxShadow: " 0 0 20px 10px rgba(252,235,207,0.5)" }}>Read more in our white paper</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: "30px", height: "468px" }}>
              <img src="/images/ENTROPY CUREVE.svg" alt="" />
            </div>
            <div style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold", margin: "20px 0px" }}>Read our papers:</div>
            <div style={{ width: "697", display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px" }}>
                <img src="/images/paper1.svg" alt="" />
              </div>
              <div style={{ width: "20px" }}></div>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px" }}>
                <img src="/images/paper2.png" alt="" />
              </div>
              <div style={{ width: "20px" }}></div>
              <div style={{ flex: 1, width: "240px", fontSize: "30px", height: "309px" }}>
                <img src="/images/paper3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 产品区域 2 bottom */}
      <div style={{
        position: "relative", width: "100%", height: "1380px", background: "linear-gradient(180deg, #E3DFD9 0%, #8F8578 100%)", display: "flex", flexDirection: "column"
      }}>
        <div style={{ zIndex: 1, position: "absolute", left: "0px", width: "160px", height: "1380px", marginLeft: "-80px", border: "1px solid #000000", borderTop: "1px solid transparent", borderBottomRightRadius: "80px" }}></div>
        <div style={{ zIndex: 2, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", marginTop: "66px" }}>
          <div>
            <img src="/images/cardiac_system.svg" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, width: "640px", padding: "30px 60px", marginLeft: "40px" }}>
            <div style={{ color: "#271F15", fontSize: "48px", fontWeight: "bold" }}>Identify Top Aging Factors</div>
            <div style={{ color: "#160D01", fontSize: "30px", marginTop: "15px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div style={{ color: "#271F15", fontSize: "28px", padding: "8px 10px", width: "450px", textAlign: "center", marginTop: "20px", borderRadius: "30px", border: "0.5px solid #000000", background: "linear-gradient(180deg, #FEFBF5 0%, #FCEFDA 100%)", boxShadow: " 0 0 20px 10px rgba(252,235,207,0.5)" }}>View sample report</div>
          </div>
        </div>
      </div>
      {/* 产品区域 3 */}
      <div style={{
        position: "relative", width: "100%", background: "linear-gradient(180deg, #8F8578 0%, #322412 100%)", height: "958px", display: "flex", flexDirection: "column"
      }}>
        <div style={{ position: "absolute", left: "0px", top: "40px", width: "160px", height: "878px", marginLeft: "-80px", border: "1px solid #FFFFFF", borderRadius: "80px" }}></div>
        <div style={{ fontSize: "75px", color: "white", textAlign: "left", marginLeft: "20px", marginTop: "120px" }}><span style={{ marginRight: "40px" }}>3</span>Intervene with Confidence</div>
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "40px", padding: "30px 60px" }}>
          <div style={{ fontSize: "48px", color: "white", fontWeight: "bold" }}>Intelligent Interventions</div>
          <div style={{ flex: 1 }}></div>
          <div style={{ color: "#271F15", fontSize: "28px", padding: "8px 10px", width: "150px", textAlign: "center", marginTop: "20px", borderRadius: "30px", border: "0.5px solid #000000", background: "linear-gradient(180deg, #FEFBF5 0%, #FCEFDA 100%)", boxShadow: " 0 0 20px 10px rgba(252,235,207,0.5)" }}>Try it!</div>
        </div>
        <div style={{ marginLeft: "66px", color: "rgba(255, 255, 255, 0.7)" }}>
          <div style={{ fontSize: "30px", marginTop: "15px", marginLeft: "40px" }}><span style={{ fontWeight: "bold", color: "white" }}>Intelligent Recommendations</span>: Tailored for each test taker and for each report, we generate a clinically-relevant action plan powered by our XXX algorithm.</div>
          <div style={{ fontSize: "30px", marginTop: "15px", marginLeft: "40px" }}><span style={{ fontWeight: "bold", color: "white" }}>Tracking</span>: Send the action plan to your clients and track their completion rates. Make informed adjustment each cycle to dynamically achieve the health goals.</div>
        </div>
        <div style={{ width: "93%", marginTop: "40px" }}>
          <img src="/images/part_3.png" alt="" style={{ marginLeft: "90px" }} />
        </div>
      </div>
    </div >
  );
};

export default Home;