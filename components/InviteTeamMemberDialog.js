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


export function InviteTeamMemberDialog(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="mt-4">Invite team members</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-Inter text-2xl">Invite a team member</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="" placeholder="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Email
                    </Label>
                    <Input id="email" value="" placeholder="johndoe@example.com" className="col-span-3" />
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
                  <Button type="submit" className="font-BebasNeue text-xl">Send invite</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}