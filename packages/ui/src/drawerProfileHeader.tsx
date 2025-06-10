"use client";
import { Avatar, Button } from "@heroui/react";
import { FiLogOut } from "react-icons/fi";
import ThemeSwitch from "./themeSwitch.tsx";

type TUser = { image?: string | null; name: string; email: string; id: string };
export default function DrawerProfileHeader({
  user,
  handleLogout,
}: {
  handleLogout: () => void;
  user: TUser;
}) {
  if (!user) return null;
  return (
    <div className="flex items-center justify-between px-4 py-3 mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10" src={user.image as string} fallback />
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Button
          color="danger"
          variant="light"
          size="sm"
          onPress={handleLogout}
          startContent={<FiLogOut />}
          className="min-w-fit"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
