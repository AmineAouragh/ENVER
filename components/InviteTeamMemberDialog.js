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

import { toast } from "sonner"

import { useState } from 'react'


export function InviteTeamMemberDialog(){
    const [ name, setName ] = useState('') 
    const [ email, setEmail ] = useState('') 
    const [ role, setRole ] = useState('')
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="mt-4">Invite team members</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-Inter text-2xl">Invite a team member</DialogTitle>
                  <DialogDescription>
                  Enter the details below to invite a new team member to Enver. 
                  They&apos;ll receive an email with instructions to join and set up their development environment.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Email
                    </Label>
                    <Input id="email" placeholder="johndoe@example.com" className="col-span-3" />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="role" className="text-right">
                      Role
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Roles</SelectLabel>
                          <SelectItem value="frontend_dev">Frontend Dev</SelectItem>
                          <SelectItem value="backend_dev">Backend Dev</SelectItem>
                          <SelectItem value="fullstack_dev">Fullstack Dev</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    className="font-BebasNeue text-xl"
                    onClick={() =>
                        toast(`An email invite will be sent to ${name}.`, {
                          description: "Sunday, December 03, 2023 at 9:00 AM",
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                    }
                  >
                    Send invite
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}