import { NavBar } from "./components/Navbar/Navbar";
import sheldon from "./assets/images/sheldon.jpg";
import "./global.css";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <section id="hero">
          <h1>
            Conhecendo a série Jovem <span>Sheldon</span>
          </h1>
        </section>

        <section id="about">
          <div className="about-image">
            <img
              src={sheldon}
              alt="Imagem do ator principal da série, Sheldon"
            />
          </div>

          <div className="about-text">
            <h2>Sinopse</h2>
            <p>
              Em Young Sheldon, spin-off de <strong>The Big Bang Theory</strong>
              , a trama acompanha o{" "}
              <em>jovem Sheldon Cooper (Iain Armitage)</em>, de 9 anos, quando
              ele pula quatro séries para começar o ensino médio junto com seu
              irmão mais velho, menos intelectual. Enquanto ele luta para ser
              compreendido por sua família, colegas e vizinhos, sua mãe o
              oferece a melhor ferramenta que pode inventar: lembrar aos
              valentões que seu pai é o treinador de futebol e que seu irmão
              está no time. Sua irmã gêmea não compartilha sua mente
              excepcional, mas ela tem uma visão muito mais clara do que a vida
              reserva para o jovem gênio.
            </p>

            <a
              href="https://www.netflix.com/br/title/80192612?source=35"
              target="_blank"
              rel="noreferrer"
            >
              Assistir agora!
            </a>
          </div>
        </section>

        <section id="main-cast">
          <h2 className="cast-title">Elenco Principal</h2>

          <div className="cards-container">
            <Card
              image={
                "https://people.com/thmb/hVkDfuX1W31Kyg51iW6gGPEp9Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(725x151:727x153)/iain-armitage-tout-022124-8de51ed401bd4ac192d4273db8e2585b.jpg"
              }
              name={"Iain Armitage"}
              character={"Sheldon Cooper"}
            />
            <Card
              image={
                "https://scontent.frao3-1.fna.fbcdn.net/v/t1.6435-9/120090685_3323365911112489_8900841751086995161_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGOpWR5ggsi2exSZ-qQQ0uQJZ_zcYVXfBQln_NxhVd8FD8rhiBNCOq1FYD7chAc7CI7lniu40kJJ8RwQXaSwyoN&_nc_ohc=HDAwcTwgyB0Q7kNvgE5GmTl&_nc_ht=scontent.frao3-1.fna&oh=00_AYDxp6GTKBTcYT6LhqClN7tNIlybtB_Lz9G0PMCw87EHvA&oe=672039A8"
              }
              name={"Zoe Perry"}
              character={"Mary Cooper"}
            />
            <Card
              image={
                "https://starrymag.com/wp-content/uploads/2019/09/115365_1006b.jpg"
              }
              name={"Lance Barber"}
              character={"George Cooper Sr."}
            />
            <Card
              image={
                "https://people.com/thmb/dZGWDgc90KAG0DEsbas3vU8jAO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/annie-potts-young-sheldon-052324-7ca4c3f9ed8243e4b113e7a50b121d69.jpg"
              }
              name={"Annie Potts"}
              character={"Meemaw"}
            />
            <Card
              image={
                "https://br.web.img2.acsta.net/pictures/18/02/23/12/32/1569733.jpg"
              }
              name={"Montana Jordan"}
              character={"Georgie Cooper Jr"}
            />
            <Card
              image={
                "https://scontent.frao3-1.fna.fbcdn.net/v/t1.6435-9/49319445_2010643155718111_5068228333183959040_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOp7LegmiTpBnFSnFUeOquU79n9KKwrVtTv2f0orCtWyzoq_K9zT8yJEJ0pb51g6dnt5BUl7QIQ1vrJNUC2q3i&_nc_ohc=xnwIFBd9AxkQ7kNvgFH_7xs&_nc_ht=scontent.frao3-1.fna&_nc_gid=AX8v_AVdnJ19DXG54lQM8xl&oh=00_AYCIekhS9j8XGyMfSSrwQu6AanpFvR5D1vIHiRNIGiW0og&oe=67204D63"
              }
              name={"Raegan Revord"}
              character={"Missy Cooper"}
            />
            <Card
              image={
                "https://m.media-amazon.com/images/M/MV5BNWZlMDU4YWQtYzgxZC00NjcxLTg3OTAtZjU0MTdmNDcxMWQ4XkEyXkFqcGc@._V1_.jpg"
              }
              name={"Matt Hobby"}
              character={"Pastor Jeff"}
            />
            <Card
              image={
                "https://cinepop.com.br/wp-content/uploads/2024/03/Jim-Parsons.jpg"
              }
              name={"Jim Parsons"}
              character={"Sheldon Cooper (Adulto)"}
            />
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export default App;
