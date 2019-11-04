/* eslint-disable react/prop-types */
import React from 'react';

export const Date = ({ data, onClick }) => {
  const onClickDate = () => {
    onClick(data);
  };
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
  return <div onClick={onClickDate}>{data.day}</div>;
};
