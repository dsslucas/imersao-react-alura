//Import das cores padrão
import appConfig from '../config.json'

//Skynex
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useEffect, useState } from 'react';

//Roteamento do Next
import { useRouter } from 'next/router'

/*
//Executa códigos para browser, independente do Next.js
if (typeof window === 'object') {
    alert("Estou funcionando")

}
*/

function Title(props) {
    //Tag. Pega o que vem da Props, caso contrário, usa h1
    const Tag = props.tag || "h1"
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600
                }
                `}
            </style>
        </>

    )
}

export default function PaginaInicial() {
    //Pega a imagem e o nickname do GitHub. É estado!
    const [username, setUsername] = React.useState('')

    //Nickname
    const [checkNickname, setCheckNickname] = useState(false)

    //Nome do usuário no GitHub
    const [name, setName] = useState('')

    //Roteamento
    const roteamento = useRouter()

    // Informações que vem da API.
    var url = `https://api.github.com/users/${username}`


    const valoresApi = fetch(url)
        .then(response => response.json())
        .then(data => {
            //var element = document.getElementById("nomePerfil")
            //element.innerText = data.name

            console.log("NOME INFORMADO PELA API:", data.name)

            //Checa o login, se é válido ou não. Importante para autenticação no form.
            if (data.login) {
                setCheckNickname(true)
                setName(data.name)
            }
            else {
                setCheckNickname(false)
                setName('')
            }
        })
        .catch(error => console.log(error));

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://i.imgur.com/oy5Y6p4.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '8px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700]
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (e) {
                            {/* Para evitar de recarregar o formulário, diferente do padrão */ }
                            e.preventDefault()
                            console.log("Alguém submeteu o form")

                            if (checkNickname === true) {
                                console.log("Entrei na condição de autenticação")
                                //Passa pro chat passando o username definido
                                roteamento.push(`/chat?username=${username}`)
                            }

                            else{
                                alert("Usuário não reconhecido pela plataforma! Por gentileza, informe o nickname correto.")
                            }

                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            Informe seu usuário do GitHub para entrar no chat
                        </Text>

                        {/*<input
                            type="text"
                            value={username}
                            onChange={function (e) {
                                console.log("Usuário digitou")
                                setUsername(e.target.value)
                            }} />
                        */}
                        <TextField
                            value={username}
                            onChange={function (e) {
                                console.log("Usuário digitou")
                                setUsername(e.target.value)
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                                display: (checkNickname) ? 'flex' : 'none'
                            }}
                            src={checkNickname ? `https://github.com/${username}.png` : ''}
                        />

                        {/* Nome do perfil do GitHub */}
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {checkNickname ? name : ''}
                        </Text>

                        {/* Nickname do GitHub */}
                        <Text
                            variant="body5"
                            tag="a"
                            target="_blank"
                            href={`https://github.com/${username}`}
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                marginTop: '5px',
                                borderRadius: '1000px',
                                fontSize: '12px'
                            }}
                        >
                            {checkNickname? username : ''}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}

