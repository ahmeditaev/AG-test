import styled from "styled-components";

const ThumbLeft = styled.span<{left: any}>`
  left: ${props => props.left};
`

const ThumbRight = styled.span<{right: any}>`
  right: ${props => props.right};
`

const Range = styled.span<{left: any, right: any}>`
  left: ${props => props.left};
  right: ${props => props.right};
`

export {
  ThumbLeft,
  ThumbRight,
  Range
}