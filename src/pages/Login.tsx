import {
  Container,
  Logo,
  LoginBox,
  LoginTitle,
  Label,
  Input,
  LoginButton,
  Links,
  Divider,
} from "../styles/login/Login.styles";
import logo from "../assets/login/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <Label>이메일</Label>
        <Input type="email" placeholder="E-MAIL" />
        <Label>비밀번호</Label>
        <Input type="password" placeholder="PW" />
        <LoginButton>접속하기</LoginButton>
        <Links>
          <span onClick={() => navigate("/searchpw")}>비밀번호 찾기</span>
          <Divider />
          <span onClick={() => navigate("/setpw")}>비밀번호 변경</span>
        </Links>
      </LoginBox>
    </Container>
  );
};

export default Login;
