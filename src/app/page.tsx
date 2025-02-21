/*
 * @Author: Elan
 * @Date: 2025-02-20 12:35:42
 * @LastEditors: Elaine
 * @LastEditTime: 2025-02-21 11:58:49
 * @FilePath: /task2-app/src/app/page.tsx
 * @Description: 
 * 
 */
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-full items-start flex-wrap  min-h-screen bg-gray-100 h-full">
      {/* 顶部导航栏 */}
      <div className='bg-[yellow] w-full h-88 max-w-[1583px]'></div>

      {/* banner图部分 */}
      <div className=' w-full h-907 max-w-[1583px] bg-frame14'></div>

      {/* provider部分 */}
      <div className='bg-[yellow] w-full h-500 max-w-[1583px]'></div>

      {/* 特点部分 */}
      <div className='bg-[red] w-full h-fit max-w-[1583px]'>
          {/* 特点一：样本处理 */}
          <div className='bg-[blue] w-full h-200 '>样本处理</div>

          {/* 特点二：分析 */}
          <div className='bg-[yellow] w-full h-200'>分析</div>
          
          {/* 特点一：干预 */}
          <div className='bg-[blue] w-full h-200'>干预</div>
      </div>
    </div>
  );
};

export default Home;