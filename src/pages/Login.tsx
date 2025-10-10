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
import { useState } from "react";
import { instance } from "../api/axios";
import { tokenStorage } from "../utils/token";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const res = await instance.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      console.log("로그인 성공:", res.data);

      const { accessToken, refreshToken, tokenType, expiresInSeconds } =
        res.data;

      tokenStorage.setTokens(accessToken, refreshToken);

      alert("로그인 성공!");
      navigate("/");
    } catch (err: any) {
      console.error("로그인 실패:", err);
      if (err.response?.status === 401) {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        alert("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <Label>이메일</Label>
        <Input
          type="email"
          placeholder="E-MAIL"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Label>비밀번호</Label>
        <Input
          type="password"
          placeholder="PW"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <LoginButton onClick={handleSubmit}>접속하기</LoginButton>
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
