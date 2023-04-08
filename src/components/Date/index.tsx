import React from 'react';

interface dataProps {
  year: number[];
  day: number[];
}

export const DateComponent: React.FC<dataProps> = ({ year, day }) => {
  return (
    <>
      {year.map((yearV, i) => {
        return <span key={i}>{yearV}</span>;
      })}
      <br />
      {day.map((dayV, i) => {
        return <span key={i}>{dayV}</span>;
      })}
    </>
  );
};
