import React, { FC } from 'react';
import './comboBox.scss';

export interface IContentProps {
  data: Array<dataType>
}

type dataType = {
  id: string,
  ad: String
}

export const Content: FC<IContentProps> = ({ data=[], ...rest }) => {

  // const elements = [
  //   { id: 1, ad: 'Almanya' },
  //   { id: 2, ad: 'Polonya' },
  //   { id: 3, ad: 'Hollanda' },
  //   { id: 4, ad: 'İsrail' },
  //   { id: 5, ad: 'Türkiye' }
  // ]

  const listItems = data.map((item: dataType) => {
    return (
      <li key={item.id}  >
        {item.ad}
      </li>
    )


  });
  return (
    <div className='content'>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
