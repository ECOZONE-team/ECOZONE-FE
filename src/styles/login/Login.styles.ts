import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 76px;
  background-color: #ffffff;
  min-height: 754px;
  flex-direction: column;
  width: 100vw;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 40px;
  width: 246px;
  height: 63.18px;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 592px;
  height: 465px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 100px;
`;

export const LoginTitle = styled.div`
  font-size: 20px;
  color: #3f67ef;
  margin-top: 50px;
  margin-bottom: 25px;
  font-weight: 700;
  align-items: left;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #282828;
  align-items: left;
`;

export const Input = styled.input`
  width: 392px;
  height: 46px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #f2f4f6;
  margin-top: 8px;
  margin-bottom: 28px;
  box-sizing: border-box;
  padding-left: 16px;
`;

export const LoginButton = styled.button`
  margin-top: 8px;
  width: 392px;
  height: 50px;
  background-color: #3f67ef;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #3357d4;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 12px;
  margin-top: 16px;
  margin-right: 100px;
  font-size: 0.85rem;
  color: #3f67ef;
  a {
    color: #3f67ef;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.span`
  width: 1px;
  height: 12px;
  background-color: #ccc;
  display: inline-block;
  margin: 0 4px;
`;
