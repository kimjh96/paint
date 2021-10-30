import React from 'react';
import { styled } from 'src/theme';

// Atoms
import Icon from 'components/atoms/Icon';

// Molecules
import IconButton from 'components/molecules/IconButton';

const BasedToolbar = styled.div`
  background-color: ${({
    theme: {
      box: { color }
    }
  }) => color.default};

  & > div {
    margin-right: 8px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

const CustomToolbar = styled(BasedToolbar)<{ color?: 'primary' | 'secondary' | 'neutral' }>`
  ${({
    theme: {
      palette: { primary, secondary, neutral }
    },
    color
  }) => {
    switch (color) {
      case 'primary':
        return `background-color: ${primary}`;
      case 'secondary':
        return `background-color: ${secondary}`;
      case 'neutral':
        return `background-color: ${neutral}`;
      default:
        return '';
    }
  }};
`;

type ToolbarProps = {
  color?: 'primary' | 'secondary' | 'neutral';
};

function Toolbar({ color }: ToolbarProps) {
  return (
    <CustomToolbar color={color}>
      <IconButton square padding="12px">
        <Icon type="faPen" color="white" />
      </IconButton>
    </CustomToolbar>
  );
}

export default Toolbar;
