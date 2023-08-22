import style from './graficoLinha.module.scss'

import Image from "next/image";
import sun from '@/assets/images/sun.svg'
import ChartLine from '../../chartLine';

export function GraficoLinha() {
    return (
        <div className={style['card']}>
            <header className={style['card__header']}>
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
                <hr className={style['card__header__div']} />
                <div className={style['card__header__col']}>
                    <div className={style['card__header__col__content']}>
                        <span className={style['card__header__col__content__title']}>
                            <h4>TER</h4>
                        </span>
                        <span className={style['card__header__col__content__tips']}>22/05</span>
                    </div>
                    <Image
                        src={sun}
                        alt='Sol'
                        width={60}
                        height={60} />
                </div>
            </header>
            <ChartLine/>
        </div>
    )
}
