import Header from "./header";
import { useReactLocationHash } from "./helpers/urlHash";
import Projects from "./projects";

export default function Main() {
  const hash = useReactLocationHash();
  return (
    <div>
      <Header></Header>
      {hash === "" && <Projects></Projects>}
      {hash === "#work" && <div>work</div>}
      {hash === "#about" && <div>about me</div>}
      {hash === "#contact" && <div>contact me</div>}
    </div>
  );
}
