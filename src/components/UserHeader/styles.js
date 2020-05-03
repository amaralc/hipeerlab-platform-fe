import styled from 'styled-components';

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -1.5rem !important;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 35px;
    }

    a {
      font-weight: bold;
      color: #38b6ff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #eee;
  align-items: center;

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 40px;
    border-radius: 10%;
  }
`;
