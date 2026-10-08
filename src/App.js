import React, { useState } from "react";
import "./App.css";
import luckyshop from "./assets/Lucky fruits.png";
import SugarTrack from "./assets/sugarTrack.png";
import photoShoot from "./assets/photoshoot.png";
import vivah from "./assets/vivah.png";
import blinkit from "./assets/blinkit.png";
import blogbeast from "./assets/blogbeast.png";
import resume from "./assets/resume.pdf";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Mail,
  FileText,
  ExternalLink,
  Code,
  Briefcase,
  Award,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Database,
  Cpu,
  Layers,
  MapPin,
  Phone
} from "lucide-react";

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.884-6.949-1.864-1.865-4.33-2.891-6.97-2.892-5.437 0-9.866 4.372-9.87 9.802-.001 1.97.512 3.894 1.492 5.595l-.973 3.548 3.66-.949zm10.516-6.666c-.274-.136-1.62-.8-1.874-.893-.254-.094-.44-.14-.624.136-.184.275-.713.893-.873 1.077-.16.184-.32.206-.593.07-2.073-1.037-3.415-1.874-4.787-4.224-.363-.622.363-.578 1.039-1.927.113-.228.056-.427-.028-.593-.085-.167-.713-1.72-.977-2.35-.257-.615-.52-.53-.713-.54-.184-.01-.395-.012-.607-.012-.213 0-.56.08-.854.4-.294.32-1.12 1.09-1.12 2.66 0 1.57 1.144 3.09 1.304 3.3.16.21 2.25 3.434 5.447 4.81.76.328 1.353.524 1.815.67.763.243 1.458.209 2.008.127.613-.09 1.62-.663 1.85-1.3.23-.638.23-1.186.162-1.3-.07-.113-.254-.205-.528-.34z" />
  </svg>
);


const socialLinks = {
  github: "https://github.com/sahil-6757",
  linkedin: "https://www.linkedin.com/in/sahilpathan27",
  email: "sahilpathan.dev@gmail.com",
  phone: "+91 89833 06757",
  resume: resume
};

