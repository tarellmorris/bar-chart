// @flow
import React from 'react';
import { Select, SIZE } from 'baseui/select';

type SelectFilterPropsT = {
  // $FlowIgnore
  options: Array<any>,
  placeholder: string,
  // $FlowIgnore
  value: Array<any>,
  onChange: () => void,
};

export const SelectFilter = (props: SelectFilterPropsT) => {
  const { options, placeholder, value, onChange } = props;

  return (
    <Select
      size={SIZE.mini}
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      overrides={{
        Root: {
          style: {
            maxWidth: '175px',
          },
        },
      }}
    />
  );
};
