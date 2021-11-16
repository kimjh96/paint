import { styled } from 'src/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Toolbar = styled.section``;

export const Content = styled.main`
  flex-grow: 1;

  & > canvas {
    width: 100%;
    height: 100%;
  }
`;
