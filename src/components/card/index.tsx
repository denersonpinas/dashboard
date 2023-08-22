import { useEffect, useState } from 'react'
import style from './card.module.scss'

interface ICard {
    title : string,
    text?: string
}

let counterIrrigacao: number = 0;
export function Card({title, text} : ICard) {
    const [isValue, setIsValue] = useState<number>(0)

    
    function handleUpdateValue() {
        setIsValue(counterIrrigacao + 1)        
    }

    useEffect(() => {

        const intervalId = setInterval(handleUpdateValue, 60000); // 1 minuto

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={style['card']}>
            <h5 className={style['card__span']}>{title}</h5>
            <h1 className={style['card__title']}>{text ? text : isValue}</h1>
        </div>
      )
}