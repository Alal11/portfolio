import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { type: '5G스마트폰', percentage: 50.4 },
  { type: 'LTE-A스마트폰', percentage: 35.6 },
  { type: 'LTE스마트폰', percentage: 9.6 },
  { type: '3G스마트폰', percentage: 2.8 },
  { type: '2G일반휴대폰', percentage: 0.4 },
  { type: '키즈폰', percentage: 0.3 },
  { type: '3G일반휴대폰', percentage: 0.9 }
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            KISDI 통계 시각화 프로젝트
          </h1>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto py-6 px-4 space-y-8">
        {/* 프로젝트 소개 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
          <p className="text-gray-600 mb-4">
            정보통신정책연구원(KISDI)의 연구 데이터를 시각화하여 일반 대중이 쉽게 이해할 수 있도록 
            제작한 프로젝트입니다. 특히 휴대폰 유형별 보유 현황 데이터를 직관적인 그래프로 표현하여
            현재 모바일 시장의 동향을 한눈에 파악할 수 있도록 하였습니다.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">주요 기능</h3>
            <ul className="list-disc ml-5 text-gray-600">
              <li>데이터 시각화 (막대 그래프)</li>
              <li>반응형 디자인</li>
              <li>인터랙티브 툴팁</li>
              <li>사용자 친화적 UI</li>
            </ul>
          </div>
        </section>

        {/* 데이터 시각화 섹션 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">데이터 시각화</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="type" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" name="보유율" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            출처: 한국미디어패널조사
          </p>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">사용 기술</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="font-semibold">React</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="font-semibold">Recharts</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="font-semibold">JavaScript</span>
            </div>
          </div>
        </section>

        {/* 프로젝트 결과 섹션 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">프로젝트 결과</h2>
          <div className="text-gray-600">
            <p>이 프로젝트를 통해 다음과 같은 성과를 달성했습니다:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>복잡한 통계 데이터를 직관적인 시각화로 변환</li>
              <li>사용자 친화적인 인터페이스 구현</li>
              <li>반응형 디자인으로 다양한 디바이스 지원</li>
              <li>데이터의 효과적인 전달과 이해도 향상</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;