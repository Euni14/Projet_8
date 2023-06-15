import Collapse from "../../compenents/Collapse/Collapse";
import "./About.css";

const aboutContents = [
  {
    id: "about1",
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "about2",
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "about3",
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une experience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: "about4",
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement corespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
function About(props) {
  return (
    <div>
      {/*<h1>About composant</h1>*/}
      <div className="imageAbout"></div>

      {aboutContents.map((aboutContent) => (
        <Collapse
          key={aboutContent.id}
          title={aboutContent.title}
          text={aboutContent.text}
        />
      ))}
    </div>
  );
}

export default About;
