import styled from '@emotion/native';

const Text = styled.Text`
  font-family: 'AbhayaLibre-Bold';
  ${props => props.h1 || props.h2 || (props.h3 && 'font-weight: 700;')}
  ${props => props.h1 && 'font-size: 46px;'}
  ${props => props.h2 && 'font-size: 36px;'}
  ${props => props.h3 && 'font-size: 30px;'}
  margin-bottom: 20px;
`;

export default Text;
