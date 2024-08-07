import React from 'react';
import { IIconType } from './icon.types';
export const Icon: any = ({
  iconName,
  width,
  height,
  iconColor,
  borderProperty,
}: IIconType) => {
  const styles = {
    container: {
      border: `${borderProperty}`,
    },
  };

  if (iconName === 'send') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M14 21L10 14L3 10L20 4L14 21Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'closeMail') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V7M3 7L10.8906 12.2604C11.5624 12.7083 12.4376 12.7083 13.1094 12.2604L21 7"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linejoin="round"
          style={styles.container}
        />
      </svg>
    );
  } else if (iconName === 'Mail') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9M3 9V9C3 8.38279 3.33462 7.8141 3.87416 7.51436L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L20.1258 7.51436C20.6654 7.8141 21 8.38279 21 9V9M3 9L9.53885 12.7365C9.84105 12.9092 10.1831 13 10.5311 13H13.4689C13.8169 13 14.159 12.9092 14.4611 12.7365L21 9"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'notes') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V12M12 20V15C12 13.3431 13.3431 12 15 12H20M12 20L20 12"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'calendar') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M4 9V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V9M4 9V7C4 5.89543 4.89543 5 6 5H8M4 9H20M20 9V7C20 5.89543 19.1046 5 18 5H16M8 3V5M8 5H16M16 3V5"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'resetTime') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16 21 18.5 19 20 16M21 12L18 10M21 12L23 9M14 14L12 12V7"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'chevronDown') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M19 9L12 16L5 9"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'warning') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 7V13M12 17H12.009M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'xcircle') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M9 9L12 12M12 12L15 15M12 12L15 9M12 12L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'checkCircle') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M9 13L11 15L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'search') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M15 15L20 20M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'group') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M16.9287 15.2887C17.5329 15.1055 18.2418 15 19 15C21.2091 15 23 15.8954 23 17C23 18.1046 21.2091 19 19 19C18.2418 19 17.5329 18.8945 16.9287 18.7113M16.9287 15.2887C15.8449 14.5098 14.0415 14 12 14C9.95848 14 8.1551 14.5098 7.07131 15.2887M16.9287 15.2887C17.6041 15.7741 18 16.3639 18 17C18 17.6361 17.6041 18.2259 16.9287 18.7113M16.9287 18.7113C15.8449 19.4902 14.0415 20 12 20C9.95848 20 8.1551 19.4902 7.07131 18.7113M7.07131 15.2887C6.46714 15.1055 5.7582 15 5 15C2.79086 15 1 15.8954 1 17C1 18.1046 2.79086 19 5 19C5.7582 19 6.46714 18.8945 7.07131 18.7113M7.07131 15.2887C6.39594 15.7741 6 16.3639 6 17C6 17.6361 6.39594 18.2259 7.07131 18.7113M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
          stroke={iconColor}
          strokeWidth="2"
        />
      </svg>
    );
  } else if (iconName === 'user') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M20 18C20 19.6569 16.4183 21 12 21C7.58172 21 4 19.6569 4 18C4 16.3431 7.58172 15 12 15C16.4183 15 20 16.3431 20 18Z"
          stroke={iconColor}
          strokeWidth="2"
        />
        <path
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke={iconColor}
          strokeWidth="2"
        />
      </svg>
    );
  } else if (iconName === 'chevronRight') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M9 5L16 12L9 19"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'plus') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 4V20M4 12H20"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'plus') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M11 18L9.58579 19.4142C9.21071 19.7893 8.70201 20 8.17157 20H6.5M11 18L18 11M11 18L6 13M6 13L4.58579 14.4142C4.21071 14.7893 4 15.298 4 15.8284V17.5M6 13L13 6M13 6L14.5858 4.41421C15.3668 3.63316 16.6332 3.63316 17.4142 4.41421L19.5858 6.58579C20.3668 7.36683 20.3668 8.63317 19.5858 9.41421L18 11M13 6L18 11M6.5 20H4V17.5M6.5 20L4 17.5"
          stroke="#272B2F"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'checkMark') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M9 13L11 15L15 10M12 3L14.2249 5.15239L17.2901 4.71885L17.8249 7.76795L20.5595 9.21885L19.2 12L20.5595 14.7812L17.8249 16.2321L17.2901 19.2812L14.2249 18.8476L12 21L9.77508 18.8476L6.70993 19.2812L6.17508 16.2321L3.44049 14.7812L4.8 12L3.44049 9.21885L6.17508 7.76795L6.70993 4.71885L9.77508 5.15239L12 3Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'billDiagonal') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 19L11.4142 19.5858C10.6332 20.3668 9.36684 20.3668 8.58579 19.5858L8 19M12 19L19 12M12 19L11.4142 18.4142C10.6332 17.6332 9.36683 17.6332 8.58579 18.4142L8 19M8 19L5 16M5 16L4.41421 15.4142C3.63317 14.6332 3.63316 13.3668 4.41421 12.5858L5 12M5 16L5.58579 15.4142C6.36684 14.6332 6.36683 13.3668 5.58579 12.5858L5 12M5 12L12 5M12 5L12.5858 4.41421C13.3668 3.63317 14.6332 3.63316 15.4142 4.41421L16 5M12 5L12.5858 5.58579C13.3668 6.36684 14.6332 6.36683 15.4142 5.58579L16 5M16 5L19 8M19 8L19.5858 8.58579C20.3668 9.36683 20.3668 10.6332 19.5858 11.4142L19 12M19 8L18.4142 8.58579C17.6332 9.36684 17.6332 10.6332 18.4142 11.4142L19 12M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Danger') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 10V14M12 18H12.009M13.7483 6.14697L20.3493 18.0287C21.0899 19.3618 20.1259 21 18.601 21H5.39903C3.87406 21 2.91013 19.3618 3.65072 18.0287L10.2517 6.14697C11.0137 4.77535 12.9863 4.77535 13.7483 6.14697Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'phone') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M8.53333 15.4667C5.79542 12.7288 4.52735 10.207 4.1373 9.32869C4.04127 9.11244 4 8.87888 4 8.64226V6.82843C4 6.29799 4.21071 5.78929 4.58579 5.41421L5.58579 4.41421C6.36683 3.63317 7.63317 3.63317 8.41421 4.41421L9.84062 5.84062C10.5148 6.51475 10.6193 7.57099 10.0905 8.36424L9.64381 9.03429C9.24569 9.63146 9.19507 10.3983 9.56019 11.0162C9.94122 11.661 10.4706 12.4706 11 13C11.5294 13.5294 12.339 14.0588 12.9838 14.4398C13.6017 14.8049 14.3685 14.7543 14.9657 14.3562L15.6358 13.9095C16.429 13.3807 17.4852 13.4852 18.1594 14.1594L19.5858 15.5858C20.3668 16.3668 20.3668 17.6332 19.5858 18.4142L18.5858 19.4142C18.2107 19.7893 17.702 20 17.1716 20H15.3577C15.1211 20 14.8876 19.9587 14.6713 19.8627C13.793 19.4727 11.2712 18.2046 8.53333 15.4667Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'messageBubble') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M4 19L3.10557 18.5528C2.93092 18.9021 2.97559 19.3211 3.21996 19.6257C3.46432 19.9304 3.86367 20.0649 4.24254 19.9701L4 19ZM19 11.5C19 15.0899 16.0899 18 12.5 18V20C17.1944 20 21 16.1944 21 11.5H19ZM6 11.5C6 7.91015 8.91015 5 12.5 5V3C7.80558 3 4 6.80558 4 11.5H6ZM12.5 5C16.0899 5 19 7.91015 19 11.5H21C21 6.80558 17.1944 3 12.5 3V5ZM12.5 18C12.0177 18 11.4278 17.8165 10.698 17.5576C10.3628 17.4386 9.98757 17.301 9.64008 17.1977C9.29816 17.0961 8.89708 17 8.5 17V19C8.60292 19 8.78138 19.0289 9.07014 19.1148C9.35332 19.199 9.65991 19.3114 10.0292 19.4424C10.7086 19.6835 11.6186 20 12.5 20V18ZM8.5 17C8.33739 17 8.13628 17.0326 7.99174 17.0578C7.81787 17.088 7.60765 17.1298 7.37993 17.1777C6.92315 17.2739 6.36737 17.401 5.83346 17.5266C5.29829 17.6525 4.77953 17.7783 4.39494 17.8725C4.20253 17.9196 4.04344 17.9589 3.93234 17.9864C3.87678 18.0002 3.83321 18.011 3.80346 18.0184C3.78858 18.0221 3.77715 18.0249 3.76941 18.0269C3.76554 18.0278 3.76259 18.0286 3.76059 18.0291C3.75959 18.0293 3.75883 18.0295 3.75831 18.0296C3.75804 18.0297 3.75784 18.0298 3.7577 18.0298C3.75763 18.0298 3.75757 18.0298 3.75754 18.0298C3.75749 18.0299 3.75746 18.0299 4 19C4.24254 19.9701 4.24254 19.9701 4.24255 19.9701C4.24258 19.9701 4.24261 19.9701 4.24266 19.9701C4.24277 19.9701 4.24293 19.97 4.24315 19.97C4.2436 19.9699 4.24429 19.9697 4.24521 19.9695C4.24706 19.969 4.24985 19.9683 4.25357 19.9674C4.26099 19.9655 4.27209 19.9628 4.28663 19.9591C4.31572 19.9519 4.35857 19.9413 4.41337 19.9277C4.52297 19.9005 4.68028 19.8617 4.87068 19.815C5.25172 19.7217 5.76421 19.5975 6.29154 19.4734C6.82013 19.349 7.3581 19.2261 7.79195 19.1348C8.00954 19.089 8.19385 19.0526 8.33443 19.0282C8.50435 18.9986 8.53761 19 8.5 19V17ZM4 19C4.89443 19.4472 4.89446 19.4471 4.8945 19.4471C4.89452 19.447 4.89457 19.4469 4.89461 19.4468C4.8947 19.4467 4.8948 19.4465 4.89493 19.4462C4.8952 19.4457 4.89555 19.445 4.89599 19.4441C4.89687 19.4423 4.8981 19.4398 4.89969 19.4367C4.90285 19.4303 4.9074 19.4211 4.91323 19.4093C4.92491 19.3857 4.94175 19.3515 4.96302 19.308C5.00555 19.2209 5.06589 19.0962 5.13811 18.9437C5.28224 18.6394 5.47528 18.2213 5.66914 17.7689C5.86189 17.3192 6.06131 16.8221 6.21431 16.3631C6.35507 15.9408 6.5 15.4284 6.5 15H4.5C4.5 15.0716 4.45743 15.3092 4.31694 15.7306C4.18869 16.1154 4.01311 16.5558 3.83085 16.9811C3.64972 17.4037 3.46776 17.7981 3.33064 18.0875C3.26224 18.2319 3.20539 18.3494 3.16589 18.4303C3.14614 18.4707 3.13076 18.502 3.12046 18.5228C3.11531 18.5332 3.11143 18.541 3.10892 18.5461C3.10766 18.5486 3.10675 18.5504 3.10619 18.5516C3.10591 18.5521 3.10571 18.5525 3.10561 18.5527C3.10556 18.5528 3.10553 18.5529 3.10552 18.5529C3.10552 18.5529 3.10553 18.5529 3.10553 18.5529C3.10555 18.5528 3.10557 18.5528 4 19ZM6.5 15C6.5 14.3828 6.35053 13.6221 6.23148 13.0122C6.09726 12.3245 6 11.817 6 11.5H4C4 12.0596 4.15275 12.8021 4.26852 13.3953C4.39947 14.0662 4.5 14.6172 4.5 15H6.5Z"
          fill="#09090B"
        />
      </svg>
    );
  } else if (iconName === 'X') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'sun') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M12 5V3M17.5 6.5L18.5455 5.45456M21 12H19M18.5455 18.5L17.5 17.5M12 21V19M5.5 18.5L6.5 17.5M5 12H3M6.5 6.5L5.45454 5.45456M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 7.99999 14.2091 7.99999 12C7.99999 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'moon') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.container}
      >
        <path
          d="M18.6144 12.6144C17.787 12.8652 16.9093 13 16 13C11.0294 13 7 8.97058 7 4.00002C7 3.09076 7.13484 2.21299 7.38561 1.38562C3.69007 2.50571 1 5.93871 1 10C1 14.9706 5.02944 19 10 19C14.0613 19 17.4943 16.3099 18.6144 12.6144Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'rank') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8889 11.8889V2.55556C11.8889 1.69645 12.5853 1 13.4444 1C14.3036 1 15 1.69644 15 2.55555V11.8889C15 12.748 14.3036 13.4444 13.4444 13.4444C12.5853 13.4444 11.8889 12.748 11.8889 11.8889Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.44444 11.8889V5.66667C6.44444 4.80756 7.14089 4.11111 8 4.11111C8.85911 4.11111 9.55556 4.80756 9.55556 5.66667V11.8889C9.55556 12.748 8.85911 13.4444 8 13.4444C7.14089 13.4444 6.44444 12.748 6.44444 11.8889Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 11.8889V8.77778C1 7.91867 1.69645 7.22222 2.55556 7.22222C3.41467 7.22222 4.11111 7.91867 4.11111 8.77778V11.8889C4.11111 12.748 3.41467 13.4444 2.55556 13.4444C1.69645 13.4444 1 12.748 1 11.8889Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'backspace') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        width={width}
        height={height}
      >
        <path
          stroke={iconColor}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
        />
      </svg>
    );
  } else if (iconName === 'bell') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6757 16C12.6757 17.6569 11.3688 19 9.75676 19C8.14469 19 6.83784 17.6569 6.83784 16M12.6757 16H6.83784M12.6757 16H19L15.6036 11.0155C15.5977 11.0054 15.5946 10.9938 15.5946 10.9819V7C15.5946 3.68629 12.9809 1 9.75676 1C6.53261 1 3.91892 3.68629 3.91892 7V10.9819C3.91892 10.9938 3.91579 11.0054 3.90988 11.0155L1 16H6.83784"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'tick') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 46 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 26L22 30L30 20M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
          stroke={iconColor}
          strokeWidth="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'line') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 202 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="2.5" x2="202" y2="2.5" stroke={iconColor} strokeWidth="4" />
      </svg>
    );
  } else if (iconName === 'gymlogo') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1114_1100)">
          <rect width="80" height="80" rx="40" fill="white" />
          <rect width="40" height="80" fill="#FC3903" />
          <rect y="40" width="80" height="40" fill="#A6026C" />
        </g>
        <defs>
          <clipPath id="clip0_1114_1100">
            <rect width="80" height="80" rx="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconName === 'uploadphoto') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 203 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="203" height="196" fill="#D9D9D9" />
      </svg>
    );
  } else if (iconName === 'closeCircle') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 27L36 36M36 36L45 45M36 36L45 27M36 36L27 45M63 36C63 50.9117 50.9117 63 36 63C21.0883 63 9 50.9117 9 36C9 21.0883 21.0883 9 36 9C50.9117 9 63 21.0883 63 36Z"
          stroke="#F94040"
          strokeWidth="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Timer') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4877 22.263L18.9444 18.7198V9.86181M34.8889 18.7198C34.8889 27.5257 27.7503 34.6643 18.9444 34.6643C10.1386 34.6643 3 27.5257 3 18.7198C3 9.91396 10.1386 2.77539 18.9444 2.77539C27.7503 2.77539 34.8889 9.91396 34.8889 18.7198Z"
          stroke={iconColor}
          strokeWidth="4.55555"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Clockwise') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7266 7C13.7266 3.68629 11.0152 1 7.67044 1C4.3257 1 1.61426 3.68629 1.61426 7C1.61426 10.3137 4.3257 13 7.67044 13C10.3621 13 12.0443 11.6667 13.0537 9.66667M13.7266 7L11.7079 5.66667M13.7266 7L15.0724 5M9.01626 8.33333L7.67044 7V3.66667"
          stroke={iconColor}
          strokeWidth="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Calendar') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.23529V11.9412C1 12.5259 1.47405 13 2.05882 13H10.9412C11.5259 13 12 12.5259 12 11.9412V5.23529M1 5.23529V3.47059C1 2.88582 1.47405 2.41176 2.05882 2.41176H3.75M1 5.23529H12M12 5.23529V3.47059C12 2.88582 11.5259 2.41176 10.9412 2.41176H9.25M3.75 1V2.41176M3.75 2.41176H9.25M9.25 1V2.41176"
          stroke={iconColor}
          strokeWidth="1.05882"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Navbar') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3984 28.5002H44.5984M12.3984 14.7002H44.5984M12.3984 42.3002H44.5984"
          stroke={iconColor}
          strokeWidth="4.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Dashboard') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 6.5C4.5 5.39543 5.39543 4.5 6.5 4.5H8.5C9.60457 4.5 10.5 5.39543 10.5 6.5V8.5C10.5 9.60457 9.60457 10.5 8.5 10.5H6.5C5.39543 10.5 4.5 9.60457 4.5 8.5V6.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 6.5C14.5 5.39543 15.3954 4.5 16.5 4.5H18.5C19.6046 4.5 20.5 5.39543 20.5 6.5V8.5C20.5 9.60457 19.6046 10.5 18.5 10.5H16.5C15.3954 10.5 14.5 9.60457 14.5 8.5V6.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.5 16.5C4.5 15.3954 5.39543 14.5 6.5 14.5H8.5C9.60457 14.5 10.5 15.3954 10.5 16.5V18.5C10.5 19.6046 9.60457 20.5 8.5 20.5H6.5C5.39543 20.5 4.5 19.6046 4.5 18.5V16.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 16.5C14.5 15.3954 15.3954 14.5 16.5 14.5H18.5C19.6046 14.5 20.5 15.3954 20.5 16.5V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H16.5C15.3954 20.5 14.5 19.6046 14.5 18.5V16.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName == 'Members') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2917_4694)">
          <path
            d="M17.5967 15.7887C18.2008 15.6055 18.9098 15.5 19.668 15.5C21.8771 15.5 23.668 16.3954 23.668 17.5C23.668 18.6046 21.8771 19.5 19.668 19.5C18.9098 19.5 18.2008 19.3945 17.5967 19.2113M17.5967 15.7887C16.5129 15.0098 14.7095 14.5 12.668 14.5C10.6264 14.5 8.82307 15.0098 7.73928 15.7887M17.5967 15.7887C18.272 16.2741 18.668 16.8639 18.668 17.5C18.668 18.1361 18.272 18.7259 17.5967 19.2113M17.5967 19.2113C16.5129 19.9902 14.7095 20.5 12.668 20.5C10.6264 20.5 8.82307 19.9902 7.73928 19.2113M7.73928 15.7887C7.13511 15.6055 6.42617 15.5 5.66797 15.5C3.45883 15.5 1.66797 16.3954 1.66797 17.5C1.66797 18.6046 3.45883 19.5 5.66797 19.5C6.42617 19.5 7.13511 19.3945 7.73928 19.2113M7.73928 15.7887C7.06391 16.2741 6.66797 16.8639 6.66797 17.5C6.66797 18.1361 7.06391 18.7259 7.73928 19.2113M15.668 7.5C15.668 9.15685 14.3248 10.5 12.668 10.5C11.0111 10.5 9.66797 9.15685 9.66797 7.5C9.66797 5.84315 11.0111 4.5 12.668 4.5C14.3248 4.5 15.668 5.84315 15.668 7.5ZM21.668 10.5C21.668 11.6046 20.7725 12.5 19.668 12.5C18.5634 12.5 17.668 11.6046 17.668 10.5C17.668 9.39543 18.5634 8.5 19.668 8.5C20.7725 8.5 21.668 9.39543 21.668 10.5ZM7.66797 10.5C7.66797 11.6046 6.77254 12.5 5.66797 12.5C4.5634 12.5 3.66797 11.6046 3.66797 10.5C3.66797 9.39543 4.5634 8.5 5.66797 8.5C6.77254 8.5 7.66797 9.39543 7.66797 10.5Z"
            stroke={iconColor}
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_2917_4694">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.667969 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconName === 'Payments') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.332 19.5L11.7462 20.0858C10.9652 20.8668 9.69887 20.8668 8.91782 20.0858L8.33203 19.5M12.332 19.5L19.332 12.5M12.332 19.5L11.7462 18.9142C10.9652 18.1332 9.69887 18.1332 8.91782 18.9142L8.33203 19.5M8.33203 19.5L5.33203 16.5M5.33203 16.5L4.74625 15.9142C3.9652 15.1332 3.9652 13.8668 4.74624 13.0858L5.33203 12.5M5.33203 16.5L5.91782 15.9142C6.69887 15.1332 6.69887 13.8668 5.91782 13.0858L5.33203 12.5M5.33203 12.5L12.332 5.5M12.332 5.5L12.9178 4.91421C13.6989 4.13317 14.9652 4.13316 15.7462 4.91421L16.332 5.5M12.332 5.5L12.9178 6.08579C13.6989 6.86684 14.9652 6.86683 15.7462 6.08579L16.332 5.5M16.332 5.5L19.332 8.5M19.332 8.5L19.9178 9.08579C20.6989 9.86683 20.6989 11.1332 19.9178 11.9142L19.332 12.5M19.332 8.5L18.7462 9.08579C17.9652 9.86684 17.9652 11.1332 18.7462 11.9142L19.332 12.5M14.332 12.5C14.332 13.6046 13.4366 14.5 12.332 14.5C11.2275 14.5 10.332 13.6046 10.332 12.5C10.332 11.3954 11.2275 10.5 12.332 10.5C13.4366 10.5 14.332 11.3954 14.332 12.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'More') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12.5C7 13.0523 6.55228 13.5 6 13.5C5.44772 13.5 5 13.0523 5 12.5C5 11.9477 5.44772 11.5 6 11.5C6.55228 11.5 7 11.9477 7 12.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5C11 11.9477 11.4477 11.5 12 11.5C12.5523 11.5 13 11.9477 13 12.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 12.5C19 13.0523 18.5523 13.5 18 13.5C17.4477 13.5 17 13.0523 17 12.5C17 11.9477 17.4477 11.5 18 11.5C18.5523 11.5 19 11.9477 19 12.5Z"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Settings') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 8.5H21M11 8.5C11 10.1569 9.65685 11.5 8 11.5C6.34315 11.5 5 10.1569 5 8.5M11 8.5C11 6.84315 9.65685 5.5 8 5.5C6.34315 5.5 5 6.84315 5 8.5M5 8.5H3M13 16.5H3M13 16.5C13 14.8431 14.3431 13.5 16 13.5C17.6569 13.5 19 14.8431 19 16.5M13 16.5C13 18.1569 14.3431 19.5 16 19.5C17.6569 19.5 19 18.1569 19 16.5M19 16.5H21"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Marketing') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 20.5H8C5.79086 20.5 4 18.7091 4 16.5V4.5L7 6.5L10 4.5L13 6.5L16 4.5V12.5M16 20.5V12.5M16 20.5V20.5C18.2091 20.5 20 18.7091 20 16.5V12.5H16M8 9.5H12M8 13.5H12M8 17.5H12"
          stroke={iconColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Reports') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8889 12.1667V2.83339C11.8889 1.97428 12.5853 1.27783 13.4444 1.27783C14.3036 1.27783 15 1.97428 15 2.83339V12.1667C15 13.0258 14.3036 13.7223 13.4444 13.7223C12.5853 13.7223 11.8889 13.0258 11.8889 12.1667Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.44444 12.1667V5.9445C6.44444 5.08539 7.14089 4.38894 8 4.38894C8.85911 4.38894 9.55556 5.08539 9.55556 5.9445V12.1667C9.55556 13.0258 8.85911 13.7223 8 13.7223C7.14089 13.7223 6.44444 13.0258 6.44444 12.1667Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 12.1667V9.05561C1 8.1965 1.69645 7.50005 2.55556 7.50005C3.41467 7.50005 4.11111 8.1965 4.11111 9.05561V12.1667C4.11111 13.0258 3.41467 13.7223 2.55556 13.7223C1.69645 13.7223 1 13.0258 1 12.1667Z"
          stroke={iconColor}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconName === 'Xmark') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.6875 1.6875L7.6875 7.6875M7.6875 1.6875L1.6875 7.6875"
          stroke={iconColor}
          strokeWidth="0.5625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
};

export default Icon;
