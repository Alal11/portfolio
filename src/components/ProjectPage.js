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

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 바 */}
      <nav className="bg-white shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">꾸깃 팀 포트폴리오</h1>
            <div className="space-x-4">
              <a href="#projects" className="text-gray-600 hover:text-gray-900">프로젝트</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">활동 경험</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">연락처</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto py-6 px-4 space-y-8">
        {/* 팀 소개 섹션 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">꾸깃 팀 소개</h2>
          <p className="text-gray-600 mb-4">
            저희 꾸깃 팀은 데이터 시각화 기술과 효과적인 정보 전달에 관심을 가진 팀입니다.
            다양한 공모전과 서포터즈 활동을 통해 전문성을 키워가고 있습니다.
          </p>
        </section>

        {/* KISDI 프로젝트 섹션 */}
        <section id="projects" className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">KISDI 통계 시각화 프로젝트</h2>
          <p className="text-gray-600 mb-4">
            정보통신정책연구원(KISDI)의 연구 데이터를 시각화하여 일반 대중이 쉽게 이해할 수 있도록 
            제작한 프로젝트입니다. 특히 휴대폰 유형별 보유 현황 데이터를 직관적인 그래프로 표현했습니다.
          </p>
          <div className="h-96 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" name="보유율" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* 사용 기술 */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">사용 기술</h3>
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
          </div>

          {/* 프로젝트 결과 */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">프로젝트 결과</h3>
            <div className="text-gray-600">
              <ul className="list-disc ml-5 space-y-2">
                <li>복잡한 통계 데이터를 직관적인 시각화로 변환</li>
                <li>사용자 친화적인 인터페이스 구현</li>
                <li>반응형 디자인으로 다양한 디바이스 지원</li>
                <li>데이터의 효과적인 전달과 이해도 향상</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 서포터즈 활동 섹션 */}
        <section id="experience" className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">공모전 및 서포터즈 참여 경험</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">데이터안심구역 경진대회</h3>
              <p className="text-gray-600">
                인스타그램 카드뉴스를 통해 데이터안심구역으로 가는 길과 활동에 대한 홍보글을 작성했습니다. 
                시각적인 콘텐츠로 복잡한 정보를 쉽게 전달하는 데 중점을 두었습니다.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">학생상담서포터즈</h3>
              <p className="text-gray-600">
                학생들의 심리 건강과 상담 서비스 접근성 향상을 위한 캠페인을 기획하고 운영했습니다.
                다양한 홍보 활동을 통해 학생상담 서비스의 인지도를 높이는 데 기여했습니다.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">2024 스타팅 캠프</h3>
              <p className="text-gray-600">
                장려상을 수상하며 팀원의 혁신적인 아이디어와 실행력을 인정받았습니다.
                팀워크를 통해 프로젝트를 성공적으로 완수하고 의미 있는 성과를 달성했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">연락처</h2>
          <div className="text-gray-600">
            <p>이메일: spalqj56@naver.com</p>
            <p>GitHub: https://github.com/Alal11/portfolio</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;