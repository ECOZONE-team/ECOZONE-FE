import {
  Container,
  Title,
  LeftButton,
  Divider,
  Text,
  HeaderRow,
} from "../styles/terms.styles";
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderRow>
        <Title>서비스 이용약관</Title>
        <LeftButton src={close} onClick={() => navigate("/")} />
      </HeaderRow>
      <Divider />
      <Text>
        서비스 이용약관 <br />
        본 약관은 [회사명 또는 서비스명] (이하 ‘회사’)가 제공하는 서비스의
        이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한
        사항
        <br />을 규정함을 목적으로 합니다.
        <br />
        <br />
        제1조 <br />
        (목적) 이 약관은 회사가 제공하는 모든 서비스의 이용과 관련하여, 회사와
        회원 간의 권리, 의무 및 책임사항, 이용조건 및 절차 등을 규정합니다.
        <br />
        <br />
        제2조 (용어의 정의)
        <br />
        "회원"이란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.
        <br />
        "서비스"란 회사가 온라인 또는 모바일을 통해 제공하는 모든 서비스를
        의미합니다.
        <br />
        "콘텐츠"란 회사가 서비스상 제공하는 모든 데이터, 텍스트, 이미지, 영상
        등을 말합니다.
        <br />
        <br />
        제3조 (약관의 효력 및 변경)
        <br />
        본 약관은 서비스 초기 화면 또는 연결화면에 게시함으로써 효력을
        발생합니다.
        <br />
        회사는 관련 법령을 위배하지 않는 범위 내에서 약관을 개정할 수 있으며,
        변경된 약관은 사전에 공지합니다.
        <br />
        <br />
        제4조 (이용계약의 체결)
        <br />
        이용자는 본 약관에 동의함으로써 서비스 이용계약이 성립됩니다.
        <br />
        회사는 특정 회원의 이용 신청에 대해 제한할 수 있습니다 (예: 허위 정보
        제공, 서비스 이용 정지 이력 등).
        <br />
        .<br />
        .<br />
        제8조 (지적재산권) 서비스에 포함된 모든 콘텐츠 및 자료의 저작권은 회사
        또는 제공자에게 있으며, 무단 복제 및 배포를 금지합니다.
        <br />
        <br />
        제9조 (책임 제한) 회사는 다음 사항에 대해 책임을 지지 않습니다:
        <br />
        회원의 귀책사유로 인한 서비스 이용 장애
        <br />
        회원 간 분쟁
        <br />
        제3자에 의한 불법적인 접근 및 사용
        <br />
        <br />
        제10조 (분쟁 해결)
        <br />
        이용약관과 관련한 분쟁은 회사의 소재지를 관할하는 법원을 1심 법원으로
        합니다.
        <br />
      </Text>
    </Container>
  );
};

export default Terms;
