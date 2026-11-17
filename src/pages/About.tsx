import { useLang } from "../i18n";

export default function About() {
  const { t } = useLang();
  return (
    <section className="about">
      <h2 className="page-title">{t.greeting}</h2>

      <p className="lead">{t.lead}</p>

      <div className="aboutText">
        <h3>{t.aboutTitle}</h3>
        <p>{t.aboutText}</p>

        <h3>{t.experienceTitle}</h3>
        <p>{t.experience}</p>

        <h3>{t.goalsTitle}</h3>
        <p>{t.goals}</p>
      </div>
    </section>
  );
}
