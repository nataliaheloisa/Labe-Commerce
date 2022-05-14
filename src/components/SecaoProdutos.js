import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
width: 200px;
text-align: center;
display: flex;
flex-direction: column;
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
                nome: "Viagem para Júpiter",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Saturno",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Kleper B",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem Sagitário B",
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
                Viagem para Júpiter
            </p>
            <p>
                Preço R$ 3000,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                 Viagem para Saturno
            </p>
            <p>
                Preço R$ 1500,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Kleper B
            </p>
            <p>
                Preço R$ 2500,00.
            </p>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem Sagitário B
            </p>
            <p>
                Preço R$ 700,00.
            </p>
        </CardContainer>

);
}
}


export default SecaoProdutos;