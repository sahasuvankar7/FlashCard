import React from 'react'
import prisma from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Card from '@/components/Card';
const page = async ({params}) => {
    const id = Number(params.id);
    if(!id || id.length === 0 || id=== undefined) {
        return notFound();
    } 
    const question = await prisma.question.findUnique({
        where:{
            id:id
        }
    })
    console.log(question);
    if(!question) {
        return notFound();
    }

  return (
    <div className="pt-20 h-screen bg-gray-100">
     <Card question={question}/>
      <Link href={`/questions/${id-1}`}>prev</Link>
      <Link href={`/questions/${id+1}`}>Next</Link>
    </div>
  )
}

export default page
