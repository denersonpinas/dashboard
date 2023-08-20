// maps to root `/` URL
import page from './page.module.scss'

export default function Page() {
  return (
    <section className={page['container']}>
      <div className='world-interactive'>
        <svg width="294" height="314" viewBox="0 0 294 314" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M221.962 72.6374C220.644 31.2466 186.029 -1.27993 144.638 0.0387185C103.248 1.32073 70.7211 35.9718 72.0397 77.3626C73.3583 118.753 107.973 151.28 149.364 149.961C190.754 148.643 223.244 114.028 221.962 72.6374Z" fill="url(#paint0_radial_95_6874)" />
          <g filter="url(#filter0_f_95_6874)">
            <ellipse cx="147" cy="253" rx="100" ry="14" fill="#212121" />
          </g>
          <defs>
            <filter id="filter0_f_95_6874" x="0" y="192" width="294" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="23.5" result="effect1_foregroundBlur_95_6874" />
            </filter>
            <radialGradient id="paint0_radial_95_6874" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(152.147 55.5737) rotate(-1.80512) scale(75.0024 75.0024)">
              <stop stop-color="#FFCA00" />
              <stop offset="0.2706" stop-color="#FFC600" />
              <stop offset="0.5273" stop-color="#FFBB00" />
              <stop offset="0.7776" stop-color="#FEA800" />
              <stop offset="1" stop-color="#FE9000" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div></div>
    </section>
  )
}