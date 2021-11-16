import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  palette: {
    primary: '#8490FF',
    secondary: '#6BE9FF',
    neutral: '#7CAFFF',
    mouseover: '#99C1FF',
    click: '#6E9FED',
    disabled: '#A5C8FF',
    redEmphasize: '#F83232'
  },
  box: {
    color: {
      default: 'rgba(50, 50, 50, 0.05)',
      mouseover: 'rgba(50, 50, 50, 0.03)',
      click: 'rgba(50, 50, 50, 0.1)',
      border: 'rgba(50, 50, 50, 0.1)',
      disabled: 'rgba(50, 50, 50, 0.02)'
    }
  }
};

type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { Theme, styled, theme };
