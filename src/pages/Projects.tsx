import { projects } from "../data";
import { useLang } from "../i18n";

export default function Projects() {
  const { t, pick } = useLang();
  return (
    <section>
      <h2 className="page-title">{t.projects}</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title.en}>
            <h3>{pick(p.title)}</h3>
            <p>{pick(p.description)}</p>
            <ul className="tags">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a className="link" href={p.link} target="_blank" rel="noopener noreferrer">
              {t.viewProject}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
