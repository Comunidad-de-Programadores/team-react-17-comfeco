import { FC } from "react"

type SimpleLogo = {
  w?: string
  h?: string
}

const SimpleLogoSVG: FC<SimpleLogo> = ({ w, h }) => {
  return (
    <svg width={w ? w : "55"} height={h ? h : "55"} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.391 23.1732L31.3228 30.8163L35.0761 33.1366V28.7008L47.0186 36.4805V40.0291L34.9396 47.604V43.9189L31.1863 46.1709L31.118 53.8141L50.7719 41.5304V35.798L31.391 23.1732Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M45.5174 37.0266V39.6881L36.5094 45.284V41.7354L42.31 38.3232V38.255L36.5776 34.7064V31.1578L45.5174 37.0266Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M34.8702 42.6907L34.9384 35.0476L31.1851 32.7955V37.2313L19.2426 29.4517L19.3108 25.903L31.3215 18.3964V22.0132L35.0749 19.8295V12.1863L15.5575 24.4017L15.4893 30.1341L34.8702 42.6907Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M20.8137 28.9054V26.244L29.7535 20.6481V24.1284L24.0211 27.5406V27.6088L29.7535 31.0892V34.5696L20.8137 28.9054Z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M33.1652 65.4154C15.2857 65.4154 0.75 50.8798 0.75 33.0002C0.75 15.1206 15.2857 0.584961 33.1652 0.584961C51.0448 0.584961 65.5805 15.1206 65.5805 33.0002C65.5805 50.8798 51.0448 65.4154 33.1652 65.4154ZM33.1652 3.58764C16.9235 3.58764 3.75267 16.7585 3.75267 33.0002C3.75267 49.2419 16.9235 62.4128 33.1652 62.4128C49.407 62.4128 62.5778 49.2419 62.5778 33.0002C62.5778 16.7585 49.3387 3.58764 33.1652 3.58764Z"
        fill="url(#paint4_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="42.4194"
          y1="47.313"
          x2="29.2234"
          y2="24.4575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#521E87" />
          <stop offset="0.1455" stopColor="#5C1D88" />
          <stop offset="0.3882" stopColor="#751A8A" />
          <stop offset="0.5493" stopColor="#8A178C" />
          <stop offset="0.5628" stopColor="#8E1C87" />
          <stop offset="0.7755" stopColor="#C36E42" />
          <stop offset="0.9262" stopColor="#E4A017" />
          <stop offset="1" stopColor="#F1B406" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="41.6675"
          y1="42.3435"
          x2="35.6091"
          y2="31.8501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#521E87" />
          <stop offset="0.1455" stopColor="#5C1D88" />
          <stop offset="0.3882" stopColor="#751A8A" />
          <stop offset="0.5493" stopColor="#8A178C" />
          <stop offset="0.5628" stopColor="#8E1C87" />
          <stop offset="0.7755" stopColor="#C36E42" />
          <stop offset="0.9262" stopColor="#E4A017" />
          <stop offset="1" stopColor="#F1B406" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="37.0316"
          y1="41.4409"
          x2="23.8741"
          y2="18.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#521E87" />
          <stop offset="0.1455" stopColor="#5C1D88" />
          <stop offset="0.3882" stopColor="#751A8A" />
          <stop offset="0.5493" stopColor="#8A178C" />
          <stop offset="0.5628" stopColor="#8E1C87" />
          <stop offset="0.7755" stopColor="#C36E42" />
          <stop offset="0.9262" stopColor="#E4A017" />
          <stop offset="1" stopColor="#F1B406" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="30.6662"
          y1="34.0697"
          x2="24.6254"
          y2="23.607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#521E87" />
          <stop offset="0.1455" stopColor="#5C1D88" />
          <stop offset="0.3882" stopColor="#751A8A" />
          <stop offset="0.5493" stopColor="#8A178C" />
          <stop offset="0.5628" stopColor="#8E1C87" />
          <stop offset="0.7755" stopColor="#C36E42" />
          <stop offset="0.9262" stopColor="#E4A017" />
          <stop offset="1" stopColor="#F1B406" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="49.3549"
          y1="61.0485"
          x2="16.9559"
          y2="4.93188"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#521E87" />
          <stop offset="0.1455" stopColor="#5C1D88" />
          <stop offset="0.3882" stopColor="#751A8A" />
          <stop offset="0.5493" stopColor="#8A178C" />
          <stop offset="0.5628" stopColor="#8E1C87" />
          <stop offset="0.7755" stopColor="#C36E42" />
          <stop offset="0.9262" stopColor="#E4A017" />
          <stop offset="1" stopColor="#F1B406" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SimpleLogoSVG
