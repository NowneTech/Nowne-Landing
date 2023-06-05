import react from 'react'
import { useState } from 'react'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Logo from '../../assets/logo-brancov2.png'
import AboutImage from '../../assets/12.png'
import serviceImg from '../../assets/2.png'
import serviceImg4 from '../../assets/6.png'
import serviceImg3 from '../../assets/4.png'
import { Animated } from 'react-animated-css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComputerMouse,
  faChevronDown,


} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [showAbout, setShowAbout] = useState<any>(false)
  const [showServices, setShowServices] = useState<any>(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 350 && scrollTop < 700) {
        setShowAbout(true)
      }

      if (scrollTop > 900 && scrollTop < 1800) {
        setShowServices(true)
      }
      console.log('Posição vertical atual:', scrollTop)
    })
  }

  return (
    <main>
      <header className="w-full pl-7 pr-7 pt-3 pb-6">
        <div className="logo-container w-full">
          <Image src={Logo} width={210} alt="Logo - Nowne" />
        </div>
        <section className="sectionContainer w-full h-screen content-center">
          <div className="flex justify-between">
            <Animated
              animationIn="fadeInLeft"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={1000}
              animationInDuration={2000}
            >
              <div className="sm:w-full lg:w-4/5 popup-left">
                <p className="text-4xl sm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl about-lineHeight font-semibold">
                  Transformar{' '}
                  <span style={{ color: '#f97316' }} className="typing">
                    negócios
                  </span>
                  , utilizando{' '}
                  <span style={{ color: '#0ea5e9' }} className="typing">
                    tecnologia
                  </span>{' '}
                  e
                  <span style={{ color: '#3e947c' }} className="typing">
                    {' '}
                    inovação
                  </span>{' '}
                  como aliados.
                </p>
              </div>
            </Animated>
          </div>
        </section>
        <div className="flex w-full align-center flex-col text-center p-3">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Sobre */}
      <section className="aboutContainer drop-shadow flex flex-col items-center">
        <Animated
          animationIn="fadeInLeft"
          animationOut="fadeOut"
          isVisible={showAbout}
          animationInDelay={200}
          animationInDuration={1000}
        >
          <Image src={AboutImage} width={300} alt="Logo - Nowne" />
        </Animated>
        <div
          className="
              sm:w-full lg:w-3/5 text-2xl sm:text-2xl sm:text-2xl mt-4
              md:text-3xl lg:text-2xl font-thin text-center tracking-wider
              leading-4 overflow-hidden
            "
        >
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={showAbout}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <p>
              Acreditamos na transformação do agora, que combina tecnologia com
              negócios, que otimiza processos e alavanca estratégias para
              alcançar resultados por meio de produtos digitais.
            </p>
          </Animated>
        </div>
      </section>

      {/* serviços */}
      <section className="servicesContainer pt-7 pb-7 overflow-hidden">
        <h3 className="text-2xl sm:text-3xl mt-4 md:text-3xl lg:text-3xl font-semibold leading-1 pl-6 mt-3 mb-7">
          Serviços que oferecemos
        </h3>

        <div className="serviceContainerCard mt-4 mb-5 w-full flex justify-evenly align-center flex-wrap">
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col justify-between">
              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl"
                >
                  Nowne Labs
                </h3>

                <p className="mt-5 mb-5">
                  Consultoria em desenvolvimento de ideias, mapeando oportunidades
                  de mercado, público alvo, plano de negócios e ideação da
                  proposta de valor.
                </p>
              </div>

              <Image src={serviceImg} width={180} alt="imagem" className="m-auto"/>
            </div>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col justify-between">
              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl"
                >
                  Nowne Discovery
                </h3>
                <p className="mt-5 mb-5">
                  Consultoria onde mapeamos o produto mínimo viável a ser
                  desenvolvido para que seja possível validar a entrega de valor
                  ao negócio com menor custo e tempo possível.
                </p>
              </div>
              <Image src={serviceImg3} width={180} alt="imagem" className="m-auto"/>
            </div>
          </Animated>

          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col justify-between">
              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl"
                >
                  Nowne Launch
                </h3>
                <p className="mt-5 mb-5">
                  Serviço de desenvolvimento com time multidiciplinar, visando
                  entrega do escopo solicitado pelo cliente.
                </p>
              </div>

              <Image
              src={serviceImg4}
              width={180}
              alt="imagem"
              className="m-auto"
            />
            </div>
          </Animated>
        </div>
      </section>
      <section className="pt-7 pb-7">
        <h3 className="text-2xl sm:text-3xl mt-4 md:text-3xl lg:text-3xl font-semibold leading-1 pl-6 mt-3 mb-7">
          Tecnologias utilizadas pelo nosso time
        </h3>
      </section>
    </main>
  )
}

export default Home
