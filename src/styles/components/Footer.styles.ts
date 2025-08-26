import styled from "styled-components";

export const CompanyInfo = styled.div`
  background: #282828;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 120px;
  width: 100vw;
  box-sizing: border-box;
  height: 250px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 40px 20px;
  }
`;

export const CompanyText = styled.div`
  color: #ffffff;
  max-width: 600px;
`;

export const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const CompanyDetails = styled.p`
  margin: 0;
`;

export const CompanyLinks = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  text-align: right;

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
