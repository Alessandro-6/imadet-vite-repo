/* eslint-disable react/prop-types */
import ContentBox from "./ContentBox";
export default function About() {
  return (
    <section className="section-about">
      <ContentBox title="visão" num={1}>
        Ser considerada a melhor empresa de aluguel de ferramentas e de
        equipamentos para construção civil em Angola.
      </ContentBox>

      <ContentBox title="Missão" num={2}>
        Promover soluções para o aluguel de ferramentas e equipamentos
        relacionados para construção civil com eficiência e qualidade.
      </ContentBox>

      <ContentBox
        title="sobre "
        element={
          <img
            src="images/brand-dark.svg"
            className="logo-imadet-sm"
            alt="logo light"
          />
        }
        num={7}
      >
        Somos a Imadet uma loja virtual especializada no divulgação de materiais
        de construção civil facilitando o aluguer dos mesmos.
      </ContentBox>
    </section>
  );
}
