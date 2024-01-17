import { useEffect } from "react";
import styled, { css } from "styled-components";

export const theme = {
  bp: {
    small: 414,
    mediumS: 576, // 스마트폰 가로
    // mediumM: 768,
    mediumM: 850,
    medium: 1023,
    large: 1024,
    xLarge: 1200,
    xxLarge: 1400,
    wide: 1600,
    xWide: 1920,
    maxLimit: 2560,

    smallPc: 1279,
  },

  base: {
    navWidth: 64,
    topHeaderHeight: 64,
    topHeaderHeightM: 56,
    container: 390,
    externalWidth: 380,
    headerHeight: 60,
    headerHeightM: 48,
    // summaryHeaderHeight: 230,
    // summaryHeaderHeight: 168,
    summaryHeaderHeight: 256,
    noteTabHeight: 40,
    channelHeaderHeight: 64,
    noteSidebarWidth: 64,
    bottomMenuHeight: 64,

    note: {
      filterWidth: 256,
      navWidth: 64,
    },
  },

  size: {
    headerHeight: "40px",
  },

  font: {
    family: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Noto Sans KR', 'Malgun Gothic', sans-serif`,
  },

  colors: {
    polygonStrokeColor: "#ee553d",
    buildingPolygonColor: "#13D592",
    combinationPolygonStrokeColor: "#EEB23D",

    // tint
    tint: {
      primary: "#13D592",
      primaryDark: "#009F68",
      primaryLight: "#DEF4EC",

      secondary: "#425FF8",
      "secondary-100": "#D3DAFF",
      "secondary-050": "#E9ECFF",

      success: "#fea31a",
      warn: "#fea31a",
      danger: "#e1363d",
      info: "#2957ff",
    },

    primary: {
      50: "#EBFAF0",
      100: "#D7F5E1",
      200: "#AFEBC3",
      300: "#86E0A4",
      400: "#36CC68",
      500: "#31B85E",
      600: "#2BA353",
      700: "#1D9245",
      800: "#197D3B",
      900: "#156831",
    },

    base: {
      // base
      white: "#ffffff",
      black: "#000000",
    },

    gray: {
      50: "#F9FAFB",
      100: "#F2F4F6",
      200: "#E5E8EB",
      300: "#D1D6DB",
      400: "#B0B8C1",
      500: "#8B95A1",
      600: "#6B7684",
      700: "#4E5968",
      800: "#333D4B",
      900: "#191F28",
    },

    blue: {
      50: "#EFF3FF",
      100: "#DFE8FF",
      200: "#C0D1FF",
      300: "#A0BBFF",
      400: "#618DFF",
      500: "#577FE6",
      600: "#4E71CC",
      700: "#4463B3",
      800: "#3A5599",
      900: "#314780",
    },

    red: {
      50: "#FCEDED",
      100: "#F9DCDC",
      200: "#F3B9B9",
      300: "#EC9595",
      400: "#E04F4F",
      500: "#CA4747",
      600: "#B33F3F",
      700: "#9D3737",
      800: "#862F2F",
      900: "#702828",
    },

    purple: {
      50: "#F1EFFF",
      100: "#E4DFFF",
      200: "#C9C0FF",
      300: "#ADA0FF",
      400: "#7761FF",
      500: "#6B57E6",
      600: "#5F4ECC",
      700: "#5444B3",
      800: "#473A99",
      900: "#3C3180",
    },

    sub: {
      red: "#f44336",
      blue: "#5c76ff",
      purple: "#7c42f8",
      pink: "#ca5db3",
      orange: "#e99b30",
      green: "#60C16F",
    },
    age: {
      younger: "#5CA7FF",
      older: "#FF6969",
    },

    noteSheet: {
      primary: "#eff9ff",
      primaryHover: "#effaffB3",
      link: "#2B6BCA",
      dropdown: {
        primary: "#cce5ff",
        hover: "#cce5ff80",
        padding: 12,
        border: "#ffffff",
        radius: 10,
      },
      cell: {
        background: "#F1FBFD",
        border: "#28A4FF",
      },
    },
  },

  shadow: {
    "button-1": "rgba(0, 0, 0, 0.05) 0 1px 1px, rgba(0, 0, 0, 0.1) 0 6px 20px",
    "button-2": "rgba(0, 0, 0, 0.1) 0 1px 1px, rgba(0, 0, 0, 0.25) 0 6px 20px",
    card: "rgba(0, 0, 0, 0.05) 0 1px 2px, rgba(0, 0, 0, 0.05) 0 6px 32px",
    "card-1": "rgba(0, 0, 0, 0.05) 0 1px 2px, rgba(0, 0, 0, 0.05) 0 6px 32px",
    "card-2": "rgba(0, 0, 0, 0.1) 0 1px 2px, rgba(0, 0, 0, 0.1) 0 6px 32px",
    float: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    mapObjectShadow: `rgb(0 0 0 / 10%) 0 0 4px, rgb(0 0 0 / 10%) 0 2px 10px`,
  },

  borderRadius: {
    0: "4px",
    1: "6px",
    2: "8px",
    3: "16px",
  },
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
export const media = Object.keys(theme.bp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${theme.bp[label] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default theme;
