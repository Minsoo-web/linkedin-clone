import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="/images/nav-home.svg" alt="nav-home-img" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-work.svg" alt="nav-work-img" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-jobs.svg" alt="nav-jobs-img" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-messaging.svg" alt="nav-messaging-img" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-notifications.svg" alt="nav-notifications-img" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="user-svg" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="down-svg" />
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="work-svg" />
                <span>Work</span>
                <img src="/images/down-icon.svg" alt="down-svg" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 24px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 200px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      height: 34px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border: 1px solid #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  &.active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    min-height: 53px;
    min-width: 80px;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
`;
