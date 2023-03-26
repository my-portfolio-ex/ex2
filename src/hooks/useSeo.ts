import { useEffect, useState } from 'react';

export const useSeo = (TitleData: string | null) => {
  const [title, setTitle] = useState(TitleData);
  const updateTitle = () => {
    const htmlTitle: HTMLTitleElement | null = document.querySelector('title');
    htmlTitle.text = title + `${' '}`;
  };
  useEffect(updateTitle, [title]);
};
