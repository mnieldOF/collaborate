import styled from '@emotion/styled';
import { system } from 'styled-system';

const textDecoration = system({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

import {
    space,
    color,
    layout,
    grid,
    alignItems,
    border,
    typography,
    flexWrap,
    flexDirection,
    justifyContent,
    flex,
    flexBasis,
    alignSelf,
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateAreas,
    gridArea,
    gridColumn,
    position,
    boxShadow,
  } from 'styled-system';

  import { theme } from './theme';

  export const Container = styled.div`
    max-width: 1400px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    ${space}
  `

  export const Textarea = styled.textarea`
    ${space}
    ${color}
    ${typography}
    ${layout}
    ${border}
    ${props => props.default && `
      width: 100%;
      font-size: 16px;
      padding: 10px 15px;
      color: #17324a;
      border-radius: 3px;
      border: 1px solid #5c7f92; 
    `}
  `

  export const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 35px;
    height: 20px;
    input{
        opacity: 0;
        width: 0;
        height: 0;
        &:checked{
           & + span{
                background-color: #BED600;
                &:before{
                    -webkit-transform: translateX(15px);
                    -ms-transform: translateX(15px);
                    transform: translateX(15px);
                    border: 1px solid #BED600; 
                    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);                    
                }
           }
        }
        &:focus{
            & + span{
                box-shadow: 0 0 1px #2196F3; 
            }
        }
    }
    span{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 55px;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.3);        
        &:before{
            position: absolute;
            border-radius: 50%;
            content: "";
            height: 20px;
            width: 20px;
            left: 0px;
            bottom: 0px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;   
            border: 1px solid #ccc;    
            box-sizing: border-box;     
        }
    }
`

  export const StyledImg = styled.img`
    ${layout}
    ${space}
    ${props => props.center && `
      object-fit: cover;  
      object-position: center;  
    `}
  `
  export const StyledTag = styled.span`
    ${space}
    ${color}
    ${typography}
    ${layout}
    ${alignSelf}
    ${border}
    ${flex}
    ${flexBasis}
  `

  export const UnorderedList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  margin: 0;
  grid-gap: 10px;
  li {
    position: relative;
    padding-left: 15px;
    font-size: ${props => props.fontSize};
    display: flex;
    align-items: center;
    &:after {
      content: ' ';
      display: block;
      height: 4px;
      width: 4px;
      background: ${props => props.after};
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  ${space}
  ${color}
  ${typography}
  ${gridTemplateColumns}
`;

export const Input = styled.input`
  padding: 0px;
  box-sizing: border-box;
  ${props => props.default && `
    padding: 10px 15px;
    color: #17324a;
    border-radius: 3px;
    border: 1px solid #5c7f92; 
  `}
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${alignSelf}
  ${border}
  ${flex}
  ${flexBasis}
  &:focus{
    outline: none;
  }
`;

export const StyledCheckbox = styled.label`
  ${space}
  display: inline-flex;
  cursor: pointer;
  position: relative;
  input {
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #e8e8e8;
    outline: none;
    transition-duration: 0.3s;
    cursor: pointer;
    &:checked {
      border: 1px solid;
      border-color: ${theme.colors.oliveDrab};
      & + span {
        &:before {
          content: '\\2713';
          display: block;
          text-align: center;
          color: ${theme.colors.oliveDrab};
          position: absolute;
          left: 0.7rem;
          top: 0.2rem;
        }
      }
    }
    &:active {
      border: 1px solid ${theme.colors.oliveDrab};
    }
  }
  span {
    margin-left: 10px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  ${space}
  ${color}
  ${typography}
  ${flex}
  ${gridArea}
  span{
    margin-bottom: 5px;
    color: #5C7F92;
    text-transform:  uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  border,
  space,
  color,
  layout,
  alignItems,
  grid,
  gridColumn,
  flex,
  justifyContent,
  position,
  boxShadow,
);

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  gridArea,
  gridColumn,
);

Flex.displayName = 'Flex';

export const Grid = styled(Box)`
    display: grid;
    ${props => props.scroll && (
      `
        scroll-snap-type: x mandatory !important;
        scrollbar-width: none;
        scroll-padding: 0px 24px;
        padding: 4px 24px 8px;
        margin: 0px -24px;
        grid-auto-flow: column !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scroll-snap-type: x mandatory !important;        
        &::-webkit-scrollbar{
          display: none;
        }
      `
    )}
    ${gridTemplateRows}
    ${gridTemplateColumns}
    ${gridTemplateAreas}
    ${flex}
  `

Flex.displayName = 'Grid';

export const Heading = styled.h1(
    {
      margin: 0,
    },
    color,
    space,
    typography,
    border,
    gridArea,
  );

export const TextStyled = styled.p(
  {
    color: 'grey',
  },
  space,
  color,
  typography,
  layout,
);

export const LinkStyled = styled.a`
  color: grey;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${props => props.uppercase && `text-transform: uppercase`}
`

export const StyledButton = styled.button`  
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0;
  color: white;
  text-align: center;
  padding: 16px 30px;
  line-height: 18px;
  font-size: 14px;
  transition: opacity 0.3s ease-in-out;
  ${space}
  ${border}
  ${color}
  ${typography}
  ${layout}
  ${flex}
  ${flexDirection}
  ${alignSelf}
  ${position}
  ${boxShadow}
  ${props => props.uppercase && `text-transform: uppercase`}
  ${props =>
    props.as === 'a' &&
    `    
    text-decoration: none;                                         
  `};
  &:hover{
    cursor: pointer;
    background: ${props => props.bg};
    opacity: 0.9;
  }
`;

export const DynamicComponet = styled.div(space, color, layout, grid, alignItems);

export const Divider = styled.div`
  ${space}
  ${color}
  ${layout}
  ${theme}
`;

export const TextBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${typography}
  ${gridArea}
`;

export const TitleWithText = styled.div` 
  .title {
    margin: 0;
    font-size: 25px;
    color: #72a826;
  }
  p {
    color: #818181;
    font-size: 14px;
  }
  ${props => props.border && `border-bottom: 1px solid #eee`}
`;

export const StyledForm = styled.form`
  ${space}
  ${position}
  ${layout}
  ${flexDirection}
  label {
    display: flex;
    flex-direction: column;
    span {
      color: #818181;
      font-size: 12px;
    }
    input {
      ${color}
      border: 0px;
      height: 40px;
      border-bottom: 1px solid #dcdcdc;
      font-size: 16px;
      line-height: 32px;
      color: ${props => props.color};
      background: transparent;
      &:focus {
        outline: none;
      }
      &:focus {
        &[value=''] {
          &:invalid {
            border-color: red;
          }
        }
      }
    }
  }
`;