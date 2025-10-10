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
  AuthMenuItem,
} from "../styles/components/Navbar.styles";
import { tokenStorage } from "../utils/token";
import axios from "axios";
import { instance } from "../api/axios";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!tokenStorage.getAccessToken());
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  useEffect(() => {
    const token = tokenStorage.getAccessToken();
    setIsLoggedIn(!!token);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const refreshToken = tokenStorage.getRefreshToken();

      await instance.post("/auth/logout");

      tokenStorage.clearTokens();
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      tokenStorage.clearTokens();
      navigate("/");
    }
  };

  const handleMenuClick = (menu: string) => {
    setIsMobileMenuOpen(false);

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
      case "로그인":
        navigate("/login");
        break;
      case "회원가입":
        navigate("/sign-up");
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
          <AuthMenuItem>
            {isLoggedIn ? (
              <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
            ) : (
              <>
                <LoginButton onClick={() => handleMenuClick("로그인")}>
                  로그인
                </LoginButton>
                <p>/</p>
                <LoginButton onClick={() => handleMenuClick("회원가입")}>
                  회원가입
                </LoginButton>
              </>
            )}
          </AuthMenuItem>

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
        {isLoggedIn ? (
          <MobileMenuItem onClick={handleLogout}>로그아웃</MobileMenuItem>
        ) : (
          <MobileMenuItem onClick={() => handleMenuClick("로그인")}>
            로그인/회원가입
          </MobileMenuItem>
        )}
      </MobileMenu>
    </>
  );
};

export default Navbar;
