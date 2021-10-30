import React, { PropsWithChildren } from 'react';
import { styled } from 'src/theme';

const Wrapper = styled.div`
  display: inline-block;
  padding: 8px;
  background-color: ${({ theme: { palette } }) => palette.neutral};
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

function IconButton({ children }: PropsWithChildren<{}>) {
  return <Wrapper>{children}</Wrapper>;
}

export default IconButton;
