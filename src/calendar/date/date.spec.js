import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Date } from './date';
import '@testing-library/jest-dom/extend-expect';


describe('Date', () => {
  describe('when pass data', () => {
    const onClickSpy = jest.fn();
    const data = { day: 20 };
    const { getByText } = render(
      <Date data={data} onClick={onClickSpy} />,
    );
    it('render the day', () => {
      expect(getByText('20')).toBeInTheDocument();
    });

    describe('and click the day', () => {
      fireEvent.click(getByText('20'));
      it('call onClick with data', () => {
        expect(onClickSpy).toBeCalledWith(data);
      });
    });
  });
});
