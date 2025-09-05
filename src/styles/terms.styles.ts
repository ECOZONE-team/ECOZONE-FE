import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  margin-top: 155px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
`;

export const LeftButton = styled.img`
  width: 48px;
  height: 48px;
  vertical-align: middle;
`;

export const Divider = styled.div`
  background-color: #949494;
  width: 1201px;
  height: 1px;
  margin-bottom: 37px;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular};
  color: #282828;
  margin-bottom: 112px;
`;
