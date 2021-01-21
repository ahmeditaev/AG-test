import styled from "styled-components";

const ThumbLeft = styled.span<{left: number}>`
  left: ${props => props.left}%;
`

const ThumbRight = styled.span<{right: number}>`
  right: ${props => props.right}%;
`

const Range = styled.span<{left: number, right: number}>`
  left: ${props => props.left}%;
  right: ${props => props.right}%;
`

export {
  ThumbLeft,
  ThumbRight,
  Range
}