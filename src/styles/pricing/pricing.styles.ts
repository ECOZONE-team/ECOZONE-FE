import styled from "styled-components";
import heroBg from "../../assets/pricing/main_pricing1.png";
import paymentBg from "../../assets/pricing/upsplash.png";

export const PricingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 76px; // 네비게이션 높이만큼 패딩
`;

// 히어로 섹션
export const HeroSection = styled.section`
  padding: 80px 60px;
  background: url(${heroBg}) center/cover no-repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path d="M0,200 Q300,100 600,200 T1200,200 V400 H0 Z" fill="rgba(74,144,226,0.05)"/></svg>')
      center/cover no-repeat;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #3f67ef;
  margin-bottom: 5px;
  margin-top: 69px;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #2c3e50;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #black;
  margin-bottom: 24px;
`;

export const HeroButton = styled.button`
  width: 154px;
  height: 50px;
  background: #3f67ef;
  font-size: 20px;
  align-self: flex-end;
  color: white;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

// 요금제 섹션
export const PricingSection = styled.section`
  background: #fbfcfc;
  text-align: center;
`;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
  color: #282828;
  margin-bottom: 60px;
  text-align: center;
`;

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 1201px;
  gap: 17px;
  margin: 0 auto;
  margin-bottom: 99px;
`;

export const PricingCard = styled.div`
  width: 388px;
  height: 509px;
  background: white;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  position: relative;
`;

export const PlanName = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
  color: #2c3e50;
  margin-top: 24px;
  margin-bottom: 8px;
`;
export const Strip = styled.div`
  background-color: #949494;
  width: 324px;
  height: 2px;
  margin-bottom: 24px;
  margin: 0 auto;
`;

export const PlanPrice = styled.div`
  ${({ theme }) => theme.fonts.bodyEmphasis};
  color: #3f67ef;
  margin-bottom: 16px;
`;

export const B = styled.div`
  color: #3f67ef;
  ${({ theme }) => theme.fonts.detailEmphasis};
  position: relative;
  display: inline-block;
`;
export const Check = styled.img`
  margin-right: 1px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

export const PlanPeriod = styled.p`
  ${({ theme }) => theme.fonts.detailRegular};
  color: #282828;
  margin-left: 32px;
  margin-bottom: 32px;
  text-align: left;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const FeatureItem = styled.li`
  margin-bottom: 8px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeatureText = styled.span`
  font-size: 16px;
  color: #2c3e50;
  font-weight: 500;
`;

export const FeatureLink = styled.span`
  font-size: 0.9rem;
  color: #3498db;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// 기능 비교 섹션
export const FeaturesSection = styled.section`
  background: #fbfcfc;
  padding-bottom: 150px;
`;

export const FeaturesTable = styled.div`
  width: 998px;
  margin: 0 auto;
  overflow: hidden;
`;

export const TableRow = styled.div<{ header?: boolean }>`
  display: flex;
  height: 58px;
  gap: 16px;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr;
`;

export const TableFeature = styled.div<{ header?: boolean }>`
  ${({ header, theme }) =>
    header ? theme.fonts.bodyEmphasis : theme.fonts.detailEmphasis};
  color: #282828;
  text-align: center;
  width: 288px;
  padding: ${({ header }) => (header ? "16px 0" : "12px 0")};
  background-color: ${({ header }) => (header ? "#ffffff" : "#FBFCFC")};
  border-bottom: 1px solid #dedede;
  box-shadow: ${({ header }) =>
    header ? "0 2px 6px rgba(0.08, 0.08, 0.08, 0.08)" : "none"};
  border-radius: ${({ header }) => (header ? "10px" : "0")};
`;

export const TableCell = styled.div<{ header?: boolean }>`
  ${({ header, theme }) =>
    header ? theme.fonts.bodyEmphasis : theme.fonts.detailRegular};
  color: #282828;
  text-align: ${({ header }) => (header ? "center" : "left")};
  width: 694px;
  padding: ${({ header }) => (header ? "16px 0" : "12px 16px")};
  background-color: ${({ header }) => (header ? "#ffffff" : "#FBFCFC")};
  border-bottom: 1px solid #dedede;
  box-shadow: ${({ header }) =>
    header ? "0 2px 6px rgba(0.08, 0.08, 0.08, 0.08)" : "none"};
  border-radius: ${({ header }) => (header ? "10px" : "0")};
`;

// 결제 섹션
export const PaymentSection = styled.section`
  padding: 100px 60px;
  background: url(${paymentBg}) center/cover no-repeat;
  color: white;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><circle cx="200" cy="100" r="50" fill="rgba(255,255,255,0.05)"/><circle cx="800" cy="300" r="80" fill="rgba(255,255,255,0.03)"/><circle cx="1000" cy="150" r="60" fill="rgba(255,255,255,0.04)"/></svg>')
      center/cover no-repeat;
  }
`;

export const PaymentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  color: black;
`;

export const PaymentButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 60px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
  }
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const PaymentMethod = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background: white;
`;

export const PaymentIcon = styled.img`
  margin-top: 43px;
`;

export const PaymentLabel = styled.p`
  color: black;
  font-size: 16px;
`;
