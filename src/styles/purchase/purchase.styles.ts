export const PaymentBox = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1rem;
`;

export const Value = styled.div`
  font-size: 1.1rem;
  color: #2c3e50;
`;

export const Notice = styled.p`
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-top: 4px;
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 60px;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Strip = styled.div`
  background-color: #949494;
  width: 1201px;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const MiniStrip = styled.div`
  background-color: #949494;
  width: 389px;
  height: 2px;
  margin: 8px 0;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const PlanList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 16px;
`;

export const Plan = styled.div<{ selected: boolean }>`
  border: 2px solid ${({ selected }) => (selected ? "#3f67ef" : "#e0e0e0")};
  border-radius: 16px;
  padding: 24px;
  width: 360px;
  height: 402px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  h4 {
    font-size: 1rem;
    margin: 0 0 8px;
    color: #2c3e50;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  li {
    list-style: none;
    margin-bottom: 8px;
    color: #2c3e50;
  }

  p {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-top: 16px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 30px;

  label {
    font-weight: 500;
  }
`;

export const PlanRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;

export const PayButton = styled.button`
  align-self: flex-end;
  background: #3f67ef;
  color: white;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3357d4;
  }
`;
