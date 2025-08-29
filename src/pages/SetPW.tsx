import {
  Container,
  Logo,
  LoginBox,
  LoginTitle,
  Label,
  Input,
  LoginButton,
} from "../styles/login/SetPW.styles";
import logo from "../assets/login/logo.png";
import { useNavigate } from "react-router-dom";

const Setpw = () => {
  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>비밀번호 변경</LoginTitle>
        <Label>이메일</Label>
        <Input type="email" placeholder="E-MAIL" />
        <Label>기존 비밀번호</Label>
        <Input type="password" placeholder="비밀번호 입력" />
        <Label>새 비밀번호</Label>
        <Input type="password" placeholder="비밀번호 입력" />
        <Label>새 비밀번호 확인</Label>
        <Input type="password" placeholder="비밀번호 입력" />
        <LoginButton>비밀번호 변경</LoginButton>
      </LoginBox>
    </Container>
  );
};

export default Setpw;
