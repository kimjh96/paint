import React, { PropsWithChildren } from 'react';
import { styled } from 'src/theme';

const BasedIconButton = styled.button`
  padding: 8px;
  background-color: ${({ theme: { palette } }) => palette.neutral};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomIconButton = styled(BasedIconButton)<{ square?: boolean; padding?: string }>`
  ${({ square }) =>
    square &&
    `
    border-radius: 0;
  `};
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
  `};
`;

type IconButtonProps = {
  square?: boolean;
  padding?: string;
};

function IconButton({ children, square, padding }: PropsWithChildren<IconButtonProps>) {
  return (
    <CustomIconButton square={square} padding={padding}>
      {children}
    </CustomIconButton>
  );
}

export default IconButton;
