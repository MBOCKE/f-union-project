import { Container } from "@/core/components/Container";
import { NewsCard } from "./NewsCard";
import { Button } from "@/core/components/Button";

export const NewsSection = () => {
   const articles = [
      {
         text: "F-Union Africa Summit : le grand rendez-vous de l'innovation et de l'entrepreneuriat à Dakar en Mars 2026",
         date: "12 Octobre 2025"
      },
      {
         text: "Startups africaines : comment lever des fonds et développer son entreprise sur le continent ?",
         date: "05 Novembre 2025"
      },
      {
         text: "Le boom de la tech en Afrique de l'Ouest : focus sur le Sénégal, la Côte d'Ivoire et le Bénin",
         date: "22 Décembre 2025"
      }
   ];

   return (
      <section className="py-24 bg-white hidden">

         <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {articles.map((article, i) => (
                  <NewsCard key={i} {...article} />
               ))}
            </div>
         </Container>
      </section>
   );
};
