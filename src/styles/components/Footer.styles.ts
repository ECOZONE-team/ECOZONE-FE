import styled from "styled-components";

export const CompanyInfo = styled.div`
  background: #282828;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CompanyText = styled.div`
  color: #ffffff;
  line-height: 1.6;
  max-width: 70%;
`;

export const CompanyName = styled.h3`
  font-size: 1.5rem;
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
  gap: 20px;
  font-weight: 500;
  margin-top: 4px;
`;
