import React, { useEffect, useRef } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";

interface TossPaymentWidgetProps {
  amount: number;
  selectedPlan: string;
}

const TossPaymentWidget: React.FC<TossPaymentWidgetProps> = ({
  amount,
  selectedPlan,
}) => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);

  const TOSS_CLIENT_KEY = import.meta.env.VITE_TOSS_CLIENT_KEY!;
  // 테스트 후 삭제
  console.log("TOSS_CLIENT_KEY:", TOSS_CLIENT_KEY);
  const CUSTOMER_KEY = "test_customer_1234";

  // Toss SDK 로드 및 초기 렌더링
  useEffect(() => {
    (async () => {
      try {
        const widget = await loadPaymentWidget(TOSS_CLIENT_KEY, CUSTOMER_KEY);
        paymentWidgetRef.current = widget;

        const methods = widget.renderPaymentMethods("#payment-widget", {
          value: amount,
          currency: "KRW",
        });
        paymentMethodsRef.current = methods;

        widget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });
      } catch (error) {
        console.error("❌ TossPayments 로드 실패:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const widget = await loadPaymentWidget(TOSS_CLIENT_KEY, CUSTOMER_KEY);
        paymentWidgetRef.current = widget;

        // 최초 렌더링
        const methods = widget.renderPaymentMethods("#payment-widget", {
          value: amount,
          currency: "KRW",
        });
        paymentMethodsRef.current = methods;

        widget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });
      } catch (error) {
        console.error("❌ TossPayments 로드 실패:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (paymentWidgetRef.current) {
      paymentWidgetRef.current.renderPaymentMethods("#payment-widget", {
        value: amount,
        currency: "KRW",
      });
    }
  }, [amount]);

  const handlePayment = async () => {
    const widget = paymentWidgetRef.current;
    if (!widget) {
      alert("결제 위젯이 아직 준비되지 않았습니다.");
      return;
    }

    try {
      await widget.requestPayment({
        orderId: `order_${Date.now()}`,
        orderName: `${selectedPlan} 플랜 결제`,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
        customerEmail: "customer123@gmail.com",
        customerName: "홍길동",
        customerMobilePhone: "01012345678",
      });
    } catch (error) {
      console.error("❌ 결제 요청 실패:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div id="payment-widget" />
      <div id="agreement" style={{ marginTop: "16px" }} />
      <button
        onClick={handlePayment}
        style={{
          marginTop: "24px",
          width: "100%",
          padding: "14px 0",
          background: "#0064FF",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {`${amount.toLocaleString()}원 결제하기`}
      </button>
    </div>
  );
};

export default TossPaymentWidget;
