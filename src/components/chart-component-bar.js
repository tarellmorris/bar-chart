// @flow
import React from 'react';
import Papa from 'papaparse';
import { BarChart } from './charts';
import type { TableItem } from '../types';
import { ChartWrap, SelectFilterWrap } from './styled-components/';
import { SelectFilter } from './';

export const formatOptions = (parsedKeys: Array<string>) => {
  // $FlowIgnore
  return parsedKeys.map((key) => {
    key.trim();
    return { label: key, id: key };
  });
};

export type ChartComponentBarPropsT = {
  barDirection: string,
  barStyle: string,
  backgroundColor?: string,
  bottomAxisTickRotation?: number,
  colorPalette: string,
  data: TableItem,
  enableFilteringByKey: boolean,
  enableFilteringByData: boolean,
  enableGridX: boolean,
  enableGridY: boolean,
  enableLabel: boolean,
  leftAxisTickRotation?: number,
  legendLabel?: string,
  textColor?: string,
  width?: string,
};

// $FlowIgnore
export const ChartComponentBar = (props: ChartComponentBarPropsT) => {
  const {
    barStyle,
    barDirection,
    backgroundColor,
    bottomAxisTickRotation,
    colorPalette,
    data,
    enableFilteringByKey,
    enableFilteringByData,
    enableGridX,
    enableGridY,
    enableLabel,
    leftAxisTickRotation,
    textColor,
    width,
  } = props;

  const [filterByKeyValue, setFilterByKeyValue] = React.useState([]);
  const [filterByDataValue, setFilterByDataValue] = React.useState([]);

  const onSelectFilterByKeyChange = (props) => {
    if (props && props.value) {
      setFilterByKeyValue(props.value);
    }
  };
  const onSelectFilterByDataChange = (props) => {
    if (props && props.value) {
      setFilterByDataValue(props.value);
    }
  };

  if (data) {
    const { legendLabel, dataParser } = data;
    if (dataParser) {
      const parsedResult = Papa.parse(dataParser.markdownContent, {
        header: true,
        dynamicTyping: true,
      });
      const indexByKey = parsedResult.meta.fields[0];
      const parsedKeys = parsedResult.meta.fields.slice(1, parsedResult.meta.fields.length);
      const dataOptions = parsedResult.data.map((data) => data[indexByKey]);
      const filteredDataResults = parsedResult.data.filter(
        (data) => data[indexByKey] === filterByDataValue[0]?.id
      );
      const filteredKeyResults = filterByKeyValue.map((value) => value.id);
      const formattedData = {
        barStyle: barStyle,
        barDirection: barDirection,
        backgroundColor: backgroundColor,
        bottomAxisTickRotation: bottomAxisTickRotation,
        colorPalette: colorPalette,
        data: filterByDataValue.length ? filteredDataResults : parsedResult.data,
        enableFilteringByKey: enableFilteringByKey,
        enableFilteringByData: enableFilteringByData,
        enableGridX: enableGridX,
        enableGridY: enableGridY,
        enableLabel: enableLabel,
        indexBy: indexByKey,
        keys: filterByKeyValue.length ? filteredKeyResults : parsedKeys,
        legendLabel: legendLabel,
        leftAxisTickRotation: leftAxisTickRotation,
        textColor: textColor,
        unfilteredKeys: parsedKeys,
      };
      const filterCheck = enableFilteringByKey || enableFilteringByData;

      return (
        <div>
          <ChartWrap $width={width}>
            {filterCheck && (
              <SelectFilterWrap>
                {enableFilteringByKey && (
                  <SelectFilter
                    onChange={(props) => onSelectFilterByKeyChange(props)}
                    options={formatOptions(parsedKeys)}
                    placeholder={'Filter by key'}
                    value={filterByKeyValue}
                  />
                )}
                {enableFilteringByData && (
                  <SelectFilter
                    onChange={(props) => onSelectFilterByDataChange(props)}
                    options={formatOptions(dataOptions)}
                    placeholder={'Filter by data point'}
                    value={filterByDataValue}
                  />
                )}
              </SelectFilterWrap>
            )}
            <BarChart {...formattedData} />
          </ChartWrap>
        </div>
      );
    }
  }
};
