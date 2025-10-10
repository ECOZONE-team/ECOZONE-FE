import { useState, useEffect } from "react";
import {
  Wrapper,
  Section,
  Title,
  PlanList,
  PricingCard,
  Check,
  FeatureItem,
  FeatureText,
  PaymentBox,
  MiniStrip,
  B,
  PayButton,
  Row,
  Label,
  Value,
  Notice,
  RadioGroup,
  PlanPeriod,
  PlanFeatures,
  PlanRadio,
  Strip,
  PurchaseDetail,
} from "../styles/purchase/purchase.styles";
import check from "../assets/pricing/check.png";
import TossPaymentWidget from "../components/TossPayment";

const Purchase = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [payMethod, setPayMethod] = useState("card");
  const [showWidget, setShowWidget] = useState(false);

  const getAmount = () => {
    if (selectedPlan === "standard") return 299000;
    if (selectedPlan === "pro") return 699000;
    if (selectedPlan === "enterprise") return 1299000;
    return 0;
  };

  const handleShowWidget = () => {
    setShowWidget(true);
  };

  return (
    <Wrapper>
      <Section>
        <Title>솔루션 구매하기</Title>
        <Strip />
        <PlanList>
          <PricingCard>
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
        </PlanList>

        <RadioGroup>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "standard"}
              onChange={() => setSelectedPlan("standard")}
            />
            Standard 플랜 <br /> (299,000원/월)
            <MiniStrip />
            <PurchaseDetail>
              소규모 환경측정 대행사로 작은 사업장들을 정확히 <br />
              관리하고 싶은 기업
            </PurchaseDetail>
          </PlanRadio>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "pro"}
              onChange={() => setSelectedPlan("pro")}
            />
            Pro 플랜 <br /> (699,000원/월)
            <MiniStrip />
            <PurchaseDetail>
              업무 자동화로 환경측정 데이터 관리 정확도와 업무 속도를
              <br />
              높이고 싶은 기업
            </PurchaseDetail>
          </PlanRadio>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "enterprise"}
              onChange={() => setSelectedPlan("enterprise")}
            />
            Enterprise 플랜 <br /> (1,299,000원/월)
            <MiniStrip />
            <PurchaseDetail>
              전사적 환경관리 체계를 구축하고 싶은 기업을 위한
              <br />
              맞춤 솔루션{" "}
            </PurchaseDetail>
          </PlanRadio>
        </RadioGroup>
      </Section>

      <Section>
        <Title>결제하기</Title>
        <PaymentBox>
          <Row>
            <Label>선택 플랜</Label>
            <Value>
              {selectedPlan === "standard" && "Standard 플랜 (299,000원/월)"}
              {selectedPlan === "pro" && "Pro 플랜 (699,000원/월)"}
              {selectedPlan === "enterprise" &&
                "Enterprise 플랜 (1,299,000원/월)"}
            </Value>
          </Row>
          <Row>
            <Label>제공 기간</Label>
            <Value>
              2025.04.23 - 2025.05.22 (30일간)
              <Notice>
                * 마지막 결제일의 23:59분까지 서비스 제공되며, 자동연장 시,
                서비스가 자동 연장됩니다.
              </Notice>
            </Value>
          </Row>
          <Row>
            <Label>결제 방법</Label>
            <div style={{ display: "flex", gap: "24px" }}>
              <label>
                <input
                  type="radio"
                  name="pay"
                  defaultChecked
                  checked={payMethod === "card"}
                  onChange={() => setPayMethod("card")}
                />{" "}
                신용카드
              </label>
              <label>
                <input
                  type="radio"
                  name="pay"
                  checked={payMethod === "bank"}
                  onChange={() => setPayMethod("bank")}
                />{" "}
                계좌이체
              </label>
            </div>
          </Row>

          {!showWidget ? (
            <PayButton onClick={handleShowWidget}>결제하기</PayButton>
          ) : (
            <TossPaymentWidget
              amount={getAmount()}
              selectedPlan={selectedPlan}
            />
          )}
        </PaymentBox>
      </Section>
    </Wrapper>
  );
};

export default Purchase;
