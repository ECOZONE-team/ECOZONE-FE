import styled from "styled-components";

export const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 76px;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.5)"};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"};
`;

export const Logo = styled.div`
  margin-left: 120px;

  img {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const MenuContainer = styled.div`
  margin-right: 120px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    margin-right: 20px;
    gap: 20px;
  }
`;

export const MenuItem = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #3498db, #74b9ff);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const LoginButton = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const AuthMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 로그인/회원가입 사이 간격 */

  p {
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const MobileMenuLine = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(6px, 6px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none"};
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 76px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuItem = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #3498db;
    padding-left: 10px;
  }

  &:last-child {
    border-bottom: none;
  }
`;
