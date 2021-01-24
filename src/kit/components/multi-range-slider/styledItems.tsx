import styled from "styled-components";

const ThumbLeft = styled.span<{left: string}>`
  left: ${props => props.left};
`

const ThumbRight = styled.span<{right: string}>`
  right: ${props => props.right};
`

const Range = styled.span<{left: string, right: string}>`
  left: ${props => props.left};
  right: ${props => props.right};
`

export {
  ThumbLeft,
  ThumbRight,
  Range
}