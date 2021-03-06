import styled from "styled-components";

const Title = styled.h2<{fontFamily?: string, fontSize?: string, fontWeight?: string, lineHeight?: string, color?: string, margin?: string, textAlign?: string}>`
  font-family: ${({fontFamily}) => fontFamily ? fontFamily : 'Poppins'}, sans-serif;
  font-size: ${({fontSize}) => fontSize ? fontSize : '2rem'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '700'};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : '2.7rem'};
  color: var(${({color}) => color ? color : "--neutrals-700"});
  text-align: ${({textAlign}) => textAlign} ;
  margin: ${({margin}) => margin ? margin : 0};

  display: flex;
  align-items: center;
  gap: 1rem;
`
export default Title;