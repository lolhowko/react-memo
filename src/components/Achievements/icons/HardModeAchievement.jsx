import { useState } from "react";
import styles from "./IconStyles.module.css";

export function HardModeAchievement(hardMode) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {hardMode.hardMode ? (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5485 4.68386C18.7211 4.06469 18.5235 2.54349 19.7298 1.53679C20.936 0.53008 22.8124 0.654805 23.9415 1.71274C25.0705 2.77067 25.2522 4.75959 23.9165 6.0692C22.5807 7.37881 21.9651 6.64828 21.22 7.35431C20.4749 8.06034 20.6044 8.63942 21.0655 9.06705C21.5289 9.49468 26.1268 14.2053 25.9973 14.5059C25.8678 14.8066 22.7352 18.2833 22.2218 18.535C21.7084 18.7867 20.8088 18.7622 20.6294 17.9314C20.4499 17.1007 20.7588 15.4391 19.4731 15.0093C18.1896 14.5817 17.6239 14.9336 16.3654 16.2432C15.1069 17.5528 14.5413 18.9871 15.5681 19.7177C16.5949 20.4482 17.8806 20.1453 18.394 21.0028C18.9074 21.8602 18.1373 22.6398 16.7766 23.8737C15.4159 25.1075 14.3618 26.1143 14.1823 25.9895C14.0029 25.8626 10.0979 21.809 9.71397 21.3814C9.32779 20.9538 8.58268 20.5751 7.86483 21.2299C7.14471 21.8847 7.01749 24.0251 3.98708 24.0251C0.956672 24.0251 0.593205 20.8023 1.67225 19.4682C2.75129 18.1341 5.13882 18.0071 5.19107 17.1007C5.21379 16.6842 3.90303 15.5616 2.72631 14.3567C1.34286 12.938 0.0570901 11.4346 0.00256999 11.2586C-0.0996553 10.9312 2.87851 8.06034 3.44415 7.65721C4.0098 7.25408 4.65041 7.50576 4.95936 7.83316C5.26831 8.16057 5.34554 9.16727 5.60224 9.74635C5.85894 10.3254 7.0652 12.8444 9.9684 9.97353C12.8443 7.12713 10.1229 5.89325 9.1983 5.64157C8.27373 5.38989 7.60813 5.30749 7.34916 4.38319C7.14471 3.65265 8.27373 2.7974 9.455 1.68824C10.6363 0.579079 11.3291 0 11.6381 0C11.947 0 16.0815 4.35646 16.6221 4.85981C17.1628 5.36317 17.4944 5.49012 17.8806 5.38767C18.2645 5.28967 18.4713 4.96227 18.5485 4.68386Z"
            fill="url(#paint0_radial_201_144)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_201_144"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12.654 -7.18504) scale(27.084 26.5541)"
            >
              <stop offset="0.508" stopColor="#B7D118" />
              <stop offset="0.572" stopColor="#B2D019" />
              <stop offset="0.643" stopColor="#A5CD1D" />
              <stop offset="0.717" stopColor="#8FC922" />
              <stop offset="0.793" stopColor="#70C22A" />
              <stop offset="0.871" stopColor="#48BA34" />
              <stop offset="0.949" stopColor="#18B040" />
              <stop offset="0.981" stopColor="#02AB46" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_201_110)">
            <path
              d="M18.5485 4.68386C18.7211 4.06469 18.5235 2.54349 19.7298 1.53679C20.936 0.53008 22.8124 0.654805 23.9415 1.71274C25.0705 2.77067 25.2522 4.75959 23.9165 6.0692C22.5807 7.37881 21.9651 6.64828 21.22 7.35431C20.4749 8.06034 20.6044 8.63942 21.0655 9.06705C21.5289 9.49468 26.1268 14.2053 25.9973 14.5059C25.8678 14.8066 22.7352 18.2833 22.2218 18.535C21.7084 18.7867 20.8088 18.7622 20.6294 17.9314C20.4499 17.1007 20.7588 15.4391 19.4731 15.0093C18.1896 14.5817 17.6239 14.9336 16.3654 16.2432C15.1069 17.5528 14.5413 18.9871 15.5681 19.7177C16.5949 20.4482 17.8806 20.1453 18.394 21.0028C18.9074 21.8602 18.1373 22.6398 16.7766 23.8737C15.4159 25.1075 14.3618 26.1143 14.1823 25.9895C14.0029 25.8626 10.0979 21.809 9.71397 21.3814C9.32779 20.9538 8.58268 20.5751 7.86483 21.2299C7.14471 21.8847 7.01749 24.0251 3.98708 24.0251C0.956672 24.0251 0.593205 20.8023 1.67225 19.4682C2.75129 18.1341 5.13882 18.0071 5.19107 17.1007C5.21379 16.6842 3.90303 15.5616 2.72631 14.3567C1.34286 12.938 0.0570901 11.4346 0.00256999 11.2586C-0.0996553 10.9312 2.87851 8.06034 3.44415 7.65721C4.0098 7.25408 4.65041 7.50576 4.95936 7.83316C5.26831 8.16057 5.34554 9.16727 5.60224 9.74635C5.85894 10.3254 7.0652 12.8444 9.9684 9.97353C12.8443 7.12713 10.1229 5.89325 9.1983 5.64157C8.27373 5.38989 7.60813 5.30749 7.34916 4.38319C7.14471 3.65265 8.27373 2.7974 9.455 1.68824C10.6363 0.579079 11.3291 0 11.6381 0C11.947 0 16.0815 4.35646 16.6221 4.85981C17.1628 5.36317 17.4944 5.49012 17.8806 5.38767C18.2645 5.28967 18.4713 4.96227 18.5485 4.68386Z"
              fill="#E9ECED"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_201_110"
              x="0"
              y="0"
              width="26"
              height="27"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_110" />
            </filter>
          </defs>
        </svg>
      )}
      {isMouseEnter && (
        <div className={styles.toolTip}>
          <svg
            className={styles.toolTipImg}
            width="212"
            height="87"
            viewBox="0 0 212 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="212" height="78" rx="12" fill="#C2F5FF" />
            <path d="M14 87L14 73L34 73L14 87Z" fill="#C2F5FF" />
          </svg>
          <p className={styles.toolTipTextWider}>Игра пройдена сложном режиме</p>
        </div>
      )}
    </div>
  );
}
