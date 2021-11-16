import React, { PropsWithChildren } from 'react';

import { StyledIconButton } from 'components/molecules/IconButton/IconButton.styled';

type IconButtonProps = {
  square?: boolean;
  padding?: string;
};

function IconButton({ children, square, padding }: PropsWithChildren<IconButtonProps>) {
  return (
    <StyledIconButton square={square} padding={padding}>
      {children}
    </StyledIconButton>
  );
}

export default IconButton;
