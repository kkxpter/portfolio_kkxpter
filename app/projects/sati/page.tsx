// app/projects/sati/page.tsx
import styles from './page.sati.module.css';
import { 
  SiNextdotjs, SiNodedotjs, SiPrisma, SiFigma, SiGithub, SiVercel, SiZap 
} from 'react-icons/si';
import Link from 'next/link';
export default function SatiProject() {
    const tools = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiVercel />, name: "Vercel" },
//   { icon: <SiVisualstudiocode />, name: "VS Code" 
  { icon: <SiZap />, name: "Zab" } 
];
  return (
    <main className={styles.container}>
        <Link href="/" className={styles.backButton}>
            Back to Home
        </Link>
      <header className={styles.header}>
        <h1>SATI (สติ)</h1>
        <p className={styles.subtitle}>Cyber Security Awareness Web Application</p>
      </header>
      
      <section className={styles.content}>
        {/* 1. ภาพรวม */}
        <h2>Project Overview</h2>
        <p>
          SATI is a web-based educational tool developed during my internship at the 
          Ministry of Digital Economy and Society (MDES). The project aims to educate 
          the public on cyber threats and digital security through an interactive gaming experience.
        </p>
        
        {/* 2. ความท้าทาย */}
        <h2>Technical Challenges & Evolution</h2>
        <h3>Technology Stack Migration</h3>
        <p>
          The project initially started with static HTML. To enhance scalability and performance, 
          I migrated the entire application to Next.js, as guided by my supervisor. 
          This was a significant learning opportunity that allowed me to adopt modern industry standards.
        </p>
        
        <h3>Iterative Design (Agile Workflow)</h3>
        <p>
          Working under government requirements, the project scope evolved continuously. 
          I successfully managed multiple iterations, refining UI components and backend logic 
          to meet the specific needs of the department, which significantly improved 
          my adaptability and attention to detail.
        </p>
        
        {/* 3. Timeline */}
        <h2>Development Roadmap</h2>
        <div className={styles.timeline}>
          {[
            { phase: "Conceptualization", month: "Month 1", tasks: ["Requirement Analysis", "Concept Planning", "Scope Definition"] },
            { phase: "Design & System Architecture", month: "Month 2", tasks: ["UI/UX Prototyping (Figma)", "System Design", "Migration to Next.js"] },
            { phase: "Full-Stack Development", month: "Month 3", tasks: ["API Logic Implementation", "Backend & Database (Prisma)", "Iterative Refinements"] },
            { phase: "QA & Finalization", month: "Month 4", tasks: ["Error Checking & Debugging", "Performance Tuning", "Digital Media Production"] }
          ].map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>{item.phase} <span className={styles.month}>{item.month}</span></h3>
                <ul>
                  {item.tasks.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.marqueeContainer}>
  <div className={styles.marqueeTrack}>
    {/* ทำการวนลูป 2 รอบ เพื่อให้ไอคอนต่อกันยาวๆ ไม่เห็นรอยต่อ */}
    {[...tools, ...tools, ...tools].map((tool, index) => (
      <div key={index} className={styles.toolItem}>
        {tool.icon}
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
</div>
    </main>
  );
}