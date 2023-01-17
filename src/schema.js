// @flow
import { FIELD_TYPES, FIELD_CATEGORIES } from '@uber/component-common';
import { BlockContainerSchema } from '@uber/dotcom-ui';

export const schema = {
  title: 'Chart',
  fields: [
    {
      field: 'data',
      label: 'Chart Data',
      type: FIELD_TYPES.ARRAY,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'barDirection',
            label: 'Bar Direction',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              { label: 'Vertical', value: 'vertical' },
              { label: 'Horizontal', value: 'horizontal' },
            ],
          },
          {
            field: 'barStyle',
            label: 'Bar Style',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              { label: 'Grouped', value: 'grouped' },
              { label: 'Stacked', value: 'stacked' },
            ],
          },
          {
            field: 'colorPalette',
            label: 'Color Palette',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              { label: 'Primary', value: 'primary' },
              { label: 'Secondary', value: 'secondary' },
              { label: 'Tertiary', value: 'tertiary' },
              { label: 'Quaternary', value: 'quaternary' },
            ],
          },
          {
            field: 'leftAxisTickRotation',
            label: 'Left Axis Tick Rotation',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              { label: '0°', value: 0 },
              { label: '45°', value: 45 },
              { label: '-45°', value: -45 },
            ],
          },
          {
            field: 'bottomAxisTickRotation',
            label: 'Bottom Axis Tick Rotation',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              { label: '0°', value: 0 },
              { label: '45°', value: 45 },
              { label: '-45°', value: -45 },
            ],
          },
          {
            field: 'enableFilteringByKey',
            label: 'Use Filtering By Key',
            type: FIELD_TYPES.CHECKBOX,
          },
          {
            field: 'enableFilteringByData',
            label: 'Use Filtering By Data',
            type: FIELD_TYPES.CHECKBOX,
          },
          {
            field: 'enableLabel',
            label: 'Use Labels',
            type: FIELD_TYPES.CHECKBOX,
          },
          {
            field: 'enableGridX',
            label: 'Use Grid (X-Axis)',
            type: FIELD_TYPES.CHECKBOX,
          },
          {
            field: 'enableGridY',
            label: 'Use Grid (Y-Axis)',
            type: FIELD_TYPES.CHECKBOX,
          },
          {
            field: 'tableTitle',
            label: 'Table Title',
            type: FIELD_TYPES.TEXT_LINE,
          },
          {
            field: 'tableData',
            label: 'Table Data',
            type: FIELD_TYPES.OBJECT,
            itemSchema: {
              fields: [
                {
                  field: 'dataParser',
                  label: 'CSV Data Parser',
                  type: FIELD_TYPES.MARKDOWN,
                },
                {
                  field: 'legendLabel',
                  label: 'Legend Label',
                  placeholder: 'E.g. - Annual Grocery Expenses',
                  type: FIELD_TYPES.TEXT_LINE,
                },
              ],
            },
          },
          {
            field: 'legal',
            label: 'Legal Copy',
            type: FIELD_TYPES.MARKDOWN,
          },
        ],
      },
    },
    ...BlockContainerSchema.fields,
  ],
};
