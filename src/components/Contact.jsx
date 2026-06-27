import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Globe, Send, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { personalInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.open(
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
      "_self",
    );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section">
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
          06. Contact
        </p>
        <h2 className="section-title">
          Let's Build Something{" "}
          <span style={{ color: "var(--color-accent)" }}>Amazing</span>
        </h2>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "1.05rem",
            maxWidth: "550px",
            lineHeight: 1.7,
            marginTop: "0.75rem",
          }}
        >
          I'm always open to new opportunities and collaborations. Whether you
          have a project in mind or just want to say hi, feel free to reach out!
        </p>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          marginTop: "2.5rem",
        }}
        className="contact-grid"
      >
        {/* Contact info */}
        <ScrollReveal delay={0.1}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              {personalInfo.email}
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                <SiGithub size={20} />
              </div>
              {personalInfo.github.replace("https://", "")}
            </a>

            <a
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                <Phone size={20} />
              </div>
              {personalInfo.phoneDisplay}
            </a>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="contact-name"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="contact-email"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="contact-message"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                className="form-input"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                style={{ resize: "vertical", minHeight: "120px" }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
