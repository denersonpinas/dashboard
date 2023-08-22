'use client'

import Image from 'next/image'
import style from './cardClima.module.scss'
import classNames from 'classnames';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { sortNumber } from '@/src/hook/sortNumber'
import { celsiusToFahrenheit } from '@/src/hook/celsiusToFahrenheit'
import { fahrenheitToCelsius } from '@/src/hook/fahrenheitToCelsius'
import { setImage } from '@/src/hook/setImage';
import { func } from 'prop-types';

interface ICardClima {
    isState: "temperatura" | "umidade"
    isValue: number
    setIsValue: Dispatch<SetStateAction<number>>
    temperatura: "celsius" | "fahrenheit"
    setTemperatura: Dispatch<SetStateAction<"celsius" | "fahrenheit">>
}


export const CardClima = ({ isState, isValue, setIsValue, temperatura, setTemperatura}: ICardClima) => {
    const [isUmidade, setIsUmidade] = useState<number>(0)

    function handleSort() {
        const numberSort = sortNumber(0, 33)
        const numberUmidadeSort = sortNumber(0, 100)
        setIsValue(numberSort)
        setIsUmidade(numberUmidadeSort)
    }

    function handleConvertCelsius() {
        if (temperatura === "fahrenheit") {
            setIsValue(fahrenheitToCelsius(isValue))
            setTemperatura("celsius")
        }
    }

    function handleConvertFahrenheit() {
        if (temperatura === "celsius") {
            setIsValue(celsiusToFahrenheit(isValue))
            setTemperatura("fahrenheit")
        }
    }

    useEffect(() => {
        // Chamando a função a cada hora (3600000 milissegundos)
        const intervalId = setInterval(handleSort, 30000);

        // limpa o intervalo quando o componente é desmontado
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={style['card']}>
            <div className={style['card__icon']}>
                <Image
                    src={setImage(isState, isValue, isUmidade, temperatura)}
                    alt='Sol'
                    width={60}
                    height={60} />
            </div>
            <hr className={style['card__div']} />
            <div className={style['card__content']}>
                {
                    isState === "temperatura" ?
                        <h1 className='card__content__title'>{isValue.toPrecision(2)}</h1>
                    :
                        <h1 className='card__content__title'>{isUmidade}%</h1>
                }
                {
                    isState === "temperatura" ?
                        <div className={style['card__content__buttons']}>
                            <button
                                className={classNames({
                                    [style['card__content__buttons__button']]: true,
                                    [style['card__content__buttons__button--active']]: temperatura === "celsius"
                                })}
                                onClick={handleConvertCelsius}
                            >
                                °C
                            </button>
                            <hr className={style['card__content__buttons__div']} />
                            <button
                                className={classNames({
                                    [style['card__content__buttons__button']]: true,
                                    [style['card__content__buttons__button--active']]: temperatura === "fahrenheit"
                                })}
                                onClick={handleConvertFahrenheit}
                            >
                                °F
                            </button>
                        </div>
                    :
                    null
                }
            </div>
        </div>
    )
}