function App() {
  const [result, setResult] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Web3Forms access key
    formData.append("access_key", "d9046c9a-3766-465a-a153-2308857f1fef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! 🚀");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  const projects = [
    {
      title: "BlogBeast Platform",
      image: blogbeast,
      category: "Full Stack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A professional blogging platform featuring rich text editing, interactive search, category tagging, and user profile management.",
      link: "https://blogbeast.in/"
    },
    {
      title: "SugarTrack App",
      image: SugarTrack,
      category: "Full Stack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      description: "A comprehensive health tracking dashboard enabling users to track glucose levels, food intake, and generate interactive health reports.",
      link: "https://sugartruck.blogbeast.in/"
    },
    {
      title: "Blinkit E-commerce Clone",
      image: blinkit,
      category: "Frontend",
      tech: ["React.js", "TailwindCSS", "Redux", "CSS3"],
      description: "A high-performance grocery delivery interface capturing real-time product sorting, categorization, and a dynamic drawer checkout system.",
      link: "#"
    },
    {
      title: "Lucky Fruits Shop",
      image: luckyshop,
      category: "Frontend",
      tech: ["React.js", "CSS3", "JavaScript"],
      description: "An interactive fruit e-commerce site showcasing full-screen parallax layouts, optimized imagery, and modular shopping cart components.",
      link: "https://luckyshop.blogbeast.in/"
    },
    {
      title: "Studio Photoshoot",
      image: photoShoot,
      category: "Frontend",
      tech: ["React.js", "CSS Grid", "Interactions"],
      description: "A premium photography studio portfolio focusing on aesthetic masonry grid galleries, lightboxes, and clean consultation request forms.",
      link: "https://photoshoot.blogbeast.in"
    },
    {
      title: "Vivah Matrimonial",
      image: vivah,
      category: "Full Stack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      description: "A matching platform featuring advanced user profile registrations, dynamic recommendation filters, and secure message queues.",
      link: "#"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "2+", color: "#38bdf8", icon: <Briefcase size={22} /> },
    { label: "Projects Completed", value: "15+", color: "#818cf8", icon: <Code size={22} /> },
    { label: "Happy Clients", value: "100%", color: "#a855f7", icon: <CheckCircle size={22} /> },
    { label: "Core Expertise", value: "MERN", color: "#ec4899", icon: <Award size={22} /> }
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layers size={18} style={{ color: "#38bdf8" }} />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "TailwindCSS"]
    },
    {
      title: "Backend & Systems",
      icon: <Cpu size={18} style={{ color: "#a855f7" }} />,
      skills: ["Node.js", "Express.js", "RestFull API"]
    },
    {
      title: "Databases & Tools",
      icon: <Database size={18} style={{ color: "#818cf8" }} />,
      skills: ["MongoDB", "MySQL", "Git", "Postman"]
    }
  ];

  const testimonials = [
    {
      quote: "Sahil's understanding of MERN stack is outstanding. He delivered our e-commerce features ahead of schedule and optimized API performance significantly.",
      author: "Prakash Patel",
      role: "Lead Engineer @ Darshan Digital Solution",
      avatar: "PP"
    },
    {
      quote: "During his internship, Sahil was incredibly proactive. He redesigned key customer interfaces, improving user retention and responsive interactions on all devices.",
      author: "Neha Sharma",
      role: "Project Manager @ Numetry Technology",
      avatar: "NS"
    },
    {
      quote: "A talented developer who quickly understands business needs and translates them into solid, production-ready code. Highly recommended for full-stack tasks.",
      author: "Rajesh Mehta",
      role: "Founder @ BlogBeast Tech",
      avatar: "RM"
    }
  ];

  const faqs = [
    {
      question: "Are you available for full-time employment or contract roles?",
      answer: "Yes, I am currently seeking full-time MERN Stack or Full Stack Developer opportunities, as well as freelance contract projects. Feel free to reach out!"
    },
    {
      question: "What is your primary technology stack?",
      answer: "I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) with robust support from CSS frameworks like TailwindCSS and Bootstrap, alongside relational databases like MySQL."
    },
    {
      question: "How do you ensure project success and code quality?",
      answer: "I follow clean coding principles, write semantic layouts, implement state management effectively, optimize database queries, and use Postman for rigorous API testing."
    },
    {
      question: "Can you collaborate within a remote agile team?",
      answer: "Absolutely! I have experience using Git/GitHub for version control, tracking issues, collaborating in pull requests, and maintaining communication with teammates."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="app-container">
      {/* Background animated blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="content">
        {/* Floating rounded-full Navbar (Reference: FutureDesks) */}
        <nav className="navbar-fd-container">
          <div className="navbar-fd">
            <div className="nav-left">
              <span onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}>Experience</span>
              <span onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</span>
            </div>
            <div className="nav-logo">
              <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Sahil</h2>
            </div>
            <div className="nav-right">
              <span onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>Skills</span>
              <span onClick={() => document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" })}>Reviews</span>
              <span onClick={() => document.getElementById("faqs").scrollIntoView({ behavior: "smooth" })}>FAQs</span>
              <span onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</span>
            </div>
          </div>

          {/* Mobile Floating Nav Header */}
          <div className="navbar-fd-mobile">
            <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Sahil</h2>
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-toggle" aria-label="Toggle Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {menuOpen && (
            <div className="mobile-drawer glass-panel">
              <span onClick={() => { document.getElementById("experience").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Experience</span>
              <span onClick={() => { document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Projects</span>
              <span onClick={() => { document.getElementById("skills").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Skills</span>
              <span onClick={() => { document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Reviews</span>
              <span onClick={() => { document.getElementById("faqs").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>FAQs</span>
              <span onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Contact</span>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-badge">MERN Stack Specialist Available For Hire</div>
          <h1>
            Full Stack Developer <br />
            <span className="gradient-text">Crafting Scalable Apps</span>
          </h1>
          <p>
            Hi, I'm Sahil. I build high-performance, robust MERN applications with polished client interfaces and clean APIs. Let's convert your ideas into production-ready software.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
              Let's Explore
            </button>
            <a
              href={socialLinks.resume}
              download="Sahil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={18} style={{ marginRight: "8px" }} />
              Download Resume
            </a>
          </div>
          <div className="hero-trust-indicator">
            <p>Trusted by <span className="text-primary-fd">15+</span> Global Clients &amp; Satisfied Partners</p>
          </div>
        </section>

        {/* Stats / Trust Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card glass-panel" key={index}>
                <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h3 style={{ background: `linear-gradient(to right, ${stat.color}, #ffffff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {stat.value}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="fd-section-badge">Journey</div>
          <h2 className="section-title">Professional Journey</h2>
          <div className="glass-panel">
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">Jun 2024 - Present</span>
                <h3>Full Stack Developer <span style={{ color: '#38bdf8' }}>@ Siddhi Software Solution</span></h3>
                <p>
                  Architected and optimized MERN applications, designed complex database schemas in MongoDB/MySQL, built secure JWT authorizations, and increased API speeds by 30% through optimized caching and query structures.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">Dec 2023 - May 2024</span>
                <h3>Software Intern <span style={{ color: '#a855f7' }}>@ Numetry Technology</span></h3>
                <p>
                  Built responsive, state-managed React applications, integrated custom payment gateways, and resolved frontend render bottlenecks, improving Core Web Vitals scoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="fd-section-badge">Featured Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A curated selection of real applications demonstrating design and functional expertise.</p>

          <div className="projects-slider-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="projects-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="project-card-new glass-panel" style={{ height: "100%", display: "flex", flexDirection: "column", padding: 0 }}>
                    <div className="project-img-container">
                      <img src={project.image} alt={project.title} />
                      {/* <span className="project-category-badge">{project.category}</span> */}
                    </div>
                    <div className="project-details" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tech-tags">
                        {project.tech.map((t, idx) => (
                          <span className="tech-badge" key={idx}>{t}</span>
                        ))}
                      </div>
                      <div className="project-actions" style={{ marginTop: "auto" }}>
                        <a href={project.link} target="_blank" rel="noreferrer" className="proj-btn main-btn">
                          Live Demo <ExternalLink size={14} style={{ marginLeft: "4px" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="fd-section-badge">My Arsenal</div>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div className="skill-card glass-panel" key={index}>
                <div className="skill-card-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-container-new">
                  {category.skills.map((skill, idx) => (
                    <span className="skill-tag-new" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infinite Scrolling Marquee Strip (Reference: FutureDesks) */}
        <div className="fd-marquee-container">
          <div className="fd-marquee">
            <span>MERN STACK DEVELOPMENT &bull; FRONTEND ENGINEERING &bull; BACKEND APIS &bull; DATABASE ARCHITECTURE &bull; PERFORMANCE OPTIMIZATION &bull; MERN STACK DEVELOPMENT &bull; FRONTEND ENGINEERING &bull; BACKEND APIS &bull; DATABASE ARCHITECTURE &bull; PERFORMANCE OPTIMIZATION</span>
          </div>
        </div>

        {/* Testimonials Section */}
        <section id="testimonials">
          <div className="fd-section-badge">Client Reviews</div>
          <h2 className="section-title">What Clients & Colleagues Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div className="testimonial-card glass-panel" key={index}>
                <div className="quote-mark">“</div>
                <p className="testimonial-text">{test.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{test.avatar}</div>
                  <div className="author-info">
                    <h4>{test.author}</h4>
                    <p>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs">
          <div className="fd-section-badge">Answers</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item glass-panel ${openFaq === index ? "faq-open" : ""}`}
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <button className="faq-toggle-btn">
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-wrapper">
          <div className="contact-grid">
            {/* Contact Details Card */}
            <div className="glass-panel contact-info-card">
              <div className="fd-section-badge-left">Get In Touch</div>
              <h2>Let's discuss a project! </h2>
              <p className="contact-subtitle">I am always looking forward to discussing new features, optimizations, or full-time opportunities.</p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <Mail style={{ color: "#38bdf8" }} size={20} />
                  <div>
                    <h4>Email Me</h4>
                    <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Phone style={{ color: "#a855f7" }} size={20} />
                  <div>
                    <h4>Call Me</h4>
                    <a href={`tel:${socialLinks.phone}`}>{socialLinks.phone}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MapPin style={{ color: "#818cf8" }} size={20} />
                  <div>
                    <h4>Location</h4>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-icons">
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-badge git"><GithubIcon size={20} /> GitHub</a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-badge link"><LinkedinIcon size={20} /> LinkedIn</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel contact-form-new">
              <div className="contact-header-new">
                <h2>Send A Message</h2>
                <p>Response guaranteed within 24 hours.</p>
              </div>

              <form onSubmit={onSubmit}>
                <div className="input-wrapper-new">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>

                <div className="input-wrapper-new">
                  <input type="email" name="email" placeholder="Your Email Address" required />
                </div>

                <div className="input-wrapper-new">
                  <textarea name="message" rows="5" placeholder="Your Message / Project details" required></textarea>
                </div>

                <button type="submit" className="submit-btn-new">
                  <Send size={18} style={{ marginRight: "8px" }} />
                  Send Message
                </button>
              </form>
              {result && (
                <div className="form-result-badge">
                  {result}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <h2 className="logo">Sahil</h2>
            <p className="footer-tagline">Crafting exceptional web apps with the MERN Stack.</p>
            <div className="footer-links">
              <span onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}>Experience</span>
              <span onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</span>
              <span onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>Skills</span>
              <span onClick={() => document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" })}>Reviews</span>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Sahil. All rights reserved.</p>
              <div className="footer-socials">
                <a href={socialLinks.github} target="_blank" rel="noreferrer"><GithubIcon size={18} /></a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={18} /></a>
                <a href={`mailto:${socialLinks.email}`}><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Action Social Widgets (Reference: FutureDesks) */}
      <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="fd-floating-social float-left-fd" title="LinkedIn Profile">
        <LinkedinIcon size={22} />
      </a>
      <a href={`https://wa.me/918983306757`} target="_blank" rel="noreferrer" className="fd-floating-social float-right-fd" title="Chat on WhatsApp">
        <WhatsappIcon size={22} />
      </a>
    </div>
  );
}

export default App;