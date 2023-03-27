import React from 'react';
import Lazy from '@components/test/index';
export const Test: React.FC = () => {
  return (
    <div>
      {[...Array(100)].map((val, index) => {
        return (
          <Lazy
            key={index}
            src="https://blog.kakaocdn.net/dn/ck83td/btrcwxeJJm6/ugdgkwZcq1YTnNEnksZ4z1/img.jpg"
          />
        );
      })}
    </div>
  );
};
