import bgImg from "../assets/imgs/hero/bgHeroPrevidenciario.webp";
import bgImgAbout from "../assets/imgs/about/aboutImgPrev.webp";
import logo from "../assets/imgs/logo/logo.png";

const currentYear = new Date().getFullYear();

const infos = {
  name: "Juliano Aleixo Advocacia",
  phone: {
    ddd: "69",
    firstPart: "99980", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "7532", // Apenas os 4 últimos números
  },
  email: "contato", // Email desejado pelo cliente
  domain: "julianoaleixoadvocacia.com.br", // Sem "www"
  instagramProfile: "adv.julianoaleixo", // Sem o @
  whatsappDefaultMessage:
    "Olá! Vim através da sua página sobre BPC/LOAS e gostaria de tirar umas dúvidas.",
};

const LpContent = {
  infos: {
    name: "Dr. Juliano Aleixo",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca Dr Juliano Aleixo",
    },
    textArea: {
      title: (
        <h1>
          Sabia que<span className="text-primary"> você </span>
          pode ter direito ao<span className="text-primary"> BPC/LOAS</span>?
        </h1>
      ),
      subtitle:
        "Descubra como garantir o seu benefício e assegurar uma vida digna para quem mais precisa. Suporte especializado para você e sua família.",
      buttonLabel: "Quero falar com um especialista",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "CONSIGA SEU BPC/LOAS",
      title: "Quem pode solicitar?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart-pulse"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
        ),
        title: "Idosos em vulnerabilidade social",
        description:
          "Se você é idoso ou tem um familiar idoso com mais de 65 anos em situação de vulnerabilidade social e que não cumpre os critérios para percepção de aposentadoria, o BPC/LOAS é seu direito.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-accessibility"
          >
            <circle cx="16" cy="4" r="1" />
            <path d="m18 19 1-7-6 1" />
            <path d="m5 8 3-3 5.5 3-2.36 3.5" />
            <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
            <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
          </svg>
        ),
        title: "Pessoas com deficiência / Doenças graves",
        description:
          "Se você ou um familiar tem uma deficiência ou uma doença grave. Saiba que o BPC pode ser um direito seu. Solicite uma analise do seu caso.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-baby"
          >
            <path d="M9 12h.01" />
            <path d="M15 12h.01" />
            <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
            <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
          </svg>
        ),
        title: "Crianças com Autismo",
        description:
          "Se você é pai de uma criança com autismo, saiba que o BPC pode ser um direito do seu filho devido aos custos com terapias e acompanhamentos médicos.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ban"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        ),
        title: "Benefício negado ou cancelado",
        description:
          "Se o seu pedido foi indeferido ou o benefício foi cancelado injustamente, recorremos à justiça para restabelecer seu direito ao benefício.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: bgImgAbout,
      alt: "Imagem ilustrativa",
    },
    sectionHeader: {
      miniTag: "TRADIÇÃO EM DIREITO PREVIDENCIÁRIO",
      title: "Comprometimento e agilidade",
    },
    paragraph: (
      <p>
        Na minha rotina diária, entendo que rapidez é fundamental para nossos
        clientes, especialmente em questões previdenciárias. Por isso, atuo de
        forma ágil e estratégica, sem comprometer a qualidade. Com foco em
        garantir que seus direitos sejam resguardados com eficiência e
        determinação.
        <br />
        <br />
        Independentemente do seu problema previdenciário, estou pronto para
        oferecer a melhor solução jurídica. Entre em contato com Juliano Aleixo
        Advocacia e veja como podemos ser decisivos na defesa dos seus direitos.
      </p>
    ),
    buttonLabel: "Falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A MELHOR ESCOLHA",
      title: "Por que nos escolher pra te defender?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-lightbulb"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        title: "Estratégia personalizada para garantir seu BPC/LOAS",
        description:
          "Vamos examinar seu pedido de BPC/LOAS com atenção e cuidado. Juntos, vamos criar uma estratégia personalizada para garantir que você receba o benefício que merece. Conte com nossa ajuda em cada passo do caminho!",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ruler"
          >
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
            <path d="m14.5 12.5 2-2" />
            <path d="m11.5 9.5 2-2" />
            <path d="m8.5 6.5 2-2" />
            <path d="m17.5 15.5 2-2" />
          </svg>
        ),
        title: "Soluções sob medida para seu BPC/LOAS",
        description:
          "Elaboramos um plano de ação especialmente para o seu pedido de BPC/LOAS, com o objetivo de resolver tudo de forma rápida e eficiente. Cada passo que damos é pensado para garantir que seus interesses estejam sempre em primeiro lugar. Estamos aqui para ajudar a transformar essa situação em uma solução concreta para você.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-handshake"
          >
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
          </svg>
        ),
        title: "Compromisso total com sua aprovação",
        description:
          "Estamos totalmente comprometidos com o seu pedido de BPC/LOAS, defendendo seus direitos a cada etapa do processo. Com nossa ajuda, você pode ter a certeza de que estamos focados em garantir sua aprovação, cuidando de cada detalhe para que você alcance o resultado desejado.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hourglass"
          >
            <path d="M5 22h14" />
            <path d="M5 2h14" />
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
          </svg>
        ),
        title: "Experiência que traz confiança",
        description:
          "Com vasta experiência em solicitações de BPC/LOAS, estou aqui para garantir que seu processo seja tratado com a máxima segurança e eficiência. Estarei ao seu lado em cada passo, cuidando para que seus direitos sejam respeitados e que você receba o benefício que merece. Conte comigo para fazer a diferença na sua jornada!",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA MAIS TEMPO",
      title: "Garanta seu BPC/LOAS agora mesmo!",
      subtitle: `O escritório Juliano Aleixo Advocacia está aqui para ajudar você. Nossa equipe especializada em direito previdenciário pode orientá-lo em todo o processo para assegurar que você receba o BPC/LOAS que tem direito. Não deixe que dificuldades financeiras ou burocráticas impeçam você de acessar o benefício que merece.`,
    },
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default LpContent;
