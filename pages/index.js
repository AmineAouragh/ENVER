import Image from 'next/image'
import Head from 'next/head' 
import Link from 'next/link'
import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"
import { DropDown } from '@/components/DropDown'

import { InviteTeamMemberDialog } from '@/components/InviteTeamMemberDialog'
import { FaJava } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { FaPython } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { GiJesterHat } from "react-icons/gi"
import { FaJenkins } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa"
import { FaDocker } from "react-icons/fa"
import { FaPhp } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi"
import { VscVscode } from "react-icons/vsc"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiDjango, DiDocker } from "react-icons/di"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoKubernetes } from "react-icons/bi"
import { BiLogoSpringBoot } from "react-icons/bi"
import { DiNodejs } from "react-icons/di"


export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title></title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <nav id='topnav' className='flex flex-row items-center justify-between py-3 w-3/4 mx-auto'>
          <Link href="/">
            <span className='text-3xl font-BebasNeue'>ENVER</span>
          </Link>
          <ul id='navlist' className='flex flex-row items-center'>
            <li>
              <DropDown />
            </li>
          </ul>
        </nav>
        <section id="" className='py-20 mx-auto w-3/4'>
          <span className="text-6xl font-BebasNeue w-1/2">Welcome, Amine</span>
          <div className='w-full p-4 mt-12 border border-gray-200 rounded-lg'>
            <h3 className='text-3xl font-BebasNeue'>Invite team members</h3>
            <InviteTeamMemberDialog />
          </div>
          <div className='w-1/2 p-4 mt-6 border border-gray-200 rounded-lg'>
            <div className='flex flex-row items-center justify-between w-full'>
              <h3 className='text-3xl font-BebasNeue'>Configure your team&apos;s tech stack</h3>
              <button type='button' className='rounded-md bg-gray-100 px-8 py-2 text-lg font-semibold font-Inter'>Configure tech stack</button>
            </div>
            <p className='text-md text-gray-700 font-Inter'>Start selecting technologies for your team</p>
            <div className='mt-4 grid grid-cols-3 gap-4'>
              <div className='bg-gray-50 rounded-lg p-4'>
                <h4 className='font-Inter font-bold mb-4'>Frontend</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <FaReact title='React' className='size-10' />
                  <IoLogoJavascript title='JavaScript' className='size-10' />
                  <BiLogoTailwindCss title='TailwindCSS' className='size-10' /> 
                </div>
              </div>
              <div className='bg-gray-50 rounded-lg p-4'>
                <h4 className='font-Inter font-bold mb-4'>Backend</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <DiDjango title='Django' className='size-10' />
                  <BiLogoSpringBoot title='Spring Boot' className='size-10' /> 
                  <BiLogoNodejs title='NodeJS' className='size-10' />
                </div>
              </div>
              <div className='bg-gray-50 rounded-lg p-4'>
                <h4 className='font-Inter font-bold mb-4'>Databases</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <BiLogoMongodb title='MongoDB' className='size-10' />
                  <GrMysql title='MySQL' className='size-10' />
                  <BiLogoPostgresql title='PostgreSQL' className='size-10' /> 
                </div>
              </div>
              <div className='bg-gray-50 rounded-lg p-4'>
                <h4 className='font-Inter font-bold mb-4'>Languages</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <FaJava title='Java' className='size-10' />
                  <FaPython title='Python' className='size-10' />
                  <FaPhp title='PHP' className='size-10' />
                </div>
              </div>
              <div className='bg-gray-50 rounded-lg p-4'>
                <h4 className='font-Inter font-bold mb-4'>DevOps</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <FaDocker title='Docker' className='size-10' />
                  <BiLogoKubernetes title='Kubernetes' className='size-10' />
                  <FaJenkins title='Jenkins' className='size-10' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
