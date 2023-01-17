// @flow
import React from 'react';

import {
  BlockContainer,
  Heading,
  Markdown,
  SambaGridItem,
  type BlockContainerProps,
} from '@uber/dotcom-ui';
import type { ChartProps } from '../types';

import { ChartComponentBar } from './';
import { HeadingWrap, LegalWrap } from './styled-components/';

type Props = ChartProps & BlockContainerProps;

export const BarChart = (props: Props) => {
  const { data, rtl, containerBackgroundTransparent = true, textColor, backgroundColor } = props;

  const dataCheck = data && data.length;
  const spanType = dataCheck === 1 ? '1/-1' : 'span 6';

  return (
    <BlockContainer {...props} containerBackgroundTransparent={containerBackgroundTransparent}>
      {
        // $FlowIgnore
        dataCheck &&
          data.map((chart, index) => {
            const {
              barDirection = 'vertical',
              barStyle = 'grouped',
              bottomAxisTickRotation,
              colorPalette = 'primary',
              enableFilteringByKey = false,
              enableFilteringByData = false,
              enableGridX = false,
              enableGridY = false,
              enableLabel = false,
              tableTitle,
              tableData,
              leftAxisTickRotation,
              legal,
            } = chart;
            return (
              <SambaGridItem
                $alignSelf="flex-start"
                $display="flex"
                $gridColumn={['1/-1', '1/-1', '1/-1', spanType]}
                $stylesOverride={{ flexDirection: 'column' }}
                key={index}
              >
                {tableTitle && (
                  <HeadingWrap>
                    <Heading heading={tableTitle} />
                  </HeadingWrap>
                )}
                <ChartComponentBar
                  backgroundColor={backgroundColor}
                  barStyle={barStyle}
                  barDirection={barDirection}
                  bottomAxisTickRotation={bottomAxisTickRotation}
                  colorPalette={colorPalette}
                  data={tableData}
                  enableFilteringByKey={enableFilteringByKey}
                  enableFilteringByData={enableFilteringByData}
                  enableGridX={enableGridX}
                  enableGridY={enableGridY}
                  enableLabel={enableLabel}
                  leftAxisTickRotation={leftAxisTickRotation}
                  textColor={textColor}
                  rtl={rtl}
                />
                {legal && (
                  <LegalWrap>
                    <Markdown size="legal" body={legal} />
                  </LegalWrap>
                )}
              </SambaGridItem>
            );
          })
      }
    </BlockContainer>
  );
};
