import React from 'react';

// Atoms
import Icon from 'components/atoms/Icon';

// Molecules
import IconButton from 'components/molecules/IconButton';

import { StyledToolbar } from 'components/organisms/Toolbar/Toolbar.styles';

type ToolbarProps = {
  color?: 'primary' | 'secondary' | 'neutral';
};

function Toolbar({ color }: ToolbarProps) {
  return (
    <StyledToolbar color={color}>
      <IconButton square padding="12px">
        <Icon type="faPen" color="white" />
      </IconButton>
    </StyledToolbar>
  );
}

export default Toolbar;
