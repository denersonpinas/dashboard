// maps to root `/` URL
'use client'

import page from './page.module.scss'

import Image from 'next/image'

import { Card } from '@/components/card'
import { CardClima } from '@/components/cardClima'
import { useState } from 'react'
import { GraficoTemperatura } from '@/components/graficos/graficoTemperatura'
import { GraficoLinha } from '@/components/graficos/graficoLinha'

import { setImage } from '../hook/setImage'

export default function Page() {
  const [isState, setIsState] = useState<"temperatura" | "umidade">("temperatura")
  const [isValue, setIsValue] = useState<number>(0)
  const [temperatura, setTemperatura] = useState<"celsius" | "fahrenheit">("celsius")
  const [listVelueTemperatura, setListVelueTemperatura] = useState<number[]>([])

  // function handleSetListTemperatura(value: number) {
  //   if (listVelueTemperatura.length === 6) {
  //     const newArray = listVelueTemperatura.slice(1)
  //     setListVelueTemperatura([...newArray, value])
  //   } else {
  //     const item = [...listVelueTemperatura]
  //     const addItem = [...item, value]
  //     setListVelueTemperatura(addItem)
  //   }
  // }

  return (
    <section className={page['container']}>
      <div className={page['container__image']}>
        <Image
          src={setImage(isState, isValue, null, temperatura, 'm')}
          alt='Sol'
          width={200}
          height={267} />
      </div>
      <div className={page['container__content']}>
        <CardClima
          isState={isState}
          isValue={isValue}
          setIsValue={setIsValue}
          temperatura={temperatura}
          setTemperatura={setTemperatura} />
        <GraficoTemperatura
          isState={isState}
          setIsState={setIsState} />
        <div className={page['container__content__card']}>
          <Card
            title={"QTD DE IRRIGAÇÃO"} />
          <Card
            title={"ÚLTIMA IRRIGAÇÃO"}
            text={"1h30"} />
        </div>
        <GraficoLinha />
      </div>
    </section>
  )
}