import { profile } from "../data";
import { useLang } from "../i18n";
import { useClock } from "../hooks";

export default function Sidebar() {
  const { lang, t, pick } = useLang();
  const time = useClock(profile.location.timeZone, lang === "uk" ? "uk-UA" : "en-GB");
  return (
    <aside className="sidebar">
      <div className="avatar">
        {profile.photo ? <img src={profile.photo} alt={t.name} width={165} height={185} draggable={false} onContextMenu={(e) => e.preventDefault()} /> : t.initials}
      </div>
      <h1>{t.name}</h1>
      <p className="role">{t.role}</p>
      <span className="status">
        <i /> {t.status}
      </span>

      <p className="place">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        {pick(profile.location.text)} · {time}
      </p>

      <div className="divider" />

      <h2 className="contacts-title">{t.contactsTitle}</h2>
      <ul className="contacts">
        {profile.contacts.map((c) => (
          <li key={c.key}>
            <span>{t.contact[c.key]}</span>
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {c.value}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="contacts-title langs-title">{t.languagesTitle}</h2>
      <ul className="langs">
        {profile.languages.map((l) => (
          <li key={l.name.en}>
            <span>{pick(l.name)}</span>
            <b>{pick(l.level)}</b>
          </li>
        ))}
      </ul>

      <a className="cv-btn" href={profile.cv} download={`Mykhailo_Bilenets_CV.pdf`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        {t.downloadCv}
      </a>

      <footer>© {new Date().getFullYear()} {t.name}. {t.rights}</footer>
    </aside>
  );
}
