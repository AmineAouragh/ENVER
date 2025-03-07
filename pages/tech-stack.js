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
import { DiDocker } from "react-icons/di"
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
import { RiSupabaseFill } from "react-icons/ri"
import { Skeleton } from "@/components/ui/skeleton"
import { FaNodeJs } from "react-icons/fa"
import { SiDjango } from "react-icons/si"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiApachemaven } from "react-icons/si"
import { SiGradle } from "react-icons/si"
import { SiApacheant } from "react-icons/si"
import { SiApachenetbeanside } from "react-icons/si"
import { SiEclipseide } from "react-icons/si"
import { SiIntellijidea } from "react-icons/si"
import { FaRegFileCode } from "react-icons/fa"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function TechStack(){

    const categories = [
      { label: "Programming Languages", icon: <FaCode /> }, 
      { label: "Frameworks and Libraries" }, 
      { label: "Backend" },
      { label: "Databases", icon: <FiDatabase /> }, 
      { label: "DevOps and CI/CD", icon: <TbSettingsBolt /> }, 
      { label: "Testing", icon: <GrTest /> }
    ]

    const programmingLanguages = [
      { name: "java", label: "Java", icon: <FaJava /> },
      { name: "python", label: "Python", icon: <FaPython /> },
      { name: "go", label: "Go", icon: <FaGolang /> },
      { name: "php", label: "PHP", icon: <FaPhp /> }
    ]
    
    const frameworks = [
      { name: "react", label: "React", icon: <FaReact /> },
      { name: "angular", label: "Angular", icon: <IoLogoAngular /> },
      { name: "vue", label: "Vue", icon: <IoLogoVue /> }
    ]

    const backends = [
      { name: "node", label: "Node", icon: <FaNodeJs /> },
      { name: "django", label: "Django", icon: <SiDjango /> }
    ]

    const databases = [
      { name: "mysql", label: "MySQL", icon: <GrMysql /> },
      { name: "postgresql", label: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "mongodb", label: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "mariadb", label: "MariaDB", icon: <SiMariadb /> },
      { name: "supabase", label: "Supabase", icon: <RiSupabaseFill /> }
    ]

    const [ selectedCategory, setSelectedCategory ] = useState('')
    const [ selectedLanguage, setSelectedLanguage ] = useState('') 
    const [ selectedFramework, setSelectedFramework ] = useState('') 
    const [ selectedDatabase, setSelectedDatabase ] = useState('')
    const [ selectedBackend, setSelectedBackend ] = useState('')
    const [ selectedJdkVersion, setSelectedJdkVersion ] = useState('')
    const [ selectedJavaBuildTool, setSelectedJavaBuildTool ] = useState('')
    const [ selectedJavaIDE, setSelectedJavaIDE ] = useState('')

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
            <section id="" className='w-full pb-20'>
                <div className='flex flex-row items-start justify-between w-3/4 mx-auto'>
                  <div className='w-1/4 py-4 px-3 bg-slate-50 border border-gray-100 rounded-md'>
                    <h4 className='text-md font-Inter font-semibold mb-6'>Technologies & Tools</h4>
                    <ul className='flex flex-col ml-6'>
                      {
                        categories.map(
                          (category, i) => (
                            <li key={i} tabIndex={0} onClick={() => setSelectedCategory(category.label)} className={`${selectedCategory == category.label ? "bg-slate-800 text-gray-50" : ""} rounded-md px-3 py-1  cursor-pointer font-Inter text-lg mb-2 flex flex-row items-center`}>
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
                            <h4 className='text-2xl font-Inter font-bold mb-3'>{selectedCategory}</h4>
                            {
                              selectedCategory == "Programming Languages" && 
                              <>
                                <p className='text-gray-700 mb-5'>Select a programming language to set up its configuration.</p>
                                <div className='flex flex-row items-center'>
                                {
                                  programmingLanguages.map(
                                    (language, i) => (
                                      <div key={i} tabIndex={0} onClick={() => setSelectedLanguage(language.label)} className={`${selectedLanguage == language.label ? 'bg-slate-800 text-gray-50' : ''} rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center`}>
                                        {language.icon}
                                        <span className='ml-2'>{language.label}</span>
                                      </div>
                                    )
                                  )
                                }
                                </div>
                              </>
                            }
                            {
                              selectedCategory == "Frameworks and Libraries" && 
                              <>
                                <p className='text-gray-700 mb-5'>Choose a framework to customize its setup.</p>
                                <div className='flex flex-row items-center'>
                                {
                                  frameworks.map(
                                    (framework, i) => (
                                      <div key={i} tabIndex={0} onClick={() => setSelectedFramework(framework.label)} className={`${selectedFramework == framework.label ? 'bg-slate-800 text-gray-50' : ''} rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center`}>
                                        {framework.icon}
                                        <span className='ml-2'>{framework.label}</span>
                                      </div>
                                    )
                                  )
                                }
                                </div>
                              </>
                            }
                            {
                              selectedCategory == "Databases" && 
                              <>
                                <p className='text-gray-700 mb-5'>Pick a database to configure its connection and settings.</p>
                                <div className='flex flex-row items-center'>
                                {
                                  databases.map(
                                    (database, i) => (
                                      <div key={i} tabIndex={0} onClick={() => setSelectedDatabase(database.label)} className={`${selectedDatabase == database.label ? "bg-slate-800 text-gray-50" : ""} rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center`}>
                                        {database.icon}
                                        <span className='ml-2'>{database.label}</span>
                                      </div>
                                    )
                                  )
                                }
                                </div>
                              </>
                            }
                            {
                              selectedCategory == "Backend" && 
                              <>
                                <p className='text-gray-700 mb-5'>Pick a backend technology to configure its settings.</p>
                                <div className='flex flex-row items-center'>
                                {
                                  backends.map(
                                    (backend, i) => (
                                      <div key={i} tabIndex={0} onClick={() => setSelectedBackend(backend.label)} className={`${selectedBackend == backend.label ? "bg-slate-800 text-gray-50" : ""} rounded-md px-3 py-1 cursor-pointer bg-slate-100 border border-gray-200 text-xl mr-4 font-Inter flex flex-row items-center`}>
                                        {backend.icon}
                                        <span className='ml-2'>{backend.label}</span>
                                      </div>
                                    )
                                  )
                                }
                                </div>
                              </>
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
                      <div className="flex flex-col items-start">
                        {
                          (
                            (selectedCategory == "Backend" && selectedBackend.length == 0) 
                            || (selectedCategory == "Databases" && selectedDatabase.length == 0) 
                            || (selectedCategory == "Programming Languages" && selectedLanguage.length == 0)
                            || (selectedCategory == "Frameworks and Libraries" && selectedFramework.length == 0)
                          ) && 
                          <>
                            <Skeleton className="h-8 w-[250px] rounded-md mb-6" />
                            <Skeleton className="h-4 w-[320px] rounded-md mb-6" />
                            <hr className='w-full mb-6' />
                            <div className="flex flex-row items-center justify-between w-full mb-4">
                              <div className='flex flex-row items-center'>
                                <Skeleton className="h-6 w-[150px] mr-4" />
                                <Skeleton className="h-6 w-[250px]" />
                              </div>
                              <div className='flex flex-row items-center'>
                                <Skeleton className="h-6 w-[150px] mr-4" />
                                <Skeleton className="h-6 w-[250px]" />
                              </div>
                            </div>
                            <div className='flex flex-row items-center mb-4'>
                              <Skeleton className="h-6 w-[150px] mr-4" />
                              <div className='flex flex-row items-center'>
                                <Skeleton className="h-6 w-[100px] mr-2" />
                                <Skeleton className="h-6 w-[100px] mr-2" />
                                <Skeleton className="h-6 w-[100px]" />
                              </div>
                            </div>
                            <div className='flex flex-row items-center w-full justify-end mt-8'>
                              <Skeleton className="h-6 w-[80px] mr-4" />
                              <Skeleton className="h-6 w-[130px]" />
                            </div>
                          </>
                        }
                        {
                          (selectedCategory == "Programming Languages" && selectedLanguage == "Java")
                          && 
                          <>
                            <div className='w-full'>
                              <h4 className='font-bold text-2xl font-Inter mb-2'>Customize Java Environment</h4>
                              <p className='font-Inter text-gray-600 font-semibold mb-6'>Predefine the Java setup to streamline onboarding and ensure a consistent development environment for your team.</p>
                              <hr className='mb-6' />
                              <div className='mb-8'>
                                <h5 className='font-bold text-2xl font-Inter'>JDK Version</h5>
                                <p className='mb-4 text-gray-700 text-md font-Inter'>Choose which version of the JDK (Java Development Kit) should be used by the team.</p>
                                <div className='flex flex-row items-center w-1/2'>
                                  <label htmlFor="jdk_version" className="font-Inter text-lg mr-4 w-1/3">Java JDK Version</label>
                                  <Select id="jdk_version" onValueChange={(value) => setSelectedJdkVersion(value)}>
                                    <SelectTrigger className="bg-white text-lg w-2/3 font-semibold font-Inter rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border text-slate-600 border-slate-300">
                                      <SelectValue placeholder="Select a JDK version" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg text-slate-600 shadow-lg focus:outline-none border border-slate-300">
                                      <SelectGroup>
                                        <SelectItem className="text-lg font-Inter font-semibold" value="Java 8">Java 8</SelectItem>
                                        <SelectItem className="text-lg font-Inter font-semibold" value="Java 11">Java 11</SelectItem>
                                        <SelectItem className="text-lg font-Inter font-semibold" value="Java 17">Java 17</SelectItem>
                                        <SelectItem className="text-lg font-Inter font-semibold" value="Java 21">Java 21</SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div className='mb-8'>
                                <h5 className='font-bold text-2xl font-Inter'>Build Tool Configuration</h5>
                                <p className='mb-4 font-Inter text-md text-gray-700'>Choose which build tool the team will use for Java projects to handle dependencies and builds.</p>
                                <div className='flex flex-row items-center w-1/2'>
                                  <label htmlFor="build_tool" className="font-Inter text-lg mr-4 w-1/3">Build Tool</label>
                                  <div className='flex flex-row items-center'>
                                    <div tabIndex={0} onClick={() => setSelectedJavaBuildTool("Maven")} className={`${selectedJavaBuildTool == "Maven" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter mr-3`}>
                                      <SiApachemaven />
                                      <span className='ml-2'>Maven</span>
                                    </div>
                                    <div tabIndex={0} onClick={() => setSelectedJavaBuildTool("Gradle")} className={`${selectedJavaBuildTool == "Gradle" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter mr-3`}>
                                      <SiGradle />
                                      <span className='ml-2'>Gradle</span>
                                    </div>
                                    <div tabIndex={0} onClick={() => setSelectedJavaBuildTool("Ant")} className={`${selectedJavaBuildTool == "Ant" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter`}>
                                      <SiApacheant /> 
                                      <span className='ml-2'>Ant</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='mb-8'>
                                <h5 className='font-bold text-2xl font-Inter'>Java IDE Configuration (Optional)</h5>
                                <p className='mb-4 font-Inter text-md text-gray-700'>Choose which build tool the team will use for Java projects to handle dependencies and builds.</p>
                                <div className='flex flex-row items-center'>
                                  <label htmlFor="build_tool" className="font-Inter text-lg mr-4">Preferred Java IDE</label>
                                  <div className='flex flex-row items-center'>
                                    <div tabIndex={0} onClick={() => setSelectedJavaIDE("IntelliJ IDEA")} className={`${selectedJavaIDE == "IntelliJ IDEA" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter mr-3`}>
                                      <SiIntellijidea />
                                      <span className='ml-2'>IntelliJ IDEA</span>
                                    </div>
                                    <div tabIndex={0} onClick={() => setSelectedJavaIDE("VS Code")} className={`${selectedJavaIDE == "VS Code" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter mr-3`}>
                                      <VscVscode />
                                      <span className='ml-2'>VS Code</span>
                                    </div>
                                    <div tabIndex={0} onClick={() => setSelectedJavaIDE("Eclipse")} className={`${selectedJavaIDE == "Eclipse" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter mr-3`}>
                                      <SiEclipseide /> 
                                      <span className='ml-2'>Eclipse</span>
                                    </div>
                                    <div tabIndex={0} onClick={() => setSelectedJavaIDE("NetBeans")} className={`${selectedJavaIDE == "NetBeans" ? "bg-slate-800 text-gray-50" : ""} cursor-pointer flex flex-row items-center px-3 py-1 rounded-lg border border-gray-200 bg-slate-100 text-xl font-Inter`}>
                                      <SiApachenetbeanside /> 
                                      <span className='ml-2'>NetBeans</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='flex flex-row items-center justify-end mt-8'>
                                <Button className="mr-4 text-xl bg-slate-800 py-2 rounded-lg">Save Configuration</Button>
                                <Button variant="outline" className="flex flex-row items-center py-4 rounded-lg text-xl">
                                  <FaRegFileCode />
                                  <span>Generate Setup Script</span>
                                </Button>
                              </div>
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </>
    )
}