//@flow
//flowlint unclear-type:off
import * as React from 'react';
import { BoxLegendSvg } from '@nivo/legends';

export const BRAND_COLORS_PRIMARY = ['#5B91F4', '#3CCECE', '#FFC043', '#E28454', '#174291'];
export const BRAND_COLORS_SECONDARY = ['#FF5B8C', '#ABF0FF', '#6C78D3', '#6A126A', '#F7DF90'];
export const BRAND_COLORS_TERTIARY = ['#0400C2', '#169E9E', '#FCB09B', '#F47AFF', '#B0592D'];
export const BRAND_COLORS_QUATERNARY = ['#3AA76D', '#CFBEFF', '#B8EBCD', '#9FD955', '#EA6B6B'];

export const COLOR_MAP = {
  primary: BRAND_COLORS_PRIMARY,
  secondary: BRAND_COLORS_SECONDARY,
  tertiary: BRAND_COLORS_TERTIARY,
  quaternary: BRAND_COLORS_QUATERNARY,
  // $FlowIgnore
  [undefined]: BRAND_COLORS_PRIMARY,
};

export const BarLegend = (props: any) => {
  const { height, legends, width } = props;
  const [legend] = legends;
  return (
    <>
      <BoxLegendSvg
        key="legend-1"
        {...legend}
        data={legend.data.slice(0, 3)}
        translateY={-50}
        containerHeight={height}
        containerWidth={width}
      />
      <BoxLegendSvg
        key="legend-2"
        {...legend}
        data={legend.data.slice(3)}
        containerHeight={height}
        containerWidth={width}
      />
    </>
  );
};

export const getDefaultLegendConfig = (
  keySet: Array<string>,
  colorPalette: string,
  unfilteredKeys: ?Array<string>
) => {
  const mappedKeySets = unfilteredKeys?.map((key, index) => ({ id: key.trim(), index: index }));
  return [
    {
      dataFrom: 'keys',
      // $FlowIgnore
      data: mappedKeySets.map((keySet) => {
        const { id, index } = keySet;
        return {
          color: COLOR_MAP[colorPalette][index],
          id,
          label: id?.length > 15 ? id.slice(0, 15) + '...' : id,
        };
      }),
      anchor: 'top-left',
      direction: 'row',
      justify: false,
      translateX: -58,
      translateY: 0,
      itemsSpacing: 10,
      itemWidth: 100,
      itemHeight: 10,
      itemDirection: 'left-to-right',
      itemOpacity: 1,
      symbolSize: 12,
    },
  ];
};

export const getDefaultLayoutConfig = (filterCheck: boolean) => ({
  margin: { top: 50, right: 50, bottom: filterCheck ? 102 : 50, left: 60 },
  padding: 0.15,
});

export const getDefaultAxisConfig = (
  xLegend?: string,
  yLegend?: string,
  leftAxisTickRotation?: number,
  bottomAxisTickRotation?: number
) => {
  return {
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: bottomAxisTickRotation,
      legend: xLegend,
      legendOffset: 43,
      legendPosition: 'middle',
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: leftAxisTickRotation,
      legend: yLegend,
      legendOffset: -55,
      legendPosition: 'middle',
    },
  };
};
