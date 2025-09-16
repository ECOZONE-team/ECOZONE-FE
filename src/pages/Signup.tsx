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
import { useState } from "react";
import { instance } from "../api/axios";

const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await instance.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert("회원가입 성공!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <Logo src={logo} />
      <LoginBox>
        <LoginTitle>회원가입</LoginTitle>
        <Label>이름</Label>
        <Input
          name="name"
          type="text"
          placeholder="이름 입력"
          value={form.name}
          onChange={handleChange}
        />
        <Label>이메일</Label>
        <Input
          name="email"
          type="email"
          placeholder="E-MAIL"
          value={form.email}
          onChange={handleChange}
        />
        <Label>비밀번호</Label>
        <Input
          name="password"
          type="password"
          placeholder="비밀번호 입력"
          value={form.password}
          onChange={handleChange}
        />
        <Label>비밀번호 확인</Label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="비밀번호 입력"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <LoginButton onClick={handleSubmit}>회원가입</LoginButton>
      </LoginBox>
    </Container>
  );
};

export default Signup;
