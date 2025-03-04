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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"

export function DropDown(){
    return (
        <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="flex flex-row items-center border-gray-300 border px-4 rounded-md py-1 text-xl font-BebasNeue">
                    <Avatar>
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">Amine</span>
                  </button>
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