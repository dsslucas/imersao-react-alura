import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components';
import React, { useEffect, useState } from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js'

//Lida com variável de ambiente. Aqui acessa o backend
export async function getServerSideProps(context) {
    //Conexão com o SupaBase
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

    const SUPABASE_URL = process.env.SUPABASE_URL

    return {
        props: {
            SUPABASE_ANON_KEY,
            SUPABASE_URL
        },
    }
}

export default function ChatPage({SUPABASE_ANON_KEY, SUPABASE_URL}) {

    //Campo de mensagem a ser digitada e enviada
    const [mensagem, setMensagem] = useState('')

    //Lista de mensagens
    const [listaMensagem, setListaMensagem] = useState([])

    // Create a single supabase client for interacting with your database
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

    /*
        // Usuário
        - Usuário digita no campo textarea
        - Aperta enter para enviar
        - Tem que adicionar o texto na listagem
        
        // Dev
        - [X] Campo criado
        - [ ] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
        - [ ] Lista de mensagens 
    */

    //Hook do React para alteração APENAS quando ocorrer um efeito
    useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            //Ordena por ID crescente
            .order('id', { ascending: false })
            /* Ctrl + SPACE para apontar direto com o elemento, diferente de dados.data */
            .then(({ data }) => {
                console.log('Dados da consulta:', data)
                setListaMensagem(data)
            })
    }, [])

    //Pega a tabela e seleciona TUDO


    //Novas mensagens enviadas, com chamada no onKeyPress
    function suporteNovasMensagens(novaMensagem) {

        //A partir daqui, o estado que era string se torna um objeto
        const mensagem = {
            //id
            //id: listaMensagem.length + 1,

            //Quem está enviando a mensagem
            de: 'xxmattewxx',

            texto: novaMensagem

        }

        //Realiza o POST no Supabase
        supabaseClient
            .from('mensagens')
            .insert([
                mensagem
            ])
            .then(({ data }) => {
                console.log("Criando mensagem:", data)
                setListaMensagem([
                    //Pega tudo da lista já criada
                    data[0],
                    ...listaMensagem
                ])
            })

        /*
        //A lista não altera, apenas inclui no estado já vigente.
        
        */
        setMensagem('')
    }

    //Envia a mensagem. Funciona para botão e tecla enter.
    function envioMensagem(e) {
        //Quebra o padrão do enter pular linha
        e.preventDefault()

        //Limpa o estado da mensagem
        setMensagem('')
    }

    //Deleta uma mensagem
    function deletaMensagem(id) {
        //Filtra pelo ID, selecionando o elemento, isolando-o e criando um novo array
        const apagarElementoLista = listaMensagem.filter(
            (mensagem) => mensagem.id !== id
        );
        setListaMensagem(apagarElementoLista);
    }

    function Header() {
        return (
            <>
                <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text variant='heading5'>
                        Chat
                    </Text>
                    <Button
                        variant='tertiary'
                        colorVariant='neutral'
                        label='Logout'
                        href="/"
                    />
                </Box>
            </>
        )
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://i.imgur.com/oy5Y6p4.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />

                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaMensagem}/>
                    {/*
                    Lista de mensagens: {listaMensagem.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })}
                    */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/*Input que digita a mensagem */}
                        <TextField
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            value={mensagem}
                            onChange={e => {
                                setMensagem(e.target.value)
                            }}
                            onKeyPress={e => {
                                //Quando pressiona Enter
                                if (e.key === 'Enter') {
                                    //Chama uma função
                                    envioMensagem(e)
                                    suporteNovasMensagens(mensagem)
                                }
                            }}
                        />

                        <Button
                            type='submit'
                            label='Enviar'
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                            styleSheet={{

                                hover: {
                                    backgroundColor: 'green',
                                }
                            }}
                            onClick={e => {
                                envioMensagem(e)
                                suporteNovasMensagens(mensagem)
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )

    function MessageList(props) {
        console.log(props)

        return (
            <Box
                tag="ul"
                styleSheet={{
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flex: 1,
                    color: appConfig.theme.colors.neutrals["000"],
                    marginBottom: '16px',
                }}
            >
                {props.mensagens.map((mensagem) => {
                    return (
                        <Text
                            key={mensagem.id}
                            tag="li"
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '12px',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '8px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    styleSheet={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        marginRight: '8px',
                                    }}
                                    src={`https://github.com/${mensagem.de}.png`}
                                />

                                <Text tag="strong">
                                    {mensagem.de}
                                </Text>


                                <Text
                                    styleSheet={{
                                        fontSize: '10px',
                                        marginLeft: '8px',
                                        color: appConfig.theme.colors.neutrals[300],
                                    }}
                                    tag="span"
                                >
                                    {(new Date().toLocaleDateString())}
                                </Text>

                                <Icon name={"FaTrash"}
                                    styleSheet={{
                                        marginLeft: '15px',
                                        width: '15px',
                                        height: '15px',

                                        color: appConfig.theme.colors.primary['000'],
                                        hover: {
                                            color: 'red',
                                        },
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        deletaMensagem(mensagem.id)
                                    }}
                                />
                            </Box>

                            {mensagem.texto}
                        </Text>
                    )
                })}
            </Box>
        )
    }
}