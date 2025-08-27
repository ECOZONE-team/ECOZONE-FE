import styled from "styled-components";
import MainBackground from "../../assets/main/main_image.png";

export const MainContainer = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

export const B = styled.div`
  color: blue;
  position: relative;
  display: inline-block;
`;

export const Strip = styled.div`
  background-color: #949494;
  width: 491px;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const MiniStrip = styled.div`
  background-color: #949494;
  width: 288px;
  height: 2px;
  margin: 8px 0;
`;

export const HeroSection = styled.section`
  background: url(${MainBackground}) center/cover no-repeat;
  width: 100%;
  height: 1024px;
  margin-top: 0px;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  color: white;
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.emphasisTitle};
  padding-top: 201px;
  color: black;
`;

export const MainSubtitle = styled.p`
  ${({ theme }) => theme.fonts.bodyRegular};
  color: black;
`;

export const FeatureHighlight = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 16px 24px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CTAButton = styled.button`
  ${({ theme }) => theme.fonts.bodyEmphasis};
  background: #3f67ef;
  width: 215px;
  height: 50px;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
`;

// 두 번째 섹션 - AI 기반 솔루션
export const AISection = styled.section`
  background-color: #fbfcfc;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #000000;
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-top: 69px;
  color: #3f67ef;
  margin-bottom: 5px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

export const FeatureImage = styled.img`
  width: 491px;
  height: 214px;
`;

export const FeatureList = styled.div`
  text-align: left;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0;
`;

export const FeatureNumber = styled.div`
  width: 42px;
  height: 42px;
  background: #949494;
  color: white;
  border-radius: 21px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 36px;
  flex-shrink: 0;
  &:hover {
    background: #000000;
  }
`;

export const FeatureText = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular};
  color: #000000;
`;

// 세 번째 섹션 - 작업 분야
export const WorkFieldSection = styled.section`
  padding: 100px 60px;
  background: white;
  text-align: center;
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 60px auto 0;
`;

export const FieldCard = styled.div`
  &:hover {
    transform: translateY(-10px);
  }
`;

export const FieldIcon = styled.img`
  width: 288px;
  height: 187px;
  border-radius: 10px;
`;

export const FieldTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;

// 네 번째 섹션 - 통계
export const StatsImage = styled.img`
  width: 712px;
  height: 466px;
  margin-right: 0px;
`;

export const StatsSection = styled.section`
  background: #fbfcfc;
  height: 466px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 117px;
  margin: 0 auto;
  align-items: center;
`;

export const StatsContent = styled.div``;

export const StatsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 120px;
  width: 491px;
`;

export const StatsDescription = styled.p`
  font-size: 16px;
  margin-left: 120px;
  color: #676767;
  text-align: left;
  margin-bottom: 34px;
`;

export const StatsButton = styled.button`
  background: #3f67ef;
  color: white;
  width: 176px;
  height: 50px;
  margin-left: 120px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background: rgba(63, 103, 239, 0.8);
  }
`;

// 다섯 번째 섹션 - 환경측정 보고서
export const ReportSection = styled.section`
  padding: 100px 60px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><path d="M0,300 Q300,200 600,300 T1200,300 V600 H0 Z" fill="rgba(116,185,255,0.1)"/></svg>')
      center bottom/cover no-repeat;
  }
`;

export const ReportContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

export const ReportTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
`;

export const ReportSubtitle = styled.p`
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 60px;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 384px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 384px;
  object-fit: cover;
  margin-bottom: -7px;
`;

export const ImageTitle = styled.div`
  position: absolute;
  top: 80px;
  left: 120px;
  color: #282828;
  font-size: 48px;
  font-weight: bold;
`;

export const Content = styled.div`
  position: absolute;
  top: 230px;
  left: 120px;
  color: #282828;
  font-size: 20px;
`;
