import "./header.css";

export default function Headers() {
  const links = [
    { label: "WORK", url: "#work" },
    { label: "ABOUT", url: "#about" },
    { label: "CONTACT", url: "#contact" }
  ];
  const name = "Vaibhav Bankar";
  const socialLinks = [
    {
      label: "facebook",
      icon: undefined,
      link: "https://www.facebook.com"
    },
    {
      label: "google",
      icon: undefined,
      link: "https://www.google.com"
    },
    {
      label: "linkedIn",
      icon: undefined,
      link: "https://www.linkedIn.com"
    }
  ];
  return (
    <header>
      <div className="headerGroup">
        {links.map(link => (
          <a key={link.label} href={link.url} className="headerGroupItem">
            {link.label}
          </a>
        ))}
      </div>
      <div>
        <h1
          id="name"
          onClick={() => {
            window.location.href = window.location.origin;
          }}>
          {name}
        </h1>
      </div>
      <div className="headerGroup">
        {socialLinks.map(link => (
          <a
            target="_blank"
            href={link.link}
            className="headerGroupItem"
            rel="noreferrer">
            {link.icon ? (
              <img src={link.icon} alt={link.label} />
            ) : (
              <div>{link.label}</div>
            )}
          </a>
        ))}
      </div>
    </header>
  );
}
