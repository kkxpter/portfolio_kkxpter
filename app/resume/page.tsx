import Link from 'next/link';
// สมมติว่าคุณแยก CSS ไปไว้ที่ไฟล์ resume.css
import './resume.css'; 

export default function ResumePage() {
  return (
    <div className="resume-container">
      <Link href="/" className="back-button">
        &larr; Back to Home
      </Link>

      <div className="resume-viewer">
        {/* ตรวจสอบว่ารูปอยู่ใน public/resume.png จริงๆ */}
        <img src="/resume.png" alt="Thirapat Nobparat Resume" />
      </div>

      <a href="/Resume_Thirapat_Nobparat.pdf" download="Resume_Thirapat_Nobparat.pdf">
        <button className="download-button">Download PDF Version</button>
      </a>
    </div>
  );
}