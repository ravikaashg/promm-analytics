import React from 'react'
import useTheme from '../../hooks/useTheme'

function Telegram({ size, color }: { size?: number; color?: string }): JSX.Element {
  const theme = useTheme()
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2081_61390)">
        <path
          d="M13.5597 14.1811C13.5597 14.1843 13.0785 15.3843 11.791 14.8218C11.091 14.5155 6.73162 10.9624 5.75662 10.2186C7.65662 8.51238 9.5535 6.80301 11.4535 5.09676L4.32225 9.61863C3.15662 9.22488 1.98787 8.83738 0.822248 8.44051C-0.218377 8.10613 -0.337127 6.94988 0.825373 6.50925L14.3629 1.203C14.4941 1.14675 16.0004 0.574879 16.0004 1.9155L13.5597 14.1811ZM12.841 13.9124L15.2316 1.85613C15.191 1.678 14.6566 1.90925 14.6535 1.90925L1.08787 7.23113C0.662873 7.37176 0.653498 7.57176 1.07537 7.72176L4.21912 8.77801L12.6816 3.40613C12.9691 3.23113 13.4035 3.10613 13.6535 3.40925C13.9066 3.7155 13.6941 4.0905 13.4472 4.32175C13.2035 4.54988 8.416 8.85301 6.9535 10.1686L12.1379 14.1343C12.591 14.3124 12.791 14.0093 12.841 13.9124Z"
          fill={color || theme.text}
        />
      </g>
      <defs>
        <clipPath id="clip0_2081_61390">
          <rect width="16" height="16" fill={color || theme.text} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Telegram
