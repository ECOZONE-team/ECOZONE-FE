import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 1878px;
  flex-direction: column;
  width: 100vw;
`;

export const MainBox = styled.div`
  width: 100vw;
  height: 566px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 100vw;
  height: 566px;
  object-fit: cover;
`;

export const Title = styled.h1`
  position: absolute;
  top: 178px;
  left: 120px;
  font-size: 48px;
  font-weight: bold;
  color: #282828;
`;

export const Content = styled.p`
  position: absolute;
  top: 261px;
  left: 120px;
  font-size: 20px;
  color: #282828;
  text-align: left;
`;

export const CustomerBox = styled.div`
  width: 1201px;
  height: 1022px;
`;

export const CustomerTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Strip = styled.hr`
  width: 1201px;
  align-item: center;
  border: none;
  border-top: 1px solid #949494;
  margin-bottom: 57px;
`;

export const Label = styled.label`
  flex-shrink: 0;
  font-size: 20px;
  font-weight: bold;
  width: 97px;
  text-align: left;
  margin-left: 64px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding-left: 40px;
  width: 997px;
  height: 90px;
  border: 1px solid #e4e9ec;
  border-radius: 10px;
  font-size: 20px;
  background-color: #f2f4f6;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 998px;
  height: 364px;
  padding: 38px;
  font-size: 20px;
  border: 1px solid #e4e9ec;
  border-radius: 10px;
  resize: none;
  background-color: #f2f4f6;
`;

export const PhoneRow = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 997px;
  gap: 16px;
  align-items: center;
`;

export const PhoneSelect = styled.select`
  box-sizing: border-box;
  padding-left: 40px;
  width: 186px;
  height: 90px;
  font-size: 20px;
  border: 1px solid #e4e9ec;
  border-radius: 10px;
  background-color: #f2f4f6;
`;

export const SubmitButton = styled.button`
  width: 288px;
  height: 50px;
  background-color: #3f67ef;
  color: white;

  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin-top: 44px;
  cursor: pointer;
  margin-left: 913px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
  gap: 43px;
`;
