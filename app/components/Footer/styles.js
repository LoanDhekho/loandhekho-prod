import styled from 'styled-components';

// Footer Section
export const FooterContainer = styled.footer`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
  font-family: 'Motiva Sans Light', sans-serif;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

// Title Style
export const Title = styled.h4`
  font-size: 22px;
  color: #18216d;
  text-transform: capitalize;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 414px) {
    font-size: 18px;
  }
`;

// Navigation Link Style
export const NavLink = styled.a`
  display: block;
  font-size: 1rem;
  color: #2E186A;
  margin-bottom: 0.625rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #15418e;
  }
`;

// Extra Section (For copyright and language switch)
export const Extra = styled.section`
  background: rgb(241, 242, 243);
  padding-bottom: 2rem;
  margin-top: 3rem;
`;

// Logo and Copyright Section
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Copyright Text
export const Para = styled.div`
  color: #18216d;
  font-size: 14px;
  width: 70%;
  text-align: left;
`;

// Chat Section
export const Chat = styled.p`
  color: #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgb(255, 130, 92);
    border-bottom: 1px solid rgb(255, 130, 92);
  }
`;

// Language Section
export const Language = styled.h4`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  margin: 0;

  @media screen and (max-width: 414px) {
    font-size: 18px;
  }
`;

// Language Switch Container
export const LanguageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85px;
  margin-top: 1rem;
`;

// Language Switch Item
export const LanguageSwitch = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #15418e;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: rgb(255, 130, 92);
  }
`;
