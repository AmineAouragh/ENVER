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

export function DropDown(){
    return (
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
    )
}