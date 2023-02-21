import React, { FC, useEffect, useRef, useState } from 'react';
import './comboBox.scss'
import { useOutClickListener } from './useOutClickListener';
import { Header } from './header';
import { Content } from './content';

export interface IComboBoxProps {
    placeHolder:string,
    elements: Array<dataType>
}

type dataType = {
    id: string,
    ad: string
  }


export const ComboBox : FC<IComboBoxProps> = ({ placeHolder='Select',elements=[], ...rest }) => {


    //css variable diye bişey var çalışılabilir 
    const [contentShow, setContentShow] = useState(false);
    const containerRef = useRef(null);

    const onClickHandle = () => {

        setContentShow(!contentShow);
    }

    const onClicOutkHandle = () => {

        setContentShow(false);
    }

    useOutClickListener(containerRef, onClicOutkHandle);

    return (
        <div className='combo-box' ref={containerRef} >
            <Header onClick={onClickHandle} label={placeHolder} />
            {contentShow &&
                <Content data={elements}></Content>
            }
        </div>
    );
}
