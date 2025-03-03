import Image from 'next/image'
import Head from 'next/head' 
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-xl font-BebasNeue">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-Cairo text-lg font-semibold">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-Cairo text-lg font-semibold">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-Cairo text-lg font-semibold">
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-Cairo text-lg font-semibold">Manage Team</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-Cairo text-lg font-semibold">Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-Cairo text-lg font-semibold">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
        <section id="" className='py-20 mx-auto w-3/4'>
          <span className="text-6xl font-BebasNeue w-1/2">Welcome, Amine</span>
          <div className='w-full p-4 mt-12 border border-gray-300 rounded-md'>
            <p className='text-2xl font-BebasNeue'>Invite team members</p>
          </div>
        </section>
      </div>
    </>
  );
}
