import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const DeactivateIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        d="M8.5 0.503906C10.3753 0.503906 11.8342 1.7102 12.4276 3.50689C12.5575 3.9002 12.344 4.32436 11.9507 4.45427C11.5574 4.58419 11.1332 4.37066 11.0033 3.97734C10.6018 2.76162 9.6854 2.00391 8.5 2.00391C7.0927 2.00391 6.07976 2.96178 6.00392 4.55538L5.99935 4.74964L5.999 6.49891L14.25 6.49964C15.4409 6.49964 16.4156 7.4248 16.4948 8.5956L16.5 8.7496V18.2459C16.5 19.4368 15.5748 20.4116 14.404 20.4907L14.25 20.4959H2.75C1.55914 20.4959 0.58436 19.5708 0.50519 18.4L0.5 18.2459V8.7496C0.5 7.55878 1.42516 6.584 2.59595 6.50483L2.75 6.49964L4.499 6.49891L4.49935 4.74964C4.49935 2.21117 6.20838 0.503906 8.5 0.503906ZM14.25 7.99964H2.75C2.3703 7.99964 2.05651 8.28179 2.00685 8.6479L2 8.7496V18.2459C2 18.6256 2.28215 18.9394 2.64823 18.9891L2.75 18.9959H14.25C14.6297 18.9959 14.9435 18.7138 14.9932 18.3477L15 18.2459V8.7496C15 8.36994 14.7178 8.05615 14.3518 8.00649L14.25 7.99964ZM8.5 11.9992C9.3277 11.9992 9.9986 12.6701 9.9986 13.4978C9.9986 14.3254 9.3277 14.9964 8.5 14.9964C7.6723 14.9964 7.0014 14.3254 7.0014 13.4978C7.0014 12.6701 7.6723 11.9992 8.5 11.9992Z"
        fill="#326789"
      />
    </svg>
  )
}