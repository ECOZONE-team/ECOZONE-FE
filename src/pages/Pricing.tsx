import React from "react";
import {
  B,
  PricingContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButton,
  PricingSection,
  SectionTitle,
  PricingCards,
  PricingCard,
  PlanName,
  PlanPrice,
  PlanPeriod,
  PlanFeatures,
  FeatureItem,
  FeatureText,
  FeaturesSection,
  FeaturesTable,
  TableRow,
  TableFeature,
  TableCell,
  PaymentSection,
  PaymentTitle,
  PaymentButton,
  PaymentMethods,
  PaymentMethod,
  PaymentIcon,
  PaymentLabel,
  SectionSubtitle,
  Strip,
  Check,
} from "../styles/pricing/pricing.styles";
import img1 from "../assets/pricing/credit_score.png";
import img2 from "../assets/pricing/credit_card_clock.png";
import img3 from "../assets/pricing/receipt_long.png";
import check from "../assets/pricing/check.png";
import { useNavigate } from "react-router-dom";

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PricingContainer>
      {/* 히어로 섹션 */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>에코존(Eco-Zone) 요금 안내</HeroTitle>
          <HeroDescription>
            필요한만큼, 단계별로 맞춤 선택하세요.
            <br />
            사업장별 인원수와 기능에 따라 선택가능한 요금제,
            <br />
            그리고 요금제와 연동되는 자동화 기능을 제공합니다.
          </HeroDescription>
          <HeroButton onClick={() => navigate("/purchase")}>
            구매하기
          </HeroButton>
        </HeroContent>
      </HeroSection>

      {/* 요금제 섹션 */}
      <PricingSection>
        <SectionSubtitle>PRCING</SectionSubtitle>
        <SectionTitle>요금제별 기능 비교</SectionTitle>

        <PricingCards>
          {/* Standard 플랜 */}
          <PricingCard>
            <PlanName>Standard</PlanName>
            <PlanPrice>299,000원</PlanPrice>
            <Strip />
            <PlanPeriod>
              팀 최대 <B>2개</B> <br />
              현장담당자 최대 <B>5명</B>
            </PlanPeriod>

            <PlanFeatures>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 관리 시스템
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 데이터 입력 관리
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 PDF 변환
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 자동 제출 <B>(월 100건 이내)</B>
                </FeatureText>
              </FeatureItem>
            </PlanFeatures>
          </PricingCard>

          {/* Pro 플랜 */}
          <PricingCard>
            <PlanName>Pro</PlanName>
            <PlanPrice>699,000원</PlanPrice>
            <Strip />
            <PlanPeriod>
              팀 최대 <B>5개</B>
              <br />
              현장담당자 최대 <B>12명</B>
            </PlanPeriod>

            <PlanFeatures>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 관리 시스템
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 데이터 입력 관리
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 PDF 생성
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> <B>전자서명</B>
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 자동 제출 <B>(월 300건 이내)</B>
                </FeatureText>
              </FeatureItem>
            </PlanFeatures>
          </PricingCard>

          {/* Enterprise 플랜 */}
          <PricingCard>
            <PlanName>Enterprise</PlanName>
            <PlanPrice>1,299,000원</PlanPrice>
            <Strip />
            <PlanPeriod>
              팀 <B>제한 없음</B>
              <br />
              현장담당자 <B>제한 없음</B>
            </PlanPeriod>

            <PlanFeatures>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 관리 시스템
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 데이터 입력 관리
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 PDF 변환
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> <B>전자서명</B>
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> 보고서 자동 제출 <B>(무제한)</B>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureText>
                  <Check src={check} /> <B> AI 이상 탐지</B>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureText>
                  <Check src={check} />
                  <B>실시간 알림</B>
                </FeatureText>
              </FeatureItem>
            </PlanFeatures>
          </PricingCard>
        </PricingCards>
      </PricingSection>

      {/* 기능별 상세 비교 섹션 */}
      <FeaturesSection>
        <SectionTitle>기능별 옵션 비교 안내</SectionTitle>

        <FeaturesTable>
          <TableRow header>
            <TableFeature header>항목</TableFeature>
            <TableCell header>세부 내용</TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>관리 시스템</TableFeature>
            <TableCell>업체 관리 시스템 계정 제공</TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>데이터 입력 관리</TableFeature>
            <TableCell>
              측정 사업장, 사업장 내 시설, 측정 데이터 입력 및 관리 기능 제공
            </TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>보고서 PDF 변환</TableFeature>
            <TableCell>보고서 자동 제작 및 PDF 변환(출력) 기능 제공</TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>보고서 자동 제출</TableFeature>
            <TableCell>
              생성 완료된 PDF 보고서를 이메일 또는 팩스로 자동 전송 기능 제공
            </TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>전자 서명</TableFeature>
            <TableCell>보고서에 전자 서명(또는 직인) 적용 기능 제공</TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>AI 이상 탐지</TableFeature>
            <TableCell>
              AI 기반 사업장 내 시설별 이상징후 탐지 및 모니터링 기능 제공
            </TableCell>
          </TableRow>

          <TableRow>
            <TableFeature>실시간 알림</TableFeature>
            <TableCell>
              현장 담당자에게 업무 내용을 실시간 고지하고 이를 알림, 확인할 수
              있는 기능 제공
            </TableCell>
          </TableRow>
        </FeaturesTable>
      </FeaturesSection>

      {/* 결제 지원 방법 섹션 */}
      <PaymentSection>
        <PaymentTitle>결제 지원 방법</PaymentTitle>
        <PaymentButton onClick={() => navigate("/purchase")}>
          구매하기
        </PaymentButton>

        <PaymentMethods>
          <PaymentMethod>
            <PaymentIcon src={img1} />
            <PaymentLabel>카드 또는 계좌이체</PaymentLabel>
          </PaymentMethod>

          <PaymentMethod>
            <PaymentIcon src={img2} />
            <PaymentLabel>
              정기결제 (자동결제)
              <br />
              API 연동 지원
            </PaymentLabel>
          </PaymentMethod>

          <PaymentMethod>
            <PaymentIcon src={img3} />
            <PaymentLabel>
              세금계산서 발행 지원
              <br />
              (월별, 15일 기준)
            </PaymentLabel>
          </PaymentMethod>
        </PaymentMethods>
      </PaymentSection>
    </PricingContainer>
  );
};

export default Pricing;
