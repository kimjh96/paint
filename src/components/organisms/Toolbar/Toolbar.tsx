import React from 'react';
import { styled } from 'src/theme';

// Atoms
import Icon from 'components/atoms/Icon';

// Molecules
import IconButton from 'components/molecules/IconButton';

const Wrapper = styled.section`
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
    <Wrapper>
      <IconButton>
        <Icon type="faPen" />
      </IconButton>
    </Wrapper>
  );
}

export default Toolbar;
