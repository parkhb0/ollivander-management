import React, { forwardRef } from "react";
import theme from "../../../lib/styles/theme";
import classnames from "classnames";
import { darken, mix, rgba } from "polished";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Button = forwardRef(
  (
    {
      type = "button",
      children,
      onClick,
      style,
      color,
      size,
      expand,
      alignleft,
      alignright,
      plain = false,
      border = false,
      round = false,
      circle = false,
      disabled = false,
      className = "",
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      type={type}
      style={style}
      onClick={onClick}
      buttoncolor={color}
      plain={plain}
      border={border}
      expand={expand}
      size={size}
      alignleft={alignleft}
      alignright={alignright}
      round={round}
      circle={circle}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  )
);

const getBorderButton = (color) => css`
  color: ${color};
  background-color: transparent;
  border-color: ${color};

  &:hover {
    color: ${color};
    background-color: ${rgba(color, 0.1)};
    border-color: ${color};
  }
  &:active {
    color: ${color};
    background-color: ${rgba(color, 0.2)};
    border-color: ${color};
  }
`;
const getPlainButton = (color) => css`
  color: ${color};
  background-color: ${rgba(color, 0.1)};
  border-color: transparent;

  &:hover {
    color: ${color};
    background-color: ${rgba(color, 0.2)};
    border-color: transparent;
  }
  &:active {
    color: ${color};
    background-color: ${rgba(color, 0.3)};
    border-color: transparent;
  }
`;

const colors = {
  default: css`
    color: ${theme.colors.gray[800]};
    font-weight: 700;
    background-color: ${theme.colors.base.white};
    border-color: ${theme.colors.gray[200]};

    i {
      color: ${theme.colors.gray[500]};
    }

    &:hover {
      background-color: ${theme.colors.gray[50]};
      border-color: ${theme.colors.gray[300]};
    }
    &:active {
      background-color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.gray[300]};
    }
  `,
  gray: css`
    color: ${theme.colors.gray[800]};
    background-color: ${theme.colors.gray[100]};
    border-color: ${theme.colors.gray[100]};

    &:hover {
      background-color: ${theme.colors.gray[200]};
      border-color: ${theme.colors.gray[200]};
    }
    &:active {
      background-color: ${theme.colors.gray[300]};
      border-color: ${theme.colors.gray[300]};
    }
  `,
  darkGray: css`
    color: ${theme.colors.gray[800]};
    background-color: ${theme.colors.gray[200]};
    border-color: ${theme.colors.gray[200]};

    &:hover {
      background-color: ${theme.colors.gray[300]};
      border-color: ${theme.colors.gray[300]};
    }
    &:active {
      background-color: ${theme.colors.gray[400]};
      border-color: ${theme.colors.gray[400]};
    }
  `,
  black: css`
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.gray[900]};
    border-color: ${theme.colors.gray[900]};

    ${({ border }) => border && getBorderButton(theme.colors.gray[900])}
    ${({ plain }) => plain && getPlainButton(theme.colors.gray[900])}
  `,
  primary: css`
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.primary[400]};
    border-color: ${theme.colors.primary[400]};

    ${({ border }) => border && getBorderButton(theme.colors.primary[400])}

    ${({ plain }) => plain && getPlainButton(theme.colors.primary[500])}
  `,
  danger: css`
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.tint.danger};
    border-color: ${theme.colors.tint.danger};

    ${({ border }) => border && getBorderButton(theme.colors.tint.danger)}

    ${({ plain }) => plain && getPlainButton(theme.colors.tint.danger)}
  `,
  blue: css`
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.blue[400]};
    border-color: ${theme.colors.blue[400]};

    ${({ border }) => border && getBorderButton(theme.colors.blue[400])}

    ${({ plain }) => plain && getPlainButton(theme.colors.blue[400])}
  `,
};

const plainColors = {
  primary: css`
    color: ${theme.colors.primary[500]};
    background-color: ${theme.colors.primary[50]};
    border-color: ${theme.colors.primary[50]};

    &:hover {
      background-color: ${theme.colors.primary[100]};
      border-color: ${theme.colors.primary[100]};
    }
    &:active {
      background-color: ${theme.colors.primary[200]};
      border-color: ${theme.colors.primary[200]};
    }
  `,
};

const buttonHeights = {
  xlarge: 52,
  large: 42,
  medium: 38, // default
  small: 30,
  xsmall: 24,
};
const buttonSizes = {
  xlarge: css`
    font-size: 1rem;
    height: ${buttonHeights["xlarge"]}px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    ${({ expand }) =>
      expand &&
      `
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      `}
  `,
  large: css`
    height: ${buttonHeights["large"]}px;
    padding-left: 1rem;
    padding-right: 1rem;
  `,
  medium: css`
    height: ${buttonHeights["medium"]}px;
  `,
  small: css`
    font-size: 0.75rem;
    font-weight: 600;
    height: ${buttonHeights["small"]}px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  `,

  xsmall: css`
    font-size: 0.5rem;
    height: ${buttonHeights["xsmall"]}px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `,
};

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius[2]};
  outline: none;
  appearance: none;
  transition: 0.2s ease;
  font-family: ${theme.font.family};

  ${({ alignleft }) =>
    alignleft &&
    `
      justify-content: flex-start;
    `}
  ${({ alignright }) =>
    alignright &&
    `
      justify-content: flex-end;
    `}
  
    svg {
    flex: 0 0 auto;
    max-width: 1.25rem;
    max-height: 1.25rem;
  }

  & > i,
  & > svg {
    & + span {
      margin-left: 0.75em;
    }
  }

  & > span + i,
  & > span + svg {
    margin-left: 0.75em;
  }

  ${({ buttoncolor }) => colors[buttoncolor || "default"]}
  ${({ size }) => buttonSizes[size || "medium"]}
  
    ${({ expand }) =>
    expand &&
    `
      width: 100%;
    `}
  
    ${({ round }) =>
    round &&
    `
        border-radius: 4rem;
    `}
  
    ${({ circle, size }) =>
    circle &&
    `
        border-radius: 4rem;
  
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: ${size ? buttonHeights[size] : buttonHeights["medium"]}px;
        padding: 0 !important;
  
        & > i {
          font-size: 1rem;
        }
        & > svg {
          width: 1.25rem;
          height: 1.25rem;
        }
    `}
  
    ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      pointer-events: none;
  
      color: ${theme.colors.gray[400]};
    `}
`;

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  color: PropTypes.oneOf([
    "default",
    "gray",
    "darkGray",
    "black",
    "primary",
    "danger",
    "blue",
  ]),
  // plain: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge", "xsmall"]),
  onClick: PropTypes.func,
  // expand: PropTypes.bool,
  // disabled: PropTypes.bool,
  // circle: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  color: "default",
  // plain: false,
  size: "medium",
  // onClick: undefined,
  // expand: false,
  // disabled: false,
  // circle: false,
};

export default Button;
