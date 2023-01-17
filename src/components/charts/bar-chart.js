// @flow

import * as React from 'react';
import { useStyletron } from 'baseui';
import { ResponsiveBar } from '@nivo/bar';
import {
  BarLegend,
  COLOR_MAP,
  getDefaultLegendConfig,
  getDefaultLayoutConfig,
  getDefaultAxisConfig,
} from './utils';

export type BarChartPropsT = {
  barStyle: string,
  barDirection: string,
  backgroundColor?: string,
  bottomAxisTickRotation?: number,
  colorPalette: string,
  data: Array<{}>,
  enableFilteringByKey: boolean,
  enableFilteringByData: boolean,
  enableGridX: boolean,
  enableGridY: boolean,
  enableLabel: boolean,
  indexBy: string,
  keys: Array<string>,
  leftAxisTickRotation?: number,
  legendLabel?: string,
  textColor?: string,
  unfilteredKeys?: ?Array<string>,
};

export const BarChart = ({
  backgroundColor,
  barStyle = 'grouped',
  barDirection = 'vertical',
  bottomAxisTickRotation,
  colorPalette,
  data,
  enableFilteringByKey,
  enableFilteringByData,
  enableGridX,
  enableGridY,
  enableLabel,
  indexBy,
  keys,
  leftAxisTickRotation,
  legendLabel,
  textColor,
  unfilteredKeys,
}: BarChartPropsT) => {
  const [, theme] = useStyletron();

  const getBackground = (backgroundColor) => {
    switch (backgroundColor) {
      case 'primary':
        return theme.colors.backgroundPrimary;
      case 'secondary':
        return theme.colors.backgroundSecondary;
      default:
        return backgroundColor;
    }
  };

  const filterCheck = enableFilteringByData || enableFilteringByKey;

  const legends = getDefaultLegendConfig(keys, colorPalette, unfilteredKeys);
  const xLegend = barDirection === 'vertical' ? indexBy : legendLabel;
  const yLegend = barDirection === 'vertical' ? legendLabel : indexBy;
  const config = {
    ...getDefaultLayoutConfig(filterCheck),
    ...getDefaultAxisConfig(xLegend, yLegend, leftAxisTickRotation, bottomAxisTickRotation),
    legends,
  };

  const themeOverride = {
    textColor: textColor,
    fontFamily: theme.typography.ParagraphMedium.fontFamily,
    tooltip: { container: { background: getBackground(backgroundColor) } },
  };

  return (
    <ResponsiveBar
      {...config}
      colors={COLOR_MAP[colorPalette]}
      data={data}
      keys={keys}
      indexBy={indexBy}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      enableLabel={enableLabel}
      labelTextColor={textColor}
      labelSkipWidth={16}
      labelSkipHeight={16}
      groupMode={barStyle}
      layout={barDirection}
      layers={['grid', 'axes', 'bars', 'markers', BarLegend]}
      theme={themeOverride}
    />
  );
};
