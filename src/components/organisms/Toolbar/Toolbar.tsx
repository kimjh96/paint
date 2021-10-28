import React from 'react';
import { styled } from 'src/theme';

// Components
import IconButton from 'components/molecules/IconButton';
import Icon from 'components/atoms/Icon';

const ToolbarWrapper = styled.section`
  padding: 8px;
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

function Toolbar() {
  return (
    <ToolbarWrapper>
      <IconButton>
        <Icon type="faPen" />
      </IconButton>
    </ToolbarWrapper>
  );
}

export default Toolbar;
