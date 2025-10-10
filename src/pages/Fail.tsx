import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../api/axios";

const Fail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const paymentKey = query.get("paymentKey");
  const orderId = query.get("orderId");
  const amount = query.get("amount");
  const [message, setMessage] = useState("결제가 실패했습니다.");

  useEffect(() => {
    const cancelPayment = async () => {
      if (!paymentKey || !orderId || !amount) return;

      try {
        const confirmRes = await instance.post(
          "/payments/confirm",
          { paymentKey, orderId, amount: Number(amount) },
          { headers: { "Idempotency-Key": `${orderId}-${Date.now()}` } }
        );

        const paymentId = confirmRes.data.paymentId;

        await instance.post(`/payments/${paymentId}/cancel`, {
          reason: "결제 실패",
        });

        setMessage("결제가 실패하여 결제가 취소되었습니다.");
      } catch (err) {
        console.error(err);
        setMessage("결제 실패 및 취소 중 오류가 발생했습니다.");
      }
    };

    cancelPayment();
  }, [paymentKey, orderId, amount]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>결제 실패</h1>
      <p>{message}</p>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Fail;
