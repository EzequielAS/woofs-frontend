import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
`;

export const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #2B2B2B;

    margin-bottom: 14px;
    text-align: left;
    width: 100%;
`;

export const InputsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1.3rem 0;

    div {
        & + div {
            margin-top: 1.3rem;
        }
    }
`;

export const TermsWrapper = styled.div`
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 1.8rem;
    left: 0 ;
    width: 100%;
    
    display: flex;
    justify-content: center;

    button {
        width: calc(100% - 1.8rem);
    }
`