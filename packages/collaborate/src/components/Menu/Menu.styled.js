import styled from '@emotion/styled';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #17324A;
  height: calc(100vh - 75px);
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 75.5px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ showNav }) => showNav ? 'translateX(0)' : 'translateX(100%)'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: green;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: yellow;
    }
  }
`;