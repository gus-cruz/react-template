import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.regular};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p { margin-top: 16px; cursor: default; }
  .fire { transition: all 0.2s ease-in; width: 160px; &:hover { transform: scale(1.1); } }
`;