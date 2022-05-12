import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
width: 200px;
text-align: center;
display: flex;
flex-direction: column;
justify-items: center;
border: 1px solid;
`;

class SecaoProdutos extends React.Component {
    state = {
       cards: [
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Marte",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Kepler B",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Urano",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Netuno",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para a Lua",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para o Espaço",
            },
        ]
    }


    onChange

    render () {
  
      return (
       
        <CardContainer>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Marte
            </p>
            <p>
                Preço R$ 200,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Kepler B
            </p>
            <p>
                Preço R$ 3000,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                 Viagem para Urano
            </p>
            <p>
                Preço R$ 1500,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Netuno
            </p>
            <p>
                Preço R$ 2500,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para a Lua
            </p>
            <p>
                Preço R$ 700,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para o Espaço    
            </p>
            <p>
                Preço R$ 550,00.
            </p>

        </CardContainer>

);
}
}


export default SecaoProdutos;