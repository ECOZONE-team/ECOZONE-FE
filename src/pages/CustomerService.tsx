import {
  Container,
  MainBox,
  Img,
  Title,
  Content,
  CustomerBox,
  CustomerTitle,
  Strip,
  Label,
  Input,
  TextArea,
  PhoneRow,
  PhoneSelect,
  SubmitButton,
  Row,
} from "../styles/customerservice/CustomerService.styles";
import customerimg from "../assets/customerservice/customer_img.png";
import { useNavigate } from "react-router-dom";

const CustomerService = () => {
  return (
    <Container>
      <MainBox>
        <Img src={customerimg} />
        <Title>고객센터</Title>
        <Content>
          아래의 항목을 작성해주시면 <br />
          빠른 시일 내에 답변 드리겠습니다.
        </Content>
      </MainBox>

      <CustomerBox>
        <CustomerTitle>문의내용 작성</CustomerTitle>
        <Strip />
        <Row>
          <Label>업체명</Label>
          <Input type="text" placeholder="업체명을 입력해주세요." />
        </Row>

        <Row>
          <Label>성명 / 직함</Label>
          <Input type="text" placeholder="성명과 직함을 입력해주세요." />
        </Row>

        <Row>
          <Label>연락처</Label>
          <PhoneRow>
            <PhoneSelect>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
            </PhoneSelect>
            <Input type="text" placeholder="휴대폰 번호를 입력해주세요." />
          </PhoneRow>
        </Row>

        <Row>
          <Label>이메일 주소</Label>
          <Input type="text" placeholder="이메일 주소를 입력해주세요." />
        </Row>

        <Row>
          <Label>문의내용</Label>
          <TextArea placeholder="문의 내용을 입력해주세요." />
        </Row>
      </CustomerBox>
      <SubmitButton>문의하기</SubmitButton>
    </Container>
  );
};

export default CustomerService;
