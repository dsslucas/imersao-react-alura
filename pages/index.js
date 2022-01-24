//Import das cores padrão
import appConfig from '../config.json'

//Global Style
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          background: 
        }

        body {
          font-family: 'Open Sans', sans-serif;
        }

        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }

        #__next {
          flex: 1;
        }

        #__next > * {
          flex: 1;
        }
        
        /* ./App fit Height */ 
      `}</style>
    );
  }

function Title(props) {
    //Tag
    const Tag = props.tag
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['900']};
                    font-size: 24px;
                    font-weight: 600
                }
                `}
            </style>
        </>

    )
}

//Componente React
function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Title tag="h2">Seja bem vindo!</Title>
            <h2>Discord - Simulado</h2>


        </div>
    )
}

export default HomePage