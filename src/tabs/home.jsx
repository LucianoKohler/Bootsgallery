import { Outlet } from "react-router-dom";
import RedirectCard from "../components/redirectCard";
import bsImage from "../assets/bs.png";
import PageTitle from "../components/pageTitle";

export default function Home() {
  document.title = "BootsGallery";
  return (
    <div style={{
      backgroundImage: `url(${bsImage})`,
    }}>
      <PageTitle title="BootsGallery" subtitle="A BootsGallery é um site responsivo feito em React e Bootstrap com o intuito de mostrar imagens para o usuário que está a procura de inspiração" />
      <h3 className="text-center mt-3">Escolha um dos nossos temas!</h3>
      <div className="gap-5 justify-content-center align-items-center d-flex flex-column flex-sm-row">
        <RedirectCard title="Aquarela" img="https://www.publicdomainpictures.net/pictures/470000/nahled/aquarell-textur-hintergrund-kunst-1664627177yqb.jpg" text="Encontre fluidez na arte" to="/aquarela" />
        <RedirectCard title="Pixel Arts" img="https://upload.wikimedia.org/wikipedia/commons/a/a4/Isometric_Pixel_Art_by_Peterson_Freitas_%28enlarged%29.gif" text="Menos pixels nãos significa menos beleza" to="/pixel" />
        <RedirectCard title="Fotografias" img="https://upload.wikimedia.org/wikipedia/commons/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg" text="O mundo é a mais bela arte a nossa volta" to="/pics" />
        <RedirectCard title="Releituras" img="https://i.pinimg.com/564x/11/79/9d/11799dc2dbab59340bbe0ea5958c2fef.jpg" text="Arte dentro da arte" to="/releitura" />
      </div>
      <Outlet />
    </div>
  );
}
