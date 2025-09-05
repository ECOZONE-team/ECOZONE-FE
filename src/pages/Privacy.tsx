import {
  Container,
  Title,
  LeftButton,
  Divider,
  HeaderRow,
  Text,
} from "../styles/terms.styles";
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderRow>
        <Title>개인정보 처리방침</Title>
        <LeftButton src={close} onClick={() => navigate("/")} />
      </HeaderRow>
      <Divider />
      <Text>
        개인정보 처리방침
        <br />
        본 개인정보 처리방침은 [회사명 또는 서비스명] (이하 ‘회사’)가 제공하는
        서비스와 관련하여, 이용자의 개인정보가 어떻게 수집·이용·보관·파기되
        <br />
        는지를 설명합니다.
        <br />
        <br />
        1. 수집하는 개인정보 항목
        <br />
        회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다:
        <br />
        필수항목: 이름, 이메일 주소, 비밀번호
        <br />
        선택항목: 전화번호, 생년월일, 프로필 이미지
        <br />
        자동수집항목: 접속 IP, 쿠키, 방문기록, 기기정보
        <br />
        <br />
        2. 개인정보의 수집 및 이용목적
        <br />
        수집된 개인정보는 다음의 목적에 활용됩니다:
        <br />
        서비스 제공 및 운영
        <br />
        회원 식별 및 본인확인
        <br />
        고객 문의 대응 및 공지사항 전달
        <br />
        마케팅 및 광고 (동의한 경우에 한함)
        <br />
        .<br />
        .<br />
        <br />
        7. 개인정보의 안전성 확보조치
        <br />
        회사는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다:
        <br />
        데이터 암호화
        <br />
        접근권한 관리
        <br />
        보안 프로그램 설치
        <br />
        <br />
        8. 개인정보 보호책임자
        <br />
        회사는 개인정보 관련 문의를 처리하기 위해 아래와 같이 개인정보
        보호책임자를 지정하고 있습니다:
        <br />
        이름: [홍길동]
        <br />
        연락처: [email@example.com]
        <br />
        <br />
        9. 정책 변경에 대한 안내
        <br />
        본 개인정보 처리방침은 법령 또는 내부 정책에 따라 변경될 수 있으며, 변경
        시 웹사이트를 통해 공지됩니다.
        <br />
      </Text>
    </Container>
  );
};

export default Privacy;
