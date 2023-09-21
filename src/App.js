import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

// Guardo todos meus dados aqui
const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    alt: "Imagem de Mayk Brito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png"
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    alt: "Imagem de Alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png"
  },

  {
    url: "https://www.twitch.tv/cellbit",
    alt: "Imagemd de Cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png"
  }
];

const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: ""
  },

  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: ""
  },

  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: ""
  },

  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: ""
  }
];

export default function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main>
        {/* SECTIONS */}
        <Section
          title="Meus Jogos"
          subtitles="Os games que mais curto jogar!"
          className="games-list"
        >
          {/* Itens da lista */}

          {/* Processo, de forma dinamica, os meus dados e os renderizo em forma de 1 componente cada  */}
          {gameListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitles="Lista de canais e transmissões"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitles="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

// TODO: Corrigir as imagens que não existem mais
// TODO: Corrigir os links das redes sociais
// TODO: Adicionar as imagens de fundo que está no projeto puro
// TODO: Trocar as capas dos jogos
