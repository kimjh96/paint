import { styled } from 'src/theme';

export const BasedToolbar = styled.div`
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

export const StyledToolbar = styled(BasedToolbar)<{ color?: 'primary' | 'secondary' | 'neutral' }>`
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
