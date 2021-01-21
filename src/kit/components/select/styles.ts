import {CSSProperties} from "react";
import {ControlProps} from "react-select";
import {OptionTypeBase} from "react-select/src/types";
import {StylesConfig} from "react-select/src/styles";

export const CUSTOM_SELECT_STYLES: StylesConfig<any, boolean> = {
  indicatorSeparator: (styles: CSSProperties) => ({
    ...styles,
    display: 'none'
  }),
  dropdownIndicator: (styles: CSSProperties) => ({
    ...styles,
    color: "#33363e",
    ':hover': {
      color: 'inherit'
    }
  }),
  control: (styles: CSSProperties, state: ControlProps<OptionTypeBase, boolean>) => ({
    ...styles,
    width: "240px",
    minHeight: "42px",
    borderColor: state.isFocused ? "hsl(0,0%,70%)" : "#dee0e1",
    borderRadius: '0',
    boxShadow: 'unset'
  }),
  valueContainer: (styles: CSSProperties) => ({
    ...styles,
    fontFamily: "inherit"
  }),
  singleValue: (styles: CSSProperties) => ({
    ...styles,
    color: "#4c505b"
  })
}