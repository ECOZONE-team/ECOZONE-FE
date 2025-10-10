import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../api/axios";

const Success: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const paymentKey = query.get("paymentKey");
  const orderId = query.get("orderId");
  const amount = query.get("amount");
  const [message, setMessage] = useState("결제 확인 중입니다...");

  useEffect(() => {
    const confirmPayment = async () => {
      if (!paymentKey || !orderId || !amount) {
        setMessage("결제 정보가 부족합니다.");
        return;
      }

      try {
        const res = await instance.post(
          "/payments/confirm",
          { paymentKey, orderId, amount: Number(amount) },
          { headers: { "Idempotency-Key": `${orderId}-${Date.now()}` } }
        );

        setMessage(`결제 성공! PaymentId: ${res.data.paymentId}`);
      } catch (err) {
        console.error(err);
        setMessage("결제 확인 중 오류가 발생했습니다.");
      }
    };

    confirmPayment();
  }, [paymentKey, orderId, amount]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>결제 성공</h1>
      <p>{message}</p>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Success;
