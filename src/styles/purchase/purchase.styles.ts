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
  margin-bottom: 44px;
`;

export const MiniStrip = styled.div`
  background-color: #282828;
  width: 389px;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
  margin-bottom: 20px;
`;

export const PlanList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 1201px;
  gap: 17px;
  margin: 0 auto;
  margin-bottom: 99px;
`;

export const PricingCard = styled.div`
  width: 389px;
  height: 402px;
  background: white;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  position: relative;
`;

export const PlanName = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
  color: #2c3e50;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const PlanPrice = styled.div`
  ${({ theme }) => theme.fonts.bodyEmphasis};
  color: #3f67ef;
  margin-bottom: 16px;
`;

export const B = styled.div`
  color: #3f67ef;
  ${({ theme }) => theme.fonts.detailEmphasis};
  position: relative;
  display: inline-block;
`;
export const Check = styled.img`
  margin-right: 1px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

export const PlanPeriod = styled.p`
  ${({ theme }) => theme.fonts.detailRegular};
  color: #282828;
  margin-left: 32px;
  margin-bottom: 32px;
  margin-top: 40px;
  text-align: left;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const FeatureItem = styled.li`
  margin-bottom: 8px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeatureText = styled.span`
  font-size: 16px;
  color: #2c3e50;
  font-weight: 500;
`;

export const FeatureLink = styled.span`
  font-size: 0.9rem;
  color: #3498db;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const PurchaseDetail = styled.div`
  ${({ theme }) => theme.fonts.detailRegular};
  color: #676767;
`;

export const Plan = styled.div<{ selected: boolean }>`
  border: 2px solid ${({ selected }) => (selected ? "#3f67ef" : "#e0e0e0")};
  border-radius: 16px;
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
  gap: 16px;
  margin-top: 20px;
`;

export const PlanRadio = styled.div`
  display: flex;
  align-items: flex-start;
  width: 389px;
  flex-direction: column;
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
