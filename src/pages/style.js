import styled from "styled-components";

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #FFC0CB;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 2px solid #8806CE;
    border-radius: 8px;
    margin: 15px; 
    background-color: #FADADD
`

export const Input = styled.input`
    width: 300px;
    height: 20px;
    padding: 6px 16px;
    border: 2px solid #8806CE;
    border-radius: 8px;
    background: transparent;
    color: #000000;
    outline: none;
`

export const Button = styled.button`
    width: 336px;
    height: 32px;
    padding: 8px 16px;
    background: #9CE2F8;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #000000;
        background: #EE82EE;
    }
    &:active {
        background: #EE82EE;
    }

    &:disabled {
        color: #000000;
        background: #ffffff;
    }
`

export const H1 = styled.span`
    color: #000000;
    font-size: 20px;
    margin-bottom: 15px;
`
export const Text = styled.span`
    color: #000000;
    font-size: 14px;
`
export const TextLink = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #8806CE;
    cursor: pointer;
`