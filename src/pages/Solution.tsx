import React from "react";
import {
  MainContainer,
  HeroContent,
  HeroSection,
  HeroDescription,
  MainSubtitle,
  MainTitle,
  SectionSubtitle,
  SolutionSection,
  SectionTitle,
  TitleRow,
  Row,
  Card,
  Content,
  SecondContent,
  Icon,
  SubTitle,
  Text,
  Strip,
  VerticalLine,
} from "../styles/main/Solution.styles";
import image1 from "../assets/solution/img1.png";
import image2 from "../assets/solution/img2.png";
import image3 from "../assets/solution/img3.png";
import icon1 from "../assets/solution/icon1.png";
import icon2 from "../assets/solution/icon2.png";
import icon3 from "../assets/solution/icon3.png";

const Solution: React.FC = () => {
  return (
    <MainContainer>
      <HeroSection>
        <HeroContent>
          <MainTitle>사람이 하던 보고서 작성,</MainTitle>
          <MainSubtitle>이제 AI가 대신합니다.</MainSubtitle>
          <VerticalLine />
          <HeroDescription>
            환경측정데이터의 정밀 관리와
            <br />
            자동화된 보고관리 솔루션으로 <br />
            효율화된 업무를 경험해보세요.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <SolutionSection>
        <SectionSubtitle>SOLUTION</SectionSubtitle>
        <SectionTitle>솔루션 제공 기능</SectionTitle>
        <Row>
          <Card src={image1} />
          <Content>
            <TitleRow>
              <Icon src={icon1} />
              <SubTitle>환경 데이터 자동 수집 및 입력</SubTitle>
            </TitleRow>
            <Strip />
            <Text>
              • 모바일 웹 기반으로 현장담당자가 직접 측정값 입력 및 관리 가능
              <br />
              • NOx, SOx, 먼지, THC 등의 공인된 측정항목별 유연한 입력 및 확장
              구조
              <br />• 업체관리자와 현장담당자의 권한 구분으로 데이터 입력 오류
              방지
            </Text>
          </Content>
        </Row>
        <Row>
          <SecondContent>
            <TitleRow>
              <Icon src={icon2} />
              <SubTitle>제출 보고서 자동 설정</SubTitle>
            </TitleRow>
            <Strip />
            <Text>
              • 한국환경공단 제출 규격에 맞춘 양식 자동화
              <br />
              • PDF 보고서 자동 제작 및 출력이 가능하며 전송 기능으로 직인 반영,
              제출을 한번에
              <br />• 누적 리포트, 제출 현황을 관리
            </Text>
          </SecondContent>
          <Card src={image2} />
        </Row>
        <Row>
          <Card src={image3} />
          <Content>
            <TitleRow>
              <Icon src={icon3} />
              <SubTitle>관리자 대시보드 및 모니터링</SubTitle>
            </TitleRow>
            <Strip />
            <Text>
              • 다수 시설, 사업장 관리 기능 제공
              <br />
              • 사용자 권한 설정, 현장담당자 추가, 로그 이력 확인 기능 제공
              <br />• 현장담당자별 업무 분장 관리, 실시간 알림 제공
            </Text>
          </Content>
        </Row>
      </SolutionSection>
    </MainContainer>
  );
};

export default Solution;
