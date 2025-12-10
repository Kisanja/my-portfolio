import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Reveal from "./components/Reveal";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HEADER / NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main>
{/* HERO SECTION */}
<section
  id="home"
  className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center gap-16 px-6 py-16 md:flex-row md:items-center"
>
  {/* Left side: text */}
  <Reveal>
    <div className="flex-1 md:basis-3/5">
      <p className="mb-6 text-xs md:text-sm tracking-[0.25em] uppercase text-cyan-400">
        Welcome to my portfolio
      </p>

      <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        Hi, I&apos;m{" "}
        <span className="text-cyan-400">Kisanja Samarakoon</span>
      </h1>

      <p className="mb-2 text-lg font-semibold text-slate-100 md:text-xl">
        3rd Year Data Science Undergraduate at SLIIT
      </p>

      <p className="mb-6 text-lg font-semibold text-cyan-400 md:text-xl">
        Data Science & Machine Learning · Data Analytics & Visualization · Full-Stack Web Development
      </p>

      <p className="mb-8 text-sm text-slate-300 md:text-base">
        I&apos;m a motivated student with a strong foundation in programming,
        statistics, and data analysis. I have experience using data to solve
        real-world problems and support decision-making through hands-on academic
        projects. I&apos;m comfortable with Python, SQL, and data visualization
        tools, and I&apos;m eager to learn new technologies and frameworks.
      </p>

      {/* Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300"
        >
          View my projects
        </a>
        <a
  href="/Kisanja Samarakoon - CV.pdf"
  download
  className="rounded-full border border-slate-600 px-5 py-2 text-sm hover:border-cyan-400"
>
  Download CV
</a>

      </div>

      {/* Quick tags */}
      <div className="flex flex-wrap gap-2 text-xs text-slate-300">
        <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1">
          Data Science &amp; Machine Learning
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1">
          MERN Stack
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1">
          Backend Development &amp; APIs
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1">
          Java &amp; OOP Projects
        </span>
      </div>
    </div>
  </Reveal>

  {/* Right side: photo */}
  <Reveal delay={0.15}>
    <div className="flex flex-1 md:basis-2/5 justify-center md:justify-end">
  <div className="float-slow flex h-72 w-72 items-center justify-center rounded-[2.5rem] shadow-2xl md:h-80 md:w-80 overflow-hidden transition-transform duration-300 ease-out hover:scale-105">
    <img
      src="/profile/Kisanja.jpeg"
      alt="Kisanja Samarakoon avatar"
      className="h-full w-full object-cover"
    />
  </div>
</div>

  </Reveal>
