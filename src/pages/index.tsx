import react from 'react'
import { useState } from 'react'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../assets/logo-brancov2.png'
import AboutImage from '../../assets/about.png'
import serviceImg from '../../assets/3.png'
import serviceImg4 from '../../assets/5.png'
import serviceImg3 from '../../assets/4.png'
import ReactIcon from '../../assets/react.svg'
import NodeIcon from '../../assets/node.svg'
import EvernoteIcon from '../../assets/evernote.svg'
import Figma from '../../assets/figma.svg'
import Github from '../../assets/github.svg'
import Aws from '../../assets/aws.svg'
import Next from '../../assets/next.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import ArrowUp from '../../assets/Arrow-up.svg'

import { Animated } from 'react-animated-css'

const Home = () => {
  const [showAbout, setShowAbout] = useState<any>(false)
  const [showServices, setShowServices] = useState<any>(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function () {
      //@ts-ignore
      let logoContainer = document.querySelector('.logo-container') || false

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > 300 && scrollTop < 700) {
        setShowAbout(true)
      }

      if (scrollTop > 900 && scrollTop < 1800) {
        setShowServices(true)
      }

      if (scrollTop > 10) {
        //@ts-ignore
        logoContainer.classList.add('logo-container-fixed')
      } else {
        //@ts-ignore
        logoContainer.classList.remove('logo-container-fixed')
      }
    })
  }

  return (
    <main>
      <header className="w-full pb-6">
        <div className="logo-container w-full pt-3 pb-3 pl-7">
          <Image src={Logo} width={210} alt="Logo - Nowne" />
        </div>
        <section className="sectionContainer w-full h-screen content-center pl-7 pr-7 ">
          <div className="flex justify-between">
            {/*@ts-ignore*/}
            <Animated
              animationIn="fadeInLeft"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={1000}
              animationInDuration={2000}
            >
              <div className="sm:w-full lg:w-4/5 popup-left">
                <p className="text-2xl sm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl about-lineHeight font-semibold">
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
        {/*@ts-ignore*/}
        <Animated
          animationIn="fadeInLeft"
          animationOut="fadeOut"
          isVisible={showAbout}
          animationInDelay={200}
          animationInDuration={1000}
        >
          <Image
            src={AboutImage}
            width={280}
            alt="Mulher falando ao telefone"
          />
        </Animated>
        <div
          className="
              sm:w-full lg:w-3/5 text-2xl sm:text-1xl mt-4 text-base
              md:text-2xl lg:text-2xl font-thin text-center tracking-wider
              overflow-hidden
            "
        >
          {/*@ts-ignore*/}
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={showAbout}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <p className="paragraph-color">
              Acreditamos na transformação do agora, que combina tecnologia com
              negócios, que otimiza processos e alavanca estratégias para
              alcançar resultados por meio de produtos digitais.
            </p>
          </Animated>
        </div>
      </section>

      {/* linha */}
      <div className="line line-centered" />

      {/* serviços */}
      <section className="servicesContainer pt-7 pb-10 overflow-hidden">
        <h3 className="text-xl sm:text-1xl mt-4 md:text-2xl lg:text-3xl font-bold leading-1 pl-6 pr-6 mt-3 mb-7 text-center paragraph-color ">
          <span style={{ color: '#0ea5e9' }}>Serviços </span>que fornecemos para
          criar o <span style={{ color: '#0ea5e9' }}>melhor</span> produto pra
          você:
        </h3>

        <div className="serviceContainerCard mt-4 mb-5 w-full flex justify-center align-center flex-wrap">
          {/*@ts-ignore*/}
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col">
              <Image
                src={serviceImg}
                width={90}
                alt="imagem"
                className="mb-4"
              />
              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl paragraph-color "
                >
                  Nowne Labs
                </h3>

                <p className="mt-5 mb-5 paragraph-color">
                  Consultoria em desenvolvimento de ideias, mapeando
                  oportunidades de mercado, público alvo, plano de negócios e
                  ideação da proposta de valor.
                </p>
              </div>
            </div>
          </Animated>

          {/*@ts-ignore*/}
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col">
              <Image
                src={serviceImg3}
                width={90}
                alt="imagem"
                className="mb-4"
              />

              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl paragraph-color "
                >
                  Nowne Discovery
                </h3>
                <p className="mt-5 mb-5 paragraph-color ">
                  Consultoria onde mapeamos o produto mínimo viável a ser
                  desenvolvido para que seja possível validar a entrega de valor
                  ao negócio com menor custo e tempo possível.
                </p>
              </div>
            </div>
          </Animated>

          {/*@ts-ignore*/}
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={showServices}
            animationInDelay={200}
            animationInDuration={1000}
          >
            <div className="card flex flex-col">
              <Image
                src={serviceImg4}
                width={90}
                alt="imagem"
                className="mb-4"
              />
              <div>
                <h3
                  className="font-semibold text-2xl sm:text-2xl
                md:text-2xl lg:text-2xl paragraph-color "
                >
                  Nowne Launch
                </h3>
                <p className="mt-5 mb-5 paragraph-color ">
                  Serviço de desenvolvimento com time multidiciplinar, visando
                  entrega do escopo solicitado pelo cliente.
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      <section className="tecnologicSection pt-12 pb-10 pl-7 pr-7">
        <h3 className="text-xl text-center sm:text-left md:text-left lg:text-left sm:text-1xl mt-4 md:text-2xl lg:text-3xl font-semibold leading-1 mt-3 mb-7 paragraph-color ">
          <span style={{ color: '#f97316' }}>Tecnologias</span> utilizadas pelo
          nosso <span style={{ color: '#f97316' }}>time</span>
        </h3>
        <div className="w-full flex flex-wrap justify-center lg:justify-start">
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={ReactIcon}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">REACT</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={Next}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">NEXT</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={NodeIcon}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">NODE</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={EvernoteIcon}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">POSTGRESQL</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={Aws}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">AWS</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={Figma}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">FIGMA</p>
          </div>
          <div className="card-small">
            <div className="card-hr mr-4">
              <Image
                src={Github}
                width={50}
                alt="imagem"
                className="svg-primary mr-2"
              />
            </div>
            <p className="text-general">GITHUB</p>
          </div>
        </div>
      </section>
      {/* linha */}

      <div className="line-primary-rotate line-centered" />

      <section className="contactContainer">
        <h3 className="text-xl sm:text-1xl mt-4 md:text-2xl lg:text-3xl mt-4 font-semibold leading-1 mt-3 mb-7 text-center paragraph-color ">
          Como podemos ajudar na construção do seu produto?
        </h3>
        <button
          className="contact-btn"
          onClick={() => {
            window.open('https://wa.me/5553991869805')
          }}
        >
          <span>Entre em contato conosco</span>
        </button>
        <div className="flex justify-between w-full mb-1">
          <div className="flex">
            <Image
              src={Instagram}
              width={40}
              alt="Instagram - logo"
              className="svg-primary mr-2 social-media"
              onClick={() => {
                window.open('https://www.instagram.com/nowneteam/')
              }}
            />
            <Image
              src={Linkedin}
              width={40}
              alt="Linkedin - logo"
              className="svg-primary mr-2 social-media"
              onClick={() => {
                window.open('https://www.linkedin.com/company/nowne/')
              }}
            />
          </div>
          <Image
            src={ArrowUp}
            width={40}
            alt="Seta pra cima"
            className="svg-primary mr-2 social-media"
            title="Voltar para o inicio"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        </div>
        <p className="text-center paragraph-color ">
          ℗ 2023 Nowne - Todos os direitos reservados
        </p>
      </section>
    </main>
  )
}

export default Home
