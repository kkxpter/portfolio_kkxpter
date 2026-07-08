import Link from 'next/link';
import './education.css';

export default function EducationPage() {
  return (
    <div className="education-container">
      <Link href="/" className="back-button">&larr; Back to Home</Link>

      <div className="edu-content">
        <div className="edu-card">
            <div className="edu-image">
                <img src="/resume.png" alt="Profile" />
            </div>
            <div className="edu-text">
                <h2>Mahasarakham University</h2>
                <p className="degree">Bachelor of Science in Computer Science</p>
                <p className="years">2022 - 2026</p>
                <p className="details">
                Faculty of Informatics. Focused on Full-Stack Development, 
                UX/UI Design, and modern web technologies.
                </p>

                {/* ปุ่มย้ายมาอยู่ด้านล่างสุดของ Card */}
                <a href="/Resume_Thirapat_Nobparat.pdf" download className="download-button">
                Download Official Transcript
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}