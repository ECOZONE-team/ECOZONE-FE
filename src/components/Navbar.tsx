import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/main/logo.png";
import {
  Nav,
  Logo,
  MenuContainer,
  MenuItem,
  LoginButton,
  MobileMenuButton,
  MobileMenuLine,
  MobileMenu,
  MobileMenuItem,
} from "../styles/components/Navbar.styles";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ 추가

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menu: string) => {
    setIsMobileMenuOpen(false);

    // ✅ 각 메뉴에 맞는 라우트로 이동
    switch (menu) {
      case "솔루션 소개":
        navigate("/solution");
        break;
      case "요금제 및 구매":
        navigate("/pricing");
        break;
      case "고객센터":
        navigate("/customer-service");
        break;
      case "로그인/회원가입":
        navigate("/login");
        break;
    }
  };

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <Logo onClick={() => navigate("/")}>
          <img src={logoImage} alt="EcoZone Logo" />
        </Logo>

        <MenuContainer>
          <MenuItem onClick={() => handleMenuClick("솔루션 소개")}>
            솔루션 소개
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("요금제 및 구매")}>
            요금제 및 구매
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("고객센터")}>
            고객센터
          </MenuItem>
          <LoginButton onClick={() => handleMenuClick("로그인/회원가입")}>
            로그인/회원가입
          </LoginButton>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <MobileMenuLine isOpen={isMobileMenuOpen} />
            <MobileMenuLine isOpen={isMobileMenuOpen} />
            <MobileMenuLine isOpen={isMobileMenuOpen} />
          </MobileMenuButton>
        </MenuContainer>
      </Nav>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuItem onClick={() => handleMenuClick("솔루션 소개")}>
          솔루션 소개
        </MobileMenuItem>
        <MobileMenuItem onClick={() => handleMenuClick("요금제 및 구매")}>
          요금제 및 구매
        </MobileMenuItem>
        <MobileMenuItem onClick={() => handleMenuClick("고객센터")}>
          고객센터
        </MobileMenuItem>
        <MobileMenuItem onClick={() => handleMenuClick("로그인/회원가입")}>
          로그인/회원가입
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
};

export default Navbar;
