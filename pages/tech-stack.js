import { usestate } from 'react' 
import Head from 'next/head' 
import Link from 'next/link' 
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
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
import { FaCode } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { GrTest } from "react-icons/gr"
import { GoDatabase } from "react-icons/go"
import { FiDatabase } from "react-icons/fi"
import { TbSettingsBolt } from "react-icons/tb"


export default function TechStack(){

    const categories = [
      { label: "Programming Languages", icon: <FaCode /> }, 
      { label: "Frameworks and Libraries" }, 
      { label: "Databases", icon: <FiDatabase /> }, 
      { label: "DevOps and CI/CD", icon: <TbSettingsBolt /> }, 
      { label: "Testing", icon: <GrTest /> }
    ]

    const programmingLanguages = [
      { name: "java", label: "Java", icon: <FaJava /> },
      { name: "python", label: "Python", icon: <FaPython /> },
      { name: "javascript", label: "JavaScript", icon: <IoLogoJavascript /> }
    ]
    
    const frameworks = [
      { name: "react", label: "React", icon: <FaReact /> },
      { name: "angular", label: "Angular", icon: <IoLogoAngular /> },
      { name: "vue", label: "Vue", icon: <IoLogoVue /> }
    ]

    const databases = [
      { name: "mysql", label: "MySQL", icon: <GrMysql /> },
      { name: "postgresql", label: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "mongodb", label: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "mariadb", label: "MariaDB", icon: <SiMariadb /> }
    ]

    const [ selectedCategory, setSelectedCategory ] = useState('')

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
            <section className='bg-slate-50 py-12 border border-gray-100 rounded-md my-20 w-full'>
                <div className='w-3/4 mx-auto'>
                  <h3 className='text-3xl font-Inter font-bold'>Configure Your Tech Stack</h3>
                </div>
            </section>
            <section id="" className='w-full'>
                <div className='flex flex-row items-start justify-between w-3/4 mx-auto'>
                  <div className='w-1/4 py-4 px-3 bg-slate-50 border border-gray-100 rounded-md'>
                    <h4 className='text-md font-Inter font-semibold mb-6'>Technologies & Tools</h4>
                    <ul className='flex flex-col ml-6'>
                      {
                        categories.map(
                          (category, i) => (
                            <li key={i} tabIndex={0} onClick={() => setSelectedCategory(category.label)} className='font-Inter text-lg mb-2 flex flex-row items-center'>
                              {category.icon && category.icon}
                              <span className='ml-2'>{category.label}</span>
                            </li>
                          )
                        )
                      }
                    </ul>
                  </div>
                  <div className='w-2/3 flex flex-col'>
                    <div className='w-full rounded-md p-4 bg-slate-50 border border-gray-100 mb-6'>
                      {
                        selectedCategory.length > 0
                        ?
                          <div>
                            <h4 className='text-2xl font-Inter font-bold mb-6'>{selectedCategory}</h4>
                            {
                              selectedCategory == "Programming Languages" && 
                              <div className='flex flex-row items-center'>
                                {
                                  programmingLanguages.map(
                                    (language, i) => (
                                      <div key={i} tabIndex={0} className='rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center'>
                                        {language.icon}
                                        <span className='ml-2'>{language.label}</span>
                                      </div>
                                    )
                                  )
                                }
                              </div>
                            }
                            {
                              selectedCategory == "Frameworks and Libraries" && 
                              <div className='flex flex-row items-center'>
                                {
                                  frameworks.map(
                                    (framework, i) => (
                                      <div key={i} tabIndex={0} className='rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center'>
                                        {framework.icon}
                                        <span className='ml-2'>{framework.label}</span>
                                      </div>
                                    )
                                  )
                                }
                              </div>
                            }
                            {
                              selectedCategory == "Databases" && 
                              <div className='flex flex-row items-center'>
                                {
                                  databases.map(
                                    (database, i) => (
                                      <div key={i} tabIndex={0} className='rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center'>
                                        {database.icon}
                                        <span className='ml-2'>{database.label}</span>
                                      </div>
                                    )
                                  )
                                }
                              </div>
                            }
                          </div>
                        :
                          <>
                            <p className='font-bold text-xl font-Inter mb-4'>Technologies will show up here.</p> 
                            <p className='font-Inter'>Try selecting a category in the left sidebar.</p>
                          </>
                      }
                    </div>
                    <div className='w-full rounded-md p-4 bg-slate-50 border border-gray-100'>

                    </div>
                  </div>
                </div>
            </section>
          </div>
        </>
    )
}