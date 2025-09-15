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

const Signup = () => {
  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>회원가입</LoginTitle>
        <Label>이름</Label>
        <Input type="text" placeholder="이름 입력" />
        <Label>이메일</Label>
        <Input type="email" placeholder="E-MAIL" />
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호 입력" />
        <Label>비밀번호 확인</Label>
        <Input type="password" placeholder="비밀번호 입력" />
        <LoginButton>회원가입</LoginButton>
      </LoginBox>
    </Container>
  );
};

export default Signup;
