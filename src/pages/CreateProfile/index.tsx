import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { GoBackButton } from '../../components/GoBackButton';
import { DefaultButton } from '../../components/DefaultButton';
import { GreenTitle } from '../../components/GreenTitle';
import { OptionMarker } from '../../components/OptionMarker';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { 
    Container, 
    SectionTitle, 
    InputsWrapper,  
    TermsWrapper,
    ButtonWrapper 
} from './styles';

export function CreateProfile() {
    return (
        <Container>
            <Header>
                <GoBackButton link='/'>
                    <FaAngleLeft size={17} />
                </GoBackButton>

                <GreenTitle>Criar conta</GreenTitle>
            </Header>

            <InputsWrapper>
                <SectionTitle>Informações pessoais</SectionTitle>
                <Input 
                    label="Nome"
                />
                <Input 
                    label="E-mail"
                />
                <Input 
                    label="CPF"
                />
                <Input 
                    label="Senha"
                    type="password"
                />
                 <Input 
                    label="Repita a senha"
                    type="password"
                />
            </InputsWrapper>

            <TermsWrapper>
                <SectionTitle>Termos e informações</SectionTitle>
                <OptionMarker>Receber informações por e-mail</OptionMarker>
                <OptionMarker>Aceitar <Link to='/createprofile'>termos de uso</Link></OptionMarker>
            </TermsWrapper>

            <ButtonWrapper>
                <DefaultButton>
                    Avançar
                </DefaultButton>
            </ButtonWrapper>

        </Container>
    )
};