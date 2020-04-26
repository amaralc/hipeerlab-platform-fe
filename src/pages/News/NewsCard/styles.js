/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/
export const CardLink = styled.a`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  height: 100px;
  padding: 12px 12px;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  position: relative;
`;

export const InfoContainer = styled.div`
  width: calc(100% - 90px);
`;

export const Image = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 6px;
  object-fit: cover;
  margin-right: 12px;
`;

export const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  height: 48;
  line-height: 16px;
  color: #333333;
`;

export const InfoDate = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 6px;
  position: absolute;
  bottom: 8px;
`;
