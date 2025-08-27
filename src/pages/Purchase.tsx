import { useState } from "react";
import {
  Wrapper,
  Section,
  Title,
  PlanList,
  Plan,
  PlanRadio,
  PaymentBox,
  Row,
  Label,
  Value,
  Notice,
  RadioGroup,
  PayButton,
  Strip,
} from "../styles/purchase/purchase.styles";

const Purchase = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  return (
    <Wrapper>
      <Section>
        <Title>솔루션 구매하기</Title>
        <Strip />
        <PlanList>
          <Plan
            selected={selectedPlan === "standard"}
            onClick={() => setSelectedPlan("standard")}
          >
            <h4>팀 최대 2개</h4>
            <h4>현장담당자 최대 5명</h4>
            <ul>
              <li>✓ 관리 시스템</li>
              <li>✓ 데이터 입력 관리</li>
              <li>✓ 보고서 PDF 변환</li>
              <li>✓ 보고서 자동 제출 (월 100건 이내)</li>
            </ul>
            <p>
              소규모 환경측정 대행사와 작은 사업장을 정직히 관리하고자 하는 기업
            </p>
          </Plan>

          <Plan
            selected={selectedPlan === "pro"}
            onClick={() => setSelectedPlan("pro")}
          >
            <h4>팀 최대 5개</h4>
            <h4>현장담당자 최대 12명</h4>
            <ul>
              <li>✓ 관리 시스템</li>
              <li>✓ 데이터 입력 관리</li>
              <li>✓ 보고서 PDF 변환</li>
              <li>✓ 전자 서명</li>
              <li>✓ 보고서 자동 제출 (월 300건 이내)</li>
            </ul>
            <p>
              업무 자동화를 확장하고 데이터 관리 정확도와 업무 속도를 높이고
              싶은 기업
            </p>
          </Plan>

          <Plan
            selected={selectedPlan === "enterprise"}
            onClick={() => setSelectedPlan("enterprise")}
          >
            <h4>팀 제한 없음</h4>
            <h4>현장담당자 제한 없음</h4>
            <ul>
              <li>✓ 관리 시스템</li>
              <li>✓ 데이터 입력 관리</li>
              <li>✓ 보고서 PDF 변환</li>
              <li>✓ 전자 서명</li>
              <li>✓ 보고서 자동 제출 (무제한)</li>
              <li>✓ AI 이상 탐지</li>
              <li>✓ 실시간 알림</li>
            </ul>
            <p>전사 환경관리 체계를 구축하고 싶은 기업을 위한 맞춤 솔루션</p>
          </Plan>
        </PlanList>

        <RadioGroup>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "standard"}
              onChange={() => setSelectedPlan("standard")}
            />
            Standard 플랜 (299,000원/월)
          </PlanRadio>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "pro"}
              onChange={() => setSelectedPlan("pro")}
            />
            Pro 플랜 (699,000원/월)
          </PlanRadio>
          <PlanRadio>
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === "enterprise"}
              onChange={() => setSelectedPlan("enterprise")}
            />
            Enterprise 플랜 (1,299,000원/월)
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
                <input type="radio" name="pay" defaultChecked /> 신용카드
              </label>
              <label>
                <input type="radio" name="pay" /> 계좌이체
              </label>
            </div>
          </Row>
          <PayButton>결제하기</PayButton>
        </PaymentBox>
      </Section>
    </Wrapper>
  );
};

export default Purchase;
