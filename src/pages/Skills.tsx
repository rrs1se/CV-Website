import { skills } from "../data";
import { useLang } from "../i18n";

export default function Skills() {
  const { t, pick } = useLang();
  return (
    <section>
      <h2 className="page-title">{t.skills}</h2>
      {skills.map((g) => (
        <div className="skill-group" key={g.group.en}>
          <h3>{pick(g.group)}</h3>
          <ul className="tags big">
            {g.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
