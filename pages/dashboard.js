import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { useState } from 'react'
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
import { RiTeamFill } from "react-icons/ri"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaDatabase } from "react-icons/fa"

export default function Dashboard(){
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
            <h3 className='text-3xl font-BebasNeue'>Invite A Team Member</h3>
            <InviteTeamMemberDialog />
          </div>
          <div className='w-1/2 p-4 mt-6 border border-gray-200 rounded-lg'>
            <div className='flex flex-row items-center justify-between w-full'>
              <h3 className='text-3xl font-BebasNeue'>Configure your team&apos;s tech stack</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <button type='button' className='rounded-md border border-gray-200 hover:bg-slate-50 px-6 py-2 text-md font-semibold font-Inter'>Configure tech stack</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[720px]">
                    <DialogHeader>
                        <DialogTitle className="font-Inter text-2xl">Configure Tech Stack</DialogTitle>
                        <DialogDescription>
                            Select technologies your team members should use based on their roles and generate a setup script. 
                            Each team member will be able to set up their development environment with just one-click.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Category
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="frontend" className="text-md font-Inter">Frontend</SelectItem>
                              <SelectItem value="backend" className="text-md font-Inter">Backend</SelectItem>
                              <SelectItem value="databases" className="text-md font-Inter flex flex-row items-center">
                                <FaDatabase />
                                <span>Databases</span>
                              </SelectItem>
                              <SelectItem value="devops" className="text-md font-Inter">DevOps</SelectItem>
                              <SelectItem value="testing" className="text-md font-Inter">Testing</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Technology
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="frontend" className="font-Inter text-md">Frontend</SelectItem>
                              <SelectItem value="backend">Backend</SelectItem>
                              <SelectItem value="databases" className=" flex-row items-center">
                                <FaDatabase />
                                <span>Databases</span>
                              </SelectItem>
                              <SelectItem value="devops">DevOps</SelectItem>
                              <SelectItem value="testing">Testing</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                </DialogContent>
              </Dialog>
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
    )
}