import React, { ReactElement, PropsWithChildren } from 'react';

import {
  Wrapper,
  Toolbar,
  Content
} from 'components/templates/GenericTemplate/GenericTemplate.styles';

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
