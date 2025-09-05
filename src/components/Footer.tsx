import { useNavigate } from "react-router-dom";
import {
  CompanyInfo,
  CompanyName,
  CompanyDetails,
  CompanyText,
  CompanyLinks,
} from "../styles/components/Footer.styles";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <CompanyInfo>
      <CompanyText>
        <CompanyName>(주)로터스커넥션</CompanyName>
        <CompanyDetails>
          대표 : 정인수 &nbsp;&nbsp;&nbsp; 사업자 등록번호 : 748-88-02734
          <br />
          주소 : 경상북도 구미시 형곡서로1길 27-1, 2층 2에이-29호(형곡동)
          <br />
          통신판매업 신고번호 : 2025-경북구미-02341
        </CompanyDetails>
      </CompanyText>
      <CompanyLinks>
        <span onClick={() => navigate("/terms")}>서비스 이용약관</span>
        <span onClick={() => navigate("/privacy")}>개인정보처리방침</span>
      </CompanyLinks>
    </CompanyInfo>
  );
};

export default Footer;
