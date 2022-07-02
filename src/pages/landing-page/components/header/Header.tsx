import React from 'react';
import styled from 'styled-components';
import { ContainerMain } from '../../../../components/Container';
import { InstagramIcon } from '../../../../assets/svg/instagram-icon';

const Wrapper = styled.div`
  background: green;
  color: white;
`;

const Container = styled(ContainerMain)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const Logo = styled.div`
  background: pink;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Menu = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const MenuItem = styled.div`
  text-transform: uppercase;
  color: white;
  text-align: center;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Menu>
          <MenuItem>small course</MenuItem>
          <MenuItem>my story</MenuItem>
          <MenuItem>recipes</MenuItem>
          <MenuItem>e-books</MenuItem>
          <MenuItem>courses</MenuItem>
        </Menu>
        <div>
          <InstagramIcon />
          <InstagramIcon />
          <InstagramIcon />
        </div>
      </Container>
    </Wrapper>
  );
};