</section>


        {/* === other sections stay the same for now === */}
{/* ABOUT SECTION */}
<section
  id="about"
  className="border-t border-slate-800 bg-slate-950/70"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <Reveal>
      <h2 className="mb-6 text-3xl font-semibold text-slate-50">
        About Me
      </h2>
    </Reveal>

    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)]">
      {/* LEFT: paragraphs + stats + what I'm looking for */}
      <div className="text-sm leading-relaxed text-slate-300 md:text-base">
        <Reveal delay={80}>
          <p className="mb-4">
            I&apos;m a 3rd-year Data Science undergraduate at SLIIT with a strong
            interest in data science, data analysis, and machine learning, as well
            as data-driven applications and full-stack web development. I enjoy
            turning ideas into working projects—from web apps and APIs to machine
            learning models—and using data to solve practical problems and
            generate meaningful insights.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p>
            Recently I&apos;ve been building projects that combine Python-based
            data pipelines and machine learning models with practical web
            interfaces. On the data side I work with tools like pandas, NumPy,
            scikit-learn and visualization libraries, and on the engineering side
            I use the MERN stack and Java to build APIs, dashboards and booking
            systems. I enjoy working end-to-end: designing the architecture,
            implementing the backend and frontend, integrating databases and
            authentication, and refining the UX so the final solution is robust
            and easy to use.
          </p>
        </Reveal>

        {/* Stats row */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Reveal>
            <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 px-4 py-3 text-center shadow-sm shadow-slate-900 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition">
              <p className="text-xl font-semibold text-cyan-400">6+</p>
              <p className="text-xs text-slate-400">Projects completed</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 px-4 py-3 text-center shadow-sm shadow-slate-900 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition">
              <p className="text-xl font-semibold text-cyan-400">10+</p>
              <p className="text-xs text-slate-400">Technologies &amp; tools</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 px-4 py-3 text-center shadow-sm shadow-slate-900 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition">
              <p className="text-xl font-semibold text-cyan-400">3</p>
              <p className="text-xs text-slate-400">
                Core domains: Data, Web, Mobile
              </p>
            </div>
          </Reveal>
        </div>

        {/* What I'm looking for */}
        <Reveal delay={240}>
          <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-slate-900/80 px-5 py-4 shadow-lg shadow-cyan-500/10">
            <h3 className="mb-1 text-sm font-semibold text-cyan-300">
              What I&apos;m looking for
            </h3>
            <p className="text-xs md:text-sm text-slate-200">
              I&apos;m currently looking for internship opportunities in Data
              Science, AI/ML, or Software Engineering where I can work on real
              products, learn from experienced teams, and keep growing as an
              engineer.
            </p>
          </div>
        </Reveal>
      </div>

      {/* RIGHT: Education + Focus area cards */}
      <div className="space-y-6">
        {/* Education card */}
        <Reveal>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition">
            <h3 className="mb-3 text-sm font-semibold text-slate-100">
              Education
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <p className="font-medium text-slate-100">
                  BSc (Hons) in Information Technology Specializing in Data Science
                </p>
                <p>SLIIT &mdash; 3rd year undergraduate</p>
              </div>
              <div className="h-px w-full bg-slate-800" />
              <div>
                <p className="font-medium text-slate-100">
                  G.C.E. Advanced Level – Mathematics Stream
                </p>
                <p className="text-xs text-slate-400">
                  Successfully passed A/L examinations in the Mathematics stream.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Focus areas card */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition">
            <h3 className="mb-3 text-sm font-semibold text-slate-100">
              Focus areas
            </h3>
            <ul className="ml-4 list-disc text-sm text-slate-300">
              <li>Data Science &amp; Machine Learning</li>
              <li>Statistical analysis &amp; data visualization</li>
              <li>Data cleaning, preprocessing &amp; exploratory data analysis (EDA)</li>
              <li>Databases (SQL / NoSQL)</li>
              <li>Full-stack web development (MERN stack)</li>
              <li>Data visualization &amp; dashboards (Python libraries / BI tools)</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

{/* SKILLS & TOOLS */}
<section
  id="skills"
  className="border-t border-slate-800 bg-slate-950"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <Reveal>
      <h2 className="mb-2 text-3xl font-semibold text-slate-50">
        Skills &amp; Tools
      </h2>
    </Reveal>

    <Reveal delay={80}>
      <p className="mb-8 text-sm text-slate-300 md:text-base">
        The main technologies I use to build data-driven projects, web
        applications, and backend services.
      </p>
    </Reveal>

    {/* auto-rows-fr makes each row the same height */}
    <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Programming */}
      <Reveal>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">💻</span>
            <span>Programming</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Languages I use most often for projects and coursework.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Python
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              JavaScript
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              SQL
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Java
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              R
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Kotlin
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              C++
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              c
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              PHP
            </span>
          </div>
        </div>
      </Reveal>

      {/* Web & App Development */}
      <Reveal delay={80}>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">🌐</span>
            <span>Web &amp; App Development</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Technologies I use to build full-stack web apps and mobile interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              React
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Node.js &amp; Express
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              MongoDB
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              REST APIs &amp; JWT auth
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Tailwind / Bootstrap CSS
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Android (Kotlin)
            </span>
          </div>
        </div>
      </Reveal>

      {/* Data & Machine Learning */}
      <Reveal delay={160}>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">📊</span>
            <span>Data &amp; Machine Learning</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Libraries and concepts I use for data analysis and ML projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              pandas &amp; NumPy
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              scikit-learn &amp; LightGBM
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Statsmodels
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Data visualization (Power BI, Matplotlib / Seaborn)
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Supervised Learning 
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Unsupervised Learning
            </span>
          </div>
        </div>
      </Reveal>

      {/* Tools */}
      <Reveal delay={240}>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">🛠️</span>
            <span>Tools</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Everyday tools I use for development and data work.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Git
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              VS Code
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Jupyter Notebook
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Streamlit
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Postman
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Power BI
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Android Studio
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              XAMPP / phpMyAdmin
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              MySQL Workbench
            </span>
          </div>
        </div>
      </Reveal>

      {/* Platforms */}
      <Reveal delay={320}>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">☁️</span>
            <span>Platforms</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Environments and platforms I&apos;m comfortable working with.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              SQL &amp; relational databases
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Linux / CLI basics
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              MongoDB / MongoDB Atlas
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Streamlit apps
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              GitHub
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              AWS (fundamentals)
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Microsoft Azure (fundamentals)
            </span>
          </div>
        </div>
      </Reveal>

      {/* Soft Skills */}
      <Reveal delay={400}>
        <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">🤝</span>
            <span>Soft Skills</span>
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Strengths that help me work effectively in team projects and deadlines.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Teamwork
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Problem Solving
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Adaptability
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Time Management
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 transition">
              Communication
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>


{/* PROJECTS */}
<section
  id="projects"
  className="border-t border-slate-800 bg-slate-950"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <Reveal>
      <h2 className="mb-2 text-3xl font-semibold text-slate-50">
        Projects
      </h2>
    </Reveal>

    <Reveal delay={80}>
      <p className="mb-8 text-sm text-slate-300 md:text-base">
        A selection of projects where I&apos;ve applied data science, AI/ML,
        and full-stack development to real-world problems.
      </p>
    </Reveal>

    {/* 1 col (mobile), 2 cols (tablet), 3 cols (laptop & up) */}
    <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 – Health Bridge */}
      <Reveal>
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
            <img
              src="/projects/HealthBridge.png"
              alt="Health Bridge: Public Health Info AI"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50 md:text-lg">
              Public Health Info AI
            </h3>
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
              AI / Multi-Agent · Web
            </span>
          </div>

          <p className="mb-2 text-[11px] font-medium text-slate-400">
            Role: <span className="font-normal text-slate-300">Full-stack Developer</span>
          </p>

          <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
            Built a multi-agent health forecasting platform that combines
            retrieval, forecasting, and security agents behind a single FastAPI
            backend and React frontend. Designed the orchestrator service and
            implemented the chat agent (FastAPI + LLM) to answer natural-language
            questions with safe, structured responses.
          </p>

          <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
            {[
              "React",
              "FastAPI",
              "Python",
              "Statsmodels (SARIMAX)",
              "Pandas",
              "Node.js",
              "Uvicorn",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/Kisanja/IRWA-Project-Public-Health.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              View code on GitHub
            </a>
          </div>
        </article>
      </Reveal>

      {/* Project 2 – Used Car Price Prediction */}
      <Reveal delay={80}>
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
            <img
              src="/projects/CarPrediction.png"
              alt="Used Car Price Prediction app"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50 md:text-lg">
              Used Car Price Prediction
            </h3>
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
              Data Science · ML App
            </span>
          </div>

          <p className="mb-2 text-[11px] font-medium text-slate-400">
            Role:{" "}
            <span className="font-normal text-slate-300">
              Data Science &amp; Full-stack Developer
            </span>
          </p>

          <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
            Built an end-to-end ML system to predict used car prices using
            LightGBM regression and K-Means clustering. Implemented the full
            pipeline (preprocessing, winsorization, rare category grouping,
            MAE / RMSE / R² evaluation) and deployed an interactive Streamlit app
            for prediction, segmentation, recommendations, and explainability.
          </p>

          <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "LightGBM",
              "K-Means",
              "Streamlit",
              "Joblib",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/Kisanja/FDM-Mini-Project.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              View code on GitHub
            </a>
          </div>
        </article>
      </Reveal>

      {/* Project 3 – Falcon SuperLine */}
      <Reveal delay={160}>
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
            <img
              src="/projects/FalconSuperLine.png"
              alt="Falcon SuperLine bus ticket booking system"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50 md:text-lg">
              Bus Ticket Booking System
            </h3>
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
              Web App · MERN
            </span>
          </div>

          <p className="mb-2 text-[11px] font-medium text-slate-400">
            Role: <span className="font-normal text-slate-300">Full-stack Developer</span>
          </p>

          <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
            Built a MERN-based bus ticket booking system with an admin dashboard
            for CRUD on buses, routes, schedules, and prices. Added a finance
            module to track income and expenses, and a customer-facing interface
            to search routes, check availability, and book tickets online with
            JWT-based auth and role-based access control.
          </p>

          <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Bootstrap CSS",
              "JWT",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/Kisanja/Falcon-SuperLine.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              View code on GitHub
            </a>
          </div>
        </article>
      </Reveal>

      {/* Project 4 – Grocery Management System (Supplier Module) */}
      <Reveal delay={240}>
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          {/* Image */}
          <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
            <img
              src="/projects/supplier.png"
              alt="Grocery Management System – Supplier Module"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50 md:text-lg">
              Grocery Management System – Supplier Module
            </h3>
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
              Web App · MERN
            </span>
          </div>

          <p className="mb-2 text-[11px] font-medium text-slate-400">
            Role:{" "}
            <span className="font-normal text-slate-300">
              Full-stack Developer
            </span>
          </p>

          <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
            Developed the supplier management module of a MERN-based grocery
            management system. Built features for shop owners to request items
            from registered suppliers, apply to become suppliers through an
            approval workflow, and track request status. Implemented admin views
            to approve or reject supplier requests, plus interfaces and APIs for
            suppliers to add items and manage their product listings.
          </p>

          {/* Tech stack chips */}
          <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
            {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          <div className="mt-auto flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/Kisanja/ITP-Supplier-Relationship-Management.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              View code on GitHub
            </a>
          </div>
        </article>
      </Reveal>

      {/* Project 5 – Online Book Store */}
      <Reveal delay={320}>
        <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          {/* Image */}
          <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
            <img
              src="/projects/BookShop.png"
              alt="Online Book Store Java web application"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50 md:text-lg">
              Online Book Store
            </h3>
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
              Web App · Java
            </span>
          </div>

          <p className="mb-2 text-[11px] font-medium text-slate-400">
            Role:{" "}
            <span className="font-normal text-slate-300">
              Java Developer
            </span>
          </p>

          <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
            Developed a Java-based online bookstore with separate admin and
            customer roles. Admins can perform full CRUD on books and view
            detailed information, while customers can search for books, add them
            to a cart, and purchase them. Implemented session management to handle
            user login and cart state, and applied object-oriented concepts
            throughout the design.
          </p>

          {/* Tech stack chips */}
          <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
            {["Java", "OOP", "Session Management", "Servlets / JSP", "MySQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Links row */}
          <div className="mt-auto flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/Kisanja/Bookshop-Management.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              View code on GitHub
            </a>
          </div>
        </article>
      </Reveal>

      {/* Project – ShopCart Online Clothing Store */}
<Reveal delay={400}>
  <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-4 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
    {/* Image */}
    <div className="mb-4 overflow-hidden rounded-xl bg-slate-900/70">
      {/* change this to your real screenshot path */}
      <img
        src="/projects/IWT project.png"
        alt="ShopCart – PHP online clothing store with cart and checkout"
        className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div className="mb-2 flex items-center justify-between gap-3">
      <h3 className="text-base font-semibold text-slate-50 md:text-lg">
        Online Clothing Store
      </h3>
      <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-300">
        Web App · PHP / MySQL
      </span>
    </div>

    <p className="mb-2 text-[11px] font-medium text-slate-400">
      Role:{" "}
      <span className="font-normal text-slate-300">
        Full-stack Developer (PHP &amp; MySQL)
      </span>
    </p>

    <p className="mb-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">
      Built a PHP-based e-commerce site where users can browse clothing
      products, filter them, and add items to a shopping cart. Implemented
      full CRUD operations on the cart (add, update quantity, remove items)
      and a checkout flow to capture shipping details and card information.
      Used MySQL to manage products, users, and orders, running the
      application locally with XAMPP.
    </p>

    {/* Tech stack chips */}
    <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
      {[
        "PHP",
        "MySQL",
        "HTML & CSS",
        "JavaScript",
        "XAMPP",
        // "Bootstrap", // ← uncomment if you actually used Bootstrap
      ].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100 group-hover:border-cyan-400/60 group-hover:text-cyan-100 transition"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links row */}
    <div className="mt-auto flex items-center gap-4 text-[11px]">
      <a
        href="https://github.com/Kisanja/IWT-Project.git"
        target="_blank"
        rel="noreferrer"
        className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        View code on GitHub
      </a>
    </div>
  </article>
</Reveal>

    </div>
  </div>
</section>

{/* CERTIFICATES & ACHIEVEMENTS */}
<section
  id="certs"
  className="border-t border-slate-800 bg-slate-950"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <Reveal>
      <h2 className="mb-2 text-3xl font-semibold text-slate-50">
        Certificates &amp; Achievements
      </h2>
    </Reveal>

    <Reveal delay={80}>
      <p className="mb-8 text-sm text-slate-300 md:text-base">
        Extra learning, cloud badges, and academic milestones that support my
        work in Data Science, AI/ML, and software development.
      </p>
    </Reveal>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Card – AI/ML Courses (Stage 1 & 2) */}
      <Reveal>
        <article className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">🧠</span>
            <span>AI/ML Engineer – Stage 1 &amp; Stage 2</span>
          </h3>

          <p className="mb-2 text-xs text-slate-300 md:text-sm">
            Two certified AI/ML training programs conducted by the{" "}
            <span className="font-medium text-slate-100">
              Centre for Open and Distance Education, Faculty of Computing, SLIIT
            </span>
            . Together they covered core machine learning foundations and more
            applied ML workflows.
          </p>

          <p className="mb-3 text-[11px] text-slate-400">
            Separate certificates were awarded for Stage 1 and Stage 2.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "ML fundamentals & workflows",
              "Data preprocessing & feature engineering",
              "Supervised & unsupervised learning",
              "Model evaluation (accuracy, precision, recall, etc.)",
              "Regression & classification",
              "Python, NumPy, pandas, scikit-learn",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100"
              >
                {topic}
              </span>
            ))}
          </div>
        </article>
      </Reveal>

      {/* Card – AWS Cloud Skills */}
      <Reveal delay={80}>
        <article className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">☁️</span>
            <span>AWS Cloud Skills</span>
          </h3>

          <p className="mb-3 text-xs text-slate-300 md:text-sm">
            Completed multiple{" "}
            <span className="font-medium text-slate-100">AWS Skill Builder</span>{" "}
            modules aligned with the Cloud Practitioner path, gaining hands-on
            experience with compute, storage, networking, databases, scaling and
            security on AWS.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "AWS SimuLearn: Cloud Practitioner – Computing Solutions",
              "Networking Concepts",
              "Connecting VPCs",
              "AWS SimuLearn: File Systems in the Cloud",
              "Introduction to Amazon S3",
              "Auto Healing & Scaling Applications",
              "Highly Available Web Applications",
              "Databases in Practice",
              "Core Security Concepts",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100"
              >
                {course}
              </span>
            ))}
          </div>
        </article>
      </Reveal>

      {/* Card – Azure Cloud Skills */}
      <Reveal delay={160}>
        <article className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-lg">🔷</span>
            <span>Azure Cloud Skills</span>
          </h3>

          <p className="mb-3 text-xs text-slate-300 md:text-sm">
            Completed multiple{" "}
            <span className="font-medium text-slate-100">Microsoft Learn</span>{" "}
            modules focused on Azure compute, storage, networking, availability,
            databases, and identity/security.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "Introduction to Azure virtual machines",
              "Configure Virtual Networks",
              "Add and size disks in Azure virtual machines",
              "Configure Azure Blob Storage",
              "Improve app scalability & resiliency with Load Balancer",
              "Configure virtual machine availability",
              "Provision & deploy relational databases in Azure",
              "Describe Azure identity, access, and security",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-100"
              >
                {course}
              </span>
            ))}
          </div>
        </article>
      </Reveal>
    </div>
  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="border-t border-slate-800 bg-slate-950"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <Reveal>
      <h2 className="mb-2 text-3xl font-semibold text-slate-50">
        Contact
      </h2>
    </Reveal>

    <div className="grid gap-10 md:grid-cols-2">
      {/* Left side – contact details */}
      <Reveal>
        <div className="space-y-6 text-sm text-slate-200 md:text-base">
          <p className="text-slate-300">
            The fastest way to reach me is by email or phone. You can also
            connect with me on LinkedIn or explore my projects on GitHub.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-900/80 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaEnvelope className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Email
                </p>
                <p className="text-cyan-400 group-hover:text-cyan-300">
                  kisanja44@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+94XXXXXXXXX"
              className="group flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-900/80 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaPhoneAlt className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Phone
                </p>
                <p className="text-cyan-400 group-hover:text-cyan-300">
                  +94 71 634 8127
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kisanja-samarakoon-242275392/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-900/80 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaLinkedinIn className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  LinkedIn
                </p>
                <p className="text-cyan-400 group-hover:text-cyan-300">
                  Kisanja Samarakoon
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Kisanja"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-900/80 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaGithub className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  GitHub
                </p>
                <p className="text-cyan-400 group-hover:text-cyan-300">
                  Kisanja Samarakoon
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-900/80 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaMapMarkerAlt className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Location
                </p>
                <p className="text-cyan-400 group-hover:text-cyan-300">
                  Kaduwela, Sri Lanka
                </p>
              </div>
            </a>
          </div>
        </div>
      </Reveal>

      {/* Right side – contact form */}
      <Reveal delay={160}>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-sm shadow-slate-900 transition hover:border-cyan-400/60 hover:shadow-cyan-500/20">
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            Send me a message
          </h3>
          <p className="mb-4 text-xs text-slate-400 md:text-sm">
            Use this form to drop me a quick message. I&apos;ll get back to you as
            soon as I can.
          </p>

          {/* Replace YOUR_FORM_ID with your real Formspree ID */}
          <form
            action="https://formspree.io/f/mldqwzod"
            method="POST"
            className="space-y-4 text-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Send message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  </div>
