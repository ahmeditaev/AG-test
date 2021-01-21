import styled from "styled-components";
import checkIcon from "../../shared/icons/check-icon.svg";

const defaultBorderColor: string = '#d5d7d8'
const activeBorderColor: string = '#1cb8ff'

export const StyledCheckbox = styled.span<{ isChecked: boolean }>`
  border: 1px solid ${props => props.isChecked ? activeBorderColor : defaultBorderColor};

  ::after {
    background: ${props => props.isChecked ? `url(${checkIcon}) center center no-repeat` : 'unset'};
  }
`