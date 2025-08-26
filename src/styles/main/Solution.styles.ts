import styled from "styled-components";
import MainBackground from "../../assets/solution/img.png";

export const MainContainer = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

// HERO SECTION
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
  margin-left: 120px;
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  color: #282828;
  margin-bottom: 0px;
`;

export const MainSubtitle = styled.h1`
  font-size: 48px;
  color: #3f67ef;
  text-align: center;
  margin-top: 0px;
`;

export const HeroDescription = styled.div`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  margin-top: 120px;
`;

// SOLUTION SECTION
export const SolutionSection = styled.section`
  background-color: #fbfcfc;
  text-align: center;
  padding-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #000000;
  margin-bottom: 40px;
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-top: 69px;
  color: #3f67ef;
  margin-bottom: 5px;
`;

export const Row = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    gap: 24px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 12px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  color: #3f67ef;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Card = styled.img`
  width: 592px;
  height: 310px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Content = styled.div`
  max-width: 491px;
  text-align: left;
`;

export const Strip = styled.div`
  height: 1px;
  background-color: #dcdcdc;
  margin: 12px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #282828;
`;
