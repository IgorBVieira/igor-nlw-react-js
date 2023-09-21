import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

// Guardo todos meus dados aqui
const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    url: "https://www.twitch.tv/directory/category/crossfire-2007",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27101_IGDB-90x120.jpg",
    alt: "Imagem do jogo CrossFire",
  },

  {
    url: "https://www.twitch.tv/directory/category/counter-strike-global-offensive",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-90x120.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  
  {
    url: "https://www.twitch.tv/directory/category/s-t-a-l-k-e-r-call-of-pripyat",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/23609_IGDB-90x120.jpg",
    alt: "Imagem do jogo Minecraft",
  },


];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    alt: "Imagem de Mayk Brito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
  },

  {
    url: "https://www.youtube.com/@FilipeDeschamps",
    alt: "Imagem de Felipe Deschamps",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AOPolaTrJ25jHuKWgWdMXv3MiCZRHQzT_GDS496CPeEZ=s176-c-k-c0x00ffffff-no-rj",
  },

  {
    url: "https://www.youtube.com/@manodeyvin",
    alt: "Imagemd de Mano Deyvin",
    imageUrl:
      "https://yt3.googleusercontent.com/sqd29Za-ALVl9Dv7E01Jo54jDwnsp89zU8D80exJL6-T6qdQkchWazkVpOlyt47b4fZ0mpXp8A=s176-c-k-c0x00ffffff-no-rj",
  },

  {
    url: "https://www.youtube.com/@JovemTranquilao",
    alt: "Imagemd de Jovem Tranquilão",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AOPolaSJnLJuo0FwVUZSym5cWmqypn7S7LjRdPQzJm6TFJY=s176-c-k-c0x00ffffff-no-rj",
  },

  {
    url: "https://www.youtube.com/@LucasMontano",
    alt: "Imagem de Lucas Montano",
    imageUrl:
      "https://yt3.googleusercontent.com/z0Ccoolotr1Q4F2EaCIgaR4GWLAR_VCwP25QrTica_e9XV6x8-kuQx_qnqI1mnaOkYl6KkIL=s176-c-k-c0x00ffffff-no-rj",
  },

  {
    url: "https://www.youtube.com/@Akitando",
    alt: "Imagemd de Akitando",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AOPolaTQdrKmscWaHafS63-KZYs7t5tfLl8Dj6oROD_IxW0=s176-c-k-c0x00ffffff-no-rj",
  }
];

const socialListData = [
  {
    url: "https://www.twitch.tv/017_noc",
    imageUrl: "/assets/twitch.svg",
    alt: "Link para o perfil do twitch de Igor/Noc",
  },

  {
    url: "https://twitter.com/iNoctys",
    imageUrl: "/assets/twitter.svg",
    alt: "Link para o perfil do twitter de Igor/Noc",
  },

  {
    url: "https://www.instagram.com/noc.017/",
    imageUrl: "/assets/instagram.svg",
    alt: "Link para o perfil do instagram de Igor/Noc",
  },

  {
    url: "https://www.youtube.com/@noc.017",
    imageUrl: "/assets/youtube.svg",
    alt: "Link para o perfil do youtube de Igor/Noc",
  },
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
          {gameListData.map(function (item, index) {
            return (
              <ListItem
                key={index}
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
          {channelListData.map(function (item, index) {
            return (
              <ListItem
                key={index}
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
          {socialListData.map(function (item, index) {
            return (
              <ListItem
                key={index}
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
