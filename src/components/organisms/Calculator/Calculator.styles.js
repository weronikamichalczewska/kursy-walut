import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 52px 20px 20px;

  position: absolute;
  width: 670px;
  height: 290px;
  right: 633px;
  top: 132px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  flex-wrap: wrap;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 74px 16px 15px;
  margin: 10px 0;
  width: 158px;
  height: 67px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Code = styled.div`
  margin: 0 10px 0 10px;
  text-transform: uppercase;
  color: #ecf1f0;
`;

export const Input = styled.input`
  padding: 16px 74px 16px 30px;
  margin: 0 10px;
  width: 260px;
  height: 67px;
  color: white;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Button = styled.button`
  padding: 16px 24px;
  margin: 20px 0 15px auto;
  width: 190px;
  height: 56px;
  color: white;
  cursor: pointer;
  background: #0fae96;
  border-radius: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 30%;
  left: 45%;
  background: #1b0b26;
  user-select: none;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Flag = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
`;

export const Image = styled.img`
  margin: 4px 4px 16px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin: 4px;
  border-radius: 50%;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  opacity: 100;
  width: 156px;
  max-height: 100px;
  padding: 5px 74px 5px 15px;
  margin: 5px auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  transition: all 0.2s;

  &:hover {
    background: #160622;
  }
`;
