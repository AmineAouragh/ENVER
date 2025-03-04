import { usestate } from 'react' 
import Head from 'next/head' 
import Link from 'next/link' 
import Image from 'next/image'
import { useRouter } from 'next/router'
import { DropDown } from '@/components/DropDown'
import { FaAws } from "react-icons/fa"
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
import { IoLogoVue } from "react-icons/io5"
import { IoLogoAngular } from "react-icons/io"
import { SiXcode } from "react-icons/si"
import { SiAndroidstudio } from "react-icons/si"
import { FaFigma } from "react-icons/fa"
import { TbBrandReactNative } from "react-icons/tb"
import { FaFlutter } from "react-icons/fa6"
import { SiMariadb } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import { FaGolang } from "react-icons/fa6"
import { DiRedis } from "react-icons/di"
import { SiAwsamplify } from "react-icons/si"
import { SiAwslambda } from "react-icons/si"
import { SiAmazons3 } from "react-icons/si"
import { SiAmazonrds } from "react-icons/si"


export default function TechStack(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title></title>
          </Head>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <nav id="topnav" className='flex flex-row items-center justify-between py-3 w-3/4 mx-auto'>
              <Link href="/">
                <span className='text-3xl font-BebasNeue'>ENVER</span>
              </Link>
              <ul id='navlist' className='flex flex-row items-center'>
                <li>
                  <DropDown />
                </li>
              </ul>
            </nav>
            <section className='bg-slate-50 px-4 py-12 border border-gray-200 rounded-md my-20 mx-auto w-3/4'>
              <span className='text-4xl font-BebasNeue'>Select Tech Stack For Your Team</span>
            </section>
          </div>
        </>
    )
}