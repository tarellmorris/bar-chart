// @flow
import { styled } from 'baseui';

// $FlowIgnore
export const HeadingWrap = styled('div', ({ $theme }) => ({
  paddingBottom: $theme.sizing.scale700,
}));
// $FlowIgnore
export const LegalWrap = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale1000,
}));
// $FlowIgnore
export const ChartWrap = styled('div', ({ $theme, $width }) => ({
  height: '500px',
  width: $width || '100%',
}));
// $FlowIgnore
export const SelectFilterWrap = styled('div', ({ $theme }) => ({
  display: 'flex',
  width: '100%',
  gap: $theme.sizing.scale400,
  paddingBottom: $theme.sizing.scale700,
}));
