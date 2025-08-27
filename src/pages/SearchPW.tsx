import {
  Container,
  Logo,
  LoginBox,
  LoginTitle,
  Label,
  Input,
  LoginButton,
  Content,
} from "../styles/login/SearchPW.styles";
import logo from "../assets/login/logo.png";
import { useNavigate } from "react-router-dom";

const Searchpw = () => {
  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>비밀번호 찾기</LoginTitle>
        <Content>
          비밀번호 찾기를 진행하신다면,
          <br />
          등록된 이메일(ID)로 임시 비밀번호가 발송됩니다.
        </Content>
        <Content>
          <b>등록 이메일(ID)을 입력해주세요.</b>
        </Content>
        <Label>이메일</Label>
        <Input type="email" placeholder="E-MAIL" />
        <LoginButton>임시 비밀번호 발급</LoginButton>
      </LoginBox>
    </Container>
  );
};

export default Searchpw;
