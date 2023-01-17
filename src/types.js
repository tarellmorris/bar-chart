// @flow
export type TableItem = {
  // $FlowIgnore
  dataParser?: any,
  legendLabel?: string,
};

export type ChartItem = {
  barDirection?: string,
  barStyle?: string,
  tableData?: Array<TableItem>,
  tableTitle?: string,
  legal?: string,
};

export type ChartProps = {
  colorPalette?: string,
  data: Array<ChartItem>,
  rtl: boolean,
};
