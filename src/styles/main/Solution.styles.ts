import styled from "styled-components";
import MainBackground from "../../assets/solution/img.png";

export const MainContainer = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 96px;
  background-color: #949494;
  margin: 0 auto;
`;

export const HeroSection = styled.section`
  background: url(${MainBackground}) center/cover no-repeat;
  width: 100%;
  height: 940px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const HeroContent = styled.div`
  color: #ffffff;
  margin-left: 150px;
`;

export const MainTitle = styled.div`
  ${({ theme }) => theme.fonts.emphasisTitle};
  color: #282828;
  margin-bottom: 0px;
  margin-top: -120px;
`;

export const MainSubtitle = styled.div`
  ${({ theme }) => theme.fonts.emphasisTitle};
  font-size: 48px;
  color: #3f67ef;
  text-align: center;
  margin-bottom: 14px;
`;

export const HeroDescription = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular};
  color: #ffffff;
  text-align: center;
  margin-top: 12px;
`;

// SOLUTION SECTION
export const SolutionSection = styled.section`
  background-color: #fbfcfc;
  text-align: center;
  padding-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle};
  color: #000000;
  margin-bottom: 40px;
`;

export const SectionSubtitle = styled.p`
  ${({ theme }) => theme.fonts.detailEmphasis};
  padding-top: 68px;
  color: #3f67ef;
`;

export const Row = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  margin-bottom: 120px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    gap: 24px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 160px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 12px;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.bodyEmphasis};
  color: #3f67ef;
  font-weight: 600;
`;

export const Card = styled.img`
  width: 592px;
  height: 310px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Content = styled.div`
  width: 608px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SecondContent = styled.div`
  padding-left: 96px;
  width: 608px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Strip = styled.div`
  height: 1px;
  width: 491px;
  background-color: #949494;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.detailRegular};
  color: #282828;
  text-align: left;
`;
