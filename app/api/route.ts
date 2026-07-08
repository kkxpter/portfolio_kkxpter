import { NextResponse } from 'next/server';

export async function GET() {
  // ตรงนี้คุณสามารถเรียกข้อมูลจาก MySQL/PostgreSQL ผ่าน Prisma ได้
  const projects = [
    { id: 1, title: 'Techomancer', tech: 'React, Node, MySQL' },
    { id: 2, title: 'SATI', tech: 'Next.js, Prisma' },
  ];
  
  return NextResponse.json(projects);
}