</section>

<footer className="border-t border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-7xl px-6 py-12">
    {/* Top grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {/* Column 1 – Summary */}
      <div>
        <h3 className="text-sm font-semibold text-slate-100">
          Kisanja Samarakoon
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-slate-400 md:text-sm">
          3rd year Data Science undergraduate at SLIIT, focusing on data,
          AI/ML, and full-stack web development. I enjoy building end-to-end
          solutions that combine clean engineering with practical impact.
        </p>
      </div>

      {/* Column 2 – Pages */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Pages
        </h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>
            <a href="#home" className="transition hover:text-cyan-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#certs" className="transition hover:text-cyan-300">
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 – Contact */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Contact
        </h4>
        <ul className="mt-3 space-y-2 text-xs text-slate-300 md:text-sm">
          <li>
            <span className="text-slate-400">Email: </span>
            <a
              href="mailto:kisanja44@gmail.com"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              kisanja44@gmail.com
            </a>
          </li>
          <li>
            <span className="text-slate-400">Phone: </span>
            <a
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              +94 71 634 8127
            </a>
          </li>
          <li>
            <span className="text-slate-400">Location: </span>
            <span>Kaduwela, Sri Lanka</span>
          </li>
          <li>
            <span className="text-slate-400">GitHub: </span>
            <a
              href="https://github.com/Kisanja"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              Kisanja Samarakoon
            </a>
          </li>
          <li>
            <span className="text-slate-400">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/kisanja-samarakoon-242275392/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              Kisanja Samarakoon
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4 – Focus areas */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Focus Areas
        </h4>
        <ul className="mt-3 space-y-2 text-xs text-slate-300 md:text-sm">
          <li>Data Science &amp; Machine Learning</li>
          <li>Statistical analysis &amp; visualization</li>
          <li>Full-stack web development (MERN)</li>
          <li>APIs, authentication &amp; dashboards</li>
        </ul>
      </div>
    </div>

    {/* Bottom line */}
    <div className="mt-10 border-t border-slate-800 pt-4">
      <p className="text-center text-[11px] text-slate-500">
        © 2025 Kisanja Samarakoon. All rights reserved.
      </p>
    </div>
  </div>
</footer>



      </main>
    </div>
  );
}

export default App;
