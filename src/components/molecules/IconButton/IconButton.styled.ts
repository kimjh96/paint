import { styled } from 'src/theme';

export const BasedIconButton = styled.button`
  padding: 8px;
  background-color: ${({ theme: { palette } }) => palette.neutral};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledIconButton = styled(BasedIconButton)<{ square?: boolean; padding?: string }>`
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
