import React from "react";
import {
  MiniStrip,
  MainContainer,
  HeroSection,
  HeroContent,
  MainTitle,
  MainSubtitle,
  CTAButton,
  AISection,
  SectionTitle,
  SectionSubtitle,
  FeatureGrid,
  FeatureImage,
  FeatureList,
  FeatureItem,
  FeatureNumber,
  FeatureText,
  WorkFieldSection,
  FieldGrid,
  FieldCard,
  FieldIcon,
  FieldTitle,
  StatsSection,
  StatsGrid,
  StatsButton,
  StatsContent,
  StatsTitle,
  StatsDescription,
  StatsImage,
  MainImage,
  B,
  Strip,
  ImageTitle,
  Content,
  ImageWrapper,
} from "../styles/main/main.styles";
import image1 from "../assets/main/function1.png";
import application1 from "../assets/main/application1.png";
import application2 from "../assets/main/application2.png";
import application3 from "../assets/main/application3.png";
import application4 from "../assets/main/application4.png";
import image2 from "../assets/main/report.png";
import image3 from "../assets/main/main_image3.png";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const goToSolution = () => {
    navigate("/solution");
  };

  const goToPricing = () => {
    navigate("/pricing");
  };

  return (
    <MainContainer>
      <HeroSection>
        <HeroContent>
          <MainTitle>
            측정부터 보고까지,
            <br />
            환경측정 데이터 관리를 자동화하다
          </MainTitle>
          <MainSubtitle>
            대기질 측정 데이터를 손쉽게 입력하고,
            <br />
            AI가 분석하여 자동으로 보고서를 완성합니다.
            <br />
            환경측정대행사의 업무 효율을 3배 높이는 스마트 솔루션, 에코존
          </MainSubtitle>
          <CTAButton onClick={goToSolution}>솔루션 주요기능 보기</CTAButton>
        </HeroContent>
      </HeroSection>

      {/* AI 기반 솔루션 섹션 */}
      <AISection>
        <SectionSubtitle>SERVICE</SectionSubtitle>
        <SectionTitle>
          AI 기반 환경측정관리 자동화 솔루션,
          <br />
          <B>에코존(Eco-Zone)</B>의 핵심 기능
        </SectionTitle>

        <FeatureGrid>
          <FeatureImage src={image1} />
          <FeatureList>
            <FeatureItem>
              <FeatureNumber>1</FeatureNumber>
              <FeatureText>모바일 기반 측정 결과 관리 입력 기능</FeatureText>
            </FeatureItem>
            <Strip />
            <FeatureItem>
              <FeatureNumber>2</FeatureNumber>
              <FeatureText>AI 이상 감지 분석</FeatureText>
            </FeatureItem>
            <Strip />
            <FeatureItem>
              <FeatureNumber>3</FeatureNumber>
              <FeatureText>
                환경측정관리 행정 기관 보고서 자동 작성 및 제출
              </FeatureText>
            </FeatureItem>
            <Strip />
          </FeatureList>
        </FeatureGrid>
      </AISection>

      {/* 작업 분야 섹션 */}
      <WorkFieldSection>
        <SectionTitle>적용 분야</SectionTitle>

        <FieldGrid>
          <FieldCard>
            <FieldIcon src={application1} />
            <MiniStrip />
            <FieldTitle>대기자가측정</FieldTitle>
          </FieldCard>
          <FieldCard>
            <FieldIcon src={application2} />
            <MiniStrip />
            <FieldTitle>실내공기질</FieldTitle>
          </FieldCard>
          <FieldCard>
            <FieldIcon src={application3} />
            <MiniStrip />
            <FieldTitle>소음</FieldTitle>
          </FieldCard>
          <FieldCard>
            <FieldIcon src={application4} />
            <MiniStrip />
            <FieldTitle>폐기</FieldTitle>
          </FieldCard>
        </FieldGrid>
      </WorkFieldSection>

      {/* 통계 섹션 */}
      <StatsSection>
        <StatsGrid>
          <StatsContent>
            <StatsTitle>
              월 299,000원으로,
              <br />
              보고서 작성 시간을 <B>80%</B> 줄여보세요.
            </StatsTitle>
            <StatsDescription>
              매달 반복되는 환경측정 데이터 정리와 보고서 작성
              <br />
              에코존(Eco-Zone)은 입력부터 데이터 관리, 보고서 생성까지 자동화해
              <br />
              <B>직원 3명의 업무를 에코존이 대신합니다.</B>
            </StatsDescription>
            <StatsButton onClick={goToPricing}>요금제 보기</StatsButton>
          </StatsContent>
          <StatsImage src={image2} />
        </StatsGrid>
      </StatsSection>

      <ImageWrapper>
        <MainImage src={image3} />
        <ImageTitle>
          환경측정 보고서 제작 자동화의 시작, <br />
          에코존(Eco-Zone)
        </ImageTitle>
        <Content>환경 규제 대응, 쉽고 똑똑하게</Content>
      </ImageWrapper>
    </MainContainer>
  );
};

export default Main;
