import { Dispatch, SetStateAction } from "react"
import ChartTemp from "../../chartTemp"
import style from './graficoTemperatura.module.scss'
import { ChartUmidade } from "../../chartUmidade"
import classNames from "classnames"

interface IGraficoTemperatura {
  isState: "temperatura" | "umidade"
  setIsState: Dispatch<SetStateAction<"temperatura" | "umidade">>
}

export function GraficoTemperatura({ isState, setIsState} : IGraficoTemperatura) {
  return (
    <div className={style["chart"]}>
        <header className={style['chart__buttons']}>
            <button
                className={classNames({
                  [style['chart__buttons__button']]: true,
                  [style['chart__buttons__button--active']]: isState === "temperatura"
                })}
                onClick={() => setIsState("temperatura")}>
                TEMPERATURA
            </button>
            <hr className={style['chart__buttons__div']}/>
            <button
                className={classNames({
                  [style['chart__buttons__button']]: true,
                  [style['chart__buttons__button--active']]: isState === "umidade"
                })}
                onClick={()=> setIsState("umidade")}>
                UMIDADE
            </button>
        </header>
        {
          isState === "temperatura" ?
          <ChartTemp/>
          :
          <ChartUmidade/>
        }
    </div>
  )
}
