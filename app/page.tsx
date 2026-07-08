"use client";
import { useState, useRef, useEffect } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  const [showLinks, setShowLinks] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showEducation, setShowEducation] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLinks(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.logo}>
            Thirapat Nobparat
          </a>

          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.avatar}>
          <Image 
            src="/pff.jpg" 
            alt="Thirapat Nobparat" 
            width={300} 
            height={300}
            className={styles.avatarImage} // สร้างคลาสใหม่มาคุมรูปโดยเฉพาะ
          />
        </div>

        <div className={styles.heroText}>
          <p className={styles.heroSubtitle}>
            Hello, I&apos;m
          </p>

          <h2 className={styles.heroTitle}>
            Thirapat Nobparat
          </h2>
          <p className={styles.motto}>
            {"Keep building, keep growing, and never stop debugging life."}
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/resume">
              <button className={styles.resumeButton}>
                Resume
              </button>
            </Link>

            <Link href="/education">
              <button className={styles.secondaryButton}>
                Education
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={styles.aboutSection}
      >
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>
            About
          </h2>

          <p className={styles.description}>
            Frontend & Full Stack Developer passionate
            about crafting seamless digital experiences
            and intuitive UX/UI design.
          </p>

          <div className={styles.techStack}>
            <h3 className={styles.sectionTitle}>
              Tech Stack
            </h3>

            <div className={styles.stackRow}>
              <span>Frontend</span>
              <span>
                Next.js, React, JavaScript,
                TypeScript, HTML, CSS, Tailwind CSS
              </span>
            </div>

            <div className={styles.stackRow}>
              <span>Backend</span>
              <span>Node.js, Express.js</span>
            </div>

            <div className={styles.stackRow}>
              <span>Database</span>
              <span>MySQL, PostgreSQL, Prisma</span>
            </div>

            <div className={styles.stackRow}>
              <span>Design</span>
              <span>Figma, Canva</span>
            </div>

            <div className={styles.stackRow}>
              <span>Tools</span>
              <span>GitHub, Postman, Vercel</span>
            </div>
          </div>

          <h3 className={styles.sectionTitle}>
            Soft Skills
          </h3>

          <div className={styles.skills}>
            {[
              "Accountability",
              "Adaptability",
              "Problem Solving",
              "User-Centric Mindset",
              "Cross-functional Collaboration",
            ].map((skill) => (
              <span
                key={skill}
                className={styles.skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.imagePlaceholder}>
          <Image 
            src="/pf3.jpg" 
            alt="About Me" 
            width={500} 
            height={400} 
            style={{ borderRadius: '20px', objectFit: 'cover' }} 
          />
        </div>
      </section>
      <section id="experience" className={styles.experienceSection}>
  <div className={styles.sectionHeader}>
    <span>Experience</span>
    <h2>Intern Experience</h2>
  </div>

  <div className={styles.experienceCard}>
  <div className={styles.experienceImage}>
    <img
      src="/ex1.jpg"
      alt="Internship"
    />
  </div>

  <div className={styles.experienceInfo}>
    <div className={styles.experienceTop}>
      <span>2025 - 2026</span>
    </div>

    <h3>IT & Digital Developer Intern</h3>

    <p className={styles.company}>
      Ministry of Digital Economy and Society
    </p>

    <ul className={styles.bulletList}>
      <li>
        Gained practical experience in digital
        workflows.
      </li>

      <li>
        Supported technical teams in IT projects.
      </li>

      <li>
        Collaborated across departments and learned
        professional development processes.
      </li>
    </ul>
  </div>
</div>
</section>

{/* Projects */}
<section id="projects" className={styles.projectSection}>
  <h2 className={styles.sectionTitleCenter}>
    Project
  </h2>

  <div className={styles.projectCard}>
    <div>
      <Image 
      src="/pj_sati.png" // อย่าลืมเปลี่ยนชื่อไฟล์รูปให้ตรงกับรูปของคุณนะครับ
      alt="SATI Project" 
      width={600} 
      height={400} 
      className={styles.projectImage}
    />
    
      
      <div className={styles.techIcons}>
        <span>Next.js</span>
        <span>Node.js</span>
        <span>Prisma</span>
      </div>
      {/* <div className={styles.buttonRow}>
        <button className={styles.grayButton}>
          View Project Details
        </button>
      </div> */}
    </div>

    <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>
        SATI (สติ) - Cyber Security Awareness Web
        Application
      </h3>

      <p>
        UX/UI Design: Designed user-centric
        interfaces and prototypes in Figma.
      </p>

      <p>
        Frontend: Developed responsive web pages
        using Next.js, TypeScript, and Tailwind CSS.
      </p>

      <p>
        Backend & Database: Built API logic and
        managed PostgreSQL data flow via Prisma ORM.
      </p>
      <div className={styles.projectActions}>
            <a 
              href="https://sati-game-pj.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
          <button className={styles.primaryButton}>
            Live Demo
          </button>
          </a>
      <Link href="/projects/sati" className={styles.secondaryButton}>
        View Case Study
      </Link>
      
    </div>
      
    </div>
  </div>

  <div className={styles.projectCard}>
    <div>
      <Image 
        src="/techomancer.png" 
        alt="Techomancer Project" 
        width={600} 
        height={400} 
        className={styles.projectImage}
      />

       <div className={styles.techIcons}>
        <span>React</span>
        <span>Node.js</span>
        <span>MySQL</span>
        <span>Render</span>
      </div>
    </div>

    <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>
        Techomancer E-commerce Website
      </h3>

      <p>
        UX/UI Design: Created an intuitive product
        catalog and interactive PC builder interface
        using Figma.
      </p>

      <p>
        Frontend: Built a responsive e-commerce web
        application using React and JavaScript.
      </p>

      <p>
        Backend: Developed RESTful API logic with
        Node.js, managed data via MySQL, and deployed
        the application on Render.
      </p>
      <div className={styles.projectActions}>
            <a 
      href="https://techromancer-web.onrender.com" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
  <button className={styles.primaryButton}>
    Live Demo
  </button>
</a>

        <div className={styles.githubContainer} ref={dropdownRef}>
      <button className={styles.secondaryButton} onClick={() => setShowLinks(!showLinks)}>
        GitHub Repo
      </button>
      {showLinks && (
        <div className={styles.dropdownLinks}>
          <a href="https://github.com/kkxpter/Techromancer-Project-Frontend" target="_blank" rel="noopener noreferrer">Frontend</a>
          <a href="https://github.com/kkxpter/Techromancer-Project-BackEnd" target="_blank" rel="noopener noreferrer">Backend</a>
        </div>
      )}
    </div>
      </div>
    </div>
  </div>
</section>
<footer id="contact" className={styles.footer}>
  <div className={styles.footerContainer}>

    {/* LEFT */}
    <div className={styles.footerLeft}>
      <p className={styles.footerTag}>LET’S CONNECT</p>
      <h2 className={styles.footerTitle}>Contact</h2>

      <p className={styles.footerText}>
        Feel free to reach out for collaborations,
        opportunities, or just a friendly hello!
      </p>

      <div className={styles.socialLinks}>
        <a href="https://facebook.com/kkxpter" target="_blank">
          <FaFacebook size={26} />
        </a>
        <a href="https://instagram.com/kkxpter" target="_blank">
          <FaInstagram size={26} />
        </a>
        <a href="https://github.com/kkxpter" target="_blank">
          <FaGithub size={26} />
        </a>
      </div>
    </div>

    {/* DIVIDER */}
    <div className={styles.footerDivider}></div>

    {/* RIGHT */}
    <div className={styles.footerRight}>

      <div className={styles.contactItem}>
        <span className={styles.iconBox}>✉️</span>
        <div>
          <p className={styles.label}>EMAIL</p>
          <p className={styles.value}>zzzcop236@gmail.com</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <span className={styles.iconBox}>📞</span>
        <div>
          <p className={styles.label}>TEL</p>
          <p className={styles.value}>+66 925 435 425</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <span className={styles.iconBox}>📍</span>
        <div>
          <p className={styles.label}>LOCATION</p>
          <p className={styles.value}>Roi Et, Thailand</p>
        </div>
      </div>

    </div>
  </div>

  <div className={styles.footerBottom}>
      <p>© 2025 Thirapat Nobparat. All rights reserved.</p>
      <p>Built with Next.js</p>
    </div>
  </footer>
  {showEducation && (
  <div className={styles.overlay} onClick={() => setShowEducation(false)}>
    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={() => setShowEducation(false)}>×</button>
      
      <div className={styles.popupHeader}>
        <h2>Academic Achievement</h2>
      </div>

      <div className={styles.popupBody}>
        <div className={styles.eduInfo}>
          <h3>Mahasarakham University</h3>
          <p className={styles.faculty}>Faculty of Informatics</p>
          <p className={styles.major}>Computer Science</p>
          <p className={styles.year}>Academic Year 2022 - 2026</p>
        </div>

        <div className={styles.imageContainer}>
          <Image 
            src="/pff.jpg" 
            alt="Academic Transcript" 
            width={400} 
            height={550} 
            className={styles.transcriptImage}
          />
        </div>
      </div>

      <div className={styles.popupFooter}>
        <a href="/transcript.pdf" download className={styles.downloadButton}>
          <span>⬇️ Download Official Transcript</span>
        </a>
      </div>
    </div>
  </div>
)}
    </main>
  );
}