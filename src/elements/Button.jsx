import styled, { css } from 'styled-components';

const Button = styled.button`
    font-family: ${(props) => (props.theme.font)};
    padding: 8px 10px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    /* background-color: ${(props) => (props.primary ? 'red' : 'green')}; */
    background-color: ${(props) => (props.theme.primary)};
    &:hover {
        background-color: blue;
    }
`;

export default Button;
