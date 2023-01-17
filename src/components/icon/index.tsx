import { Flex } from "components/base/container";

interface IconProps {
  size?: string;
  color?: string;
}
export const SquareOutIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 3H21V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L21 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};


interface ArtArrowIconProps {
  size?: string;
  color?: string[];
  dir?: "up" | "down" | "left" | "right";
}
export const ArtArrowIcon: React.FC<ArtArrowIconProps> = ({ size = "1em", color = ["currentColor"], dir = "down" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${dir === "down" ? "0" : dir === "up" ? "180" : dir === "right" ? "-90" : dir === "left" ? "90" : ""}deg)`,
      }}
    >
      <path
        d="M20.8317 33.7541L31.1105 9.39611C32.2876 6.57696 29.1316 4.74839 27.0279 6.90603L21.5244 12.5506C20.5698 13.5297 19.0129 13.5392 18.047 12.5717L13.549 8.06616C11.7319 6.24594 8.27107 8.64359 9.05442 11.2945L15.93 34.1759C16.6359 36.2158 19.822 35.9415 20.8317 33.7541Z"
        fill="url(#paint0_linear_2_2)"
      />
      <defs>
        <linearGradient id="paint0_linear_2_2" x1="50.056" y1="20.6242" x2="15.4457" y2="43.9587" gradientUnits="userSpaceOnUse">
          {color.map((each, index) => {
            return index === 0 ? <stop key={index} stopColor={each} /> : <stop key={index} offset="1" stopColor={each} />;
          })}
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ListIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="3" x2="23" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="12" x2="23" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="21" x2="23" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
export const TwitterIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill={color} />
      <path
        d="M25 7.50914C24.1294 8.12321 23.1656 8.59288 22.1455 8.90005C21.5979 8.27052 20.8703 7.82432 20.0609 7.6218C19.2516 7.41929 18.3995 7.47023 17.6201 7.76774C16.8406 8.06524 16.1713 8.59496 15.7027 9.28525C15.2341 9.97553 14.9888 10.7931 15 11.6273V12.5364C13.4024 12.5778 11.8193 12.2235 10.3918 11.505C8.96431 10.7865 7.73665 9.72608 6.81818 8.41823C6.81818 8.41823 3.18182 16.6001 11.3636 20.2364C9.49139 21.5073 7.26105 22.1445 5 22.0546C13.1818 26.6001 23.1818 22.0546 23.1818 11.6001C23.181 11.3468 23.1566 11.0942 23.1091 10.8455C24.0369 9.9305 24.6917 8.77524 25 7.50914Z"
        fill={"#24162E"}
      />
    </svg>
  );
};
export const DiscordIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill={color} />
      <path
        d="M21.9419 8.79431C20.6473 8.18966 19.263 7.75022 17.8157 7.5C17.638 7.82077 17.4304 8.25222 17.2872 8.59544C15.7487 8.36448 14.2245 8.36448 12.7143 8.59544C12.5712 8.25222 12.3588 7.82077 12.1795 7.5C10.7307 7.75022 9.3448 8.19127 8.05016 8.79752C5.43887 12.7365 4.73099 16.5777 5.08493 20.3644C6.81688 21.6554 8.49534 22.4397 10.1455 22.953C10.5529 22.3932 10.9163 21.7982 11.2293 21.1711C10.6331 20.945 10.0621 20.6659 9.52256 20.3419C9.6657 20.2361 9.80571 20.1254 9.94098 20.0115C13.2318 21.548 16.8074 21.548 20.0589 20.0115C20.1958 20.1254 20.3358 20.2361 20.4774 20.3419C19.9362 20.6675 19.3637 20.9465 18.7675 21.1727C19.0805 21.7982 19.4423 22.3948 19.8513 22.9545C21.503 22.4413 23.183 21.6571 24.915 20.3644C25.3303 15.9747 24.2056 12.1688 21.9419 8.79431ZM11.6776 18.0356C10.6898 18.0356 9.87963 17.115 9.87963 15.9939C9.87963 14.8728 10.6725 13.9506 11.6776 13.9506C12.6829 13.9506 13.493 14.8712 13.4757 15.9939C13.4772 17.115 12.6829 18.0356 11.6776 18.0356ZM18.3223 18.0356C17.3344 18.0356 16.5243 17.115 16.5243 15.9939C16.5243 14.8728 17.3171 13.9506 18.3223 13.9506C19.3275 13.9506 20.1376 14.8712 20.1203 15.9939C20.1203 17.115 19.3275 18.0356 18.3223 18.0356Z"
        fill={"#24162E"}
      />
    </svg>
  );
};
export const TelegramIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill={color} />
      <path
        d="M6.24278 14.8699L16.3439 10.7081C17.341 10.2746 20.7225 8.88728 20.7225 8.88728C20.7225 8.88728 22.2832 8.28035 22.1532 9.75434C22.1098 10.3613 21.763 12.4855 21.4162 14.7832L20.3324 21.5896C20.3324 21.5896 20.2457 22.5867 19.5087 22.7601C18.7717 22.9335 17.5578 22.1532 17.341 21.9798C17.1676 21.8497 14.0896 19.8988 12.9624 18.9451C12.659 18.685 12.3121 18.1647 13.0058 17.5578C14.5665 16.1272 16.4306 14.3497 17.5578 13.2225C18.078 12.7023 18.5983 11.4884 16.4306 12.9624L10.3179 17.0809C10.3179 17.0809 9.62428 17.5145 8.3237 17.1243C7.02312 16.7341 5.50578 16.2139 5.50578 16.2139C5.50578 16.2139 4.46532 15.5636 6.24278 14.8699Z"
        fill={"#24162E"}
      />
    </svg>
  );
};
export const WebsiteIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209.281 209.281">
      <path
        d="M203.456,139.065c3.768-10.786,5.824-22.369,5.824-34.425s-2.056-23.639-5.824-34.425c-0.092-0.324-0.201-0.64-0.333-0.944  C188.589,28.926,149.932,0,104.641,0S20.692,28.926,6.159,69.271c-0.132,0.305-0.242,0.62-0.333,0.944  c-3.768,10.786-5.824,22.369-5.824,34.425s2.056,23.639,5.824,34.425c0.092,0.324,0.201,0.64,0.333,0.944  c14.534,40.346,53.191,69.271,98.482,69.271s83.948-28.926,98.482-69.271C203.255,139.705,203.364,139.39,203.456,139.065z   M104.641,194.281c-3.985,0-10.41-7.212-15.78-23.324c-2.592-7.775-4.667-16.713-6.179-26.436H126.6  c-1.512,9.723-3.587,18.66-6.178,26.436C115.051,187.069,108.626,194.281,104.641,194.281z M80.862,129.521  c-0.721-7.998-1.102-16.342-1.102-24.881s0.381-16.883,1.102-24.881h47.557c0.721,7.998,1.102,16.342,1.102,24.881  s-0.381,16.883-1.102,24.881H80.862z M15.001,104.641c0-8.63,1.229-16.978,3.516-24.881h47.3  c-0.701,8.163-1.057,16.529-1.057,24.881s0.355,16.718,1.057,24.881h-47.3C16.23,121.618,15.001,113.271,15.001,104.641z   M104.641,15c3.985,0,10.411,7.212,15.781,23.324c2.591,7.775,4.667,16.713,6.178,26.435H82.681  c1.512-9.723,3.587-18.66,6.179-26.435C94.231,22.212,100.656,15,104.641,15z M143.464,79.76h47.3  c2.287,7.903,3.516,16.251,3.516,24.881s-1.229,16.978-3.516,24.881h-47.3c0.701-8.163,1.057-16.529,1.057-24.881  S144.165,87.923,143.464,79.76z M184.903,64.76h-43.16c-2.668-18.397-7.245-34.902-13.666-46.644  C152.972,24.865,173.597,42.096,184.903,64.76z M81.204,18.115C74.783,29.857,70.206,46.362,67.538,64.76h-43.16  C35.685,42.096,56.309,24.865,81.204,18.115z M24.378,144.521h43.16c2.668,18.397,7.245,34.902,13.666,46.645  C56.309,184.416,35.685,167.186,24.378,144.521z M128.077,191.166c6.421-11.742,10.998-28.247,13.666-46.645h43.16  C173.597,167.186,152.972,184.416,128.077,191.166z"
        fill={color}
      />
    </svg>
  );
};

interface ArrowIconProps extends IconProps {
  dir?: "up" | "down" | "left" | "right";
}

// export const ArrowIcon: React.FC<ArrowIconProps> = ({ size = "1em", color = "currentColor", dir = "up" }) => {
//   return <></>;
// };

interface TokenIconPairProps {
  token1: React.ReactNode;
  token2: React.ReactNode;
  [index: string]: any;
}
export const TokenIconPair: React.FC<TokenIconPairProps> = ({ token1, token2, fontSize = "18px", ...props }) => {
  return (
    <Flex alignCenter fontSize={fontSize} flexDirection={"row-reverse"} {...props}>
      <Flex ml={"-8px"}>{token1}</Flex>
      <Flex>{token2}</Flex>
    </Flex>
  );
};

export const IconNarrow: React.FC<ArrowIconProps> = ({ size = "1em", color = "currentColor", dir = "down" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: dir === "up" ? "scaleY(-1)" : dir === "right" ? "rotate(-90deg)" : dir === "left" ? "rotate(90deg)" : "",
      }}
    >
      <path d="M5.60156 8.85547L9.80402 13.2964L14.0065 8.85547" stroke={color} strokeWidth="1.13337" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const EtherIcon: React.FC<IconProps> = ({ size = "1em", color = "currentColor" }) => {
    return (
<svg  width={size} height={size} className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill="white"></path>
    <g opacity="0.6">
        <path opacity="0.6" d="M9.91179 7.91602L5 10.1499L9.91179 13.0518L14.8216 10.1499L9.91179 7.91602Z"
              fill="#141416"></path>
    </g>
    <g opacity="0.45">
        <path opacity="0.45" d="M5 10.1496L9.91182 13.0515V2L5 10.1496Z" fill="#141416"></path>
    </g>
    <g opacity="0.8">
        <path opacity="0.8" d="M9.91187 2V13.0515L14.8217 10.1496L9.91187 2Z" fill="#141416"></path>
    </g>
    <g opacity="0.45">
        <path opacity="0.45" d="M5 11.0801L9.91182 17.9998V13.982L5 11.0801Z" fill="#141416"></path>
    </g>
    <g opacity="0.8">
        <path opacity="0.8" d="M9.91187 13.982V17.9998L14.8256 11.0801L9.91187 13.982Z" fill="#141416"></path>
    </g>
</svg>
    )
}
