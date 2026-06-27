import ScrollReveal from "./ScrollReveal";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p
          className="mono"
          style={{
            color: "var(--color-accent)",
            fontSize: "0.9rem",
            marginBottom: "0.5rem",
          }}
        >
          03. Work
        </p>
        <h2 className="section-title">Featured Projects</h2>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
          marginTop: "2.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
