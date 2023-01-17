// @flow

import React, { type StatelessFunctionalComponent } from 'react';

type IllustrationT = StatelessFunctionalComponent<{
  width?: string | number,
  height?: string | number,
}>;

const url =
  'https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Chart.png';

export const Illustration: IllustrationT = ({ width, height }) => {
  return <img src={url} alt="" width={width || 'auto'} height={height || '200px'} />;
};
