import React, { ReactElement, PropsWithChildren } from 'react';
import { styled } from 'src/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Toolbar = styled.section``;

const Content = styled.main`
  flex-grow: 1;

  & > canvas {
    width: 100%;
    height: 100%;
  }
`;

type GenericTemplateProps = {
  toolbar: ReactElement;
};

function GenericTemplate({ children, toolbar }: PropsWithChildren<GenericTemplateProps>) {
  return (
    <Wrapper>
      <Toolbar>{toolbar}</Toolbar>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default GenericTemplate;
