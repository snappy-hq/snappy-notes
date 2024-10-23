"use client";

import React from "react";
import { useScrollTop } from "~/hooks/useScrollTop";
import { cn } from "~/lib/utils";
import Logo from "./logo";
import { ThemeToggle } from "~/components/ui/themeToggle";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useSession,
} from "@clerk/clerk-react";
import { Button } from "~/components/ui/button";
import Loader from "~/components/ui/loader";
import { useTheme } from "next-themes";
import { dark, experimental__simple } from "@clerk/themes";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { resolvedTheme } = useTheme();
  const { isSignedIn, isLoaded } = useSession();
  return (
    <nav
      className={cn(
        "top-0 z-50 sticky flex items-center justify-between p-6 w-full transition-all duration-300",
        scrolled && "shadow-2xl backdrop-blur-[2px]",
      )}
    >
      <Logo />
      <div className="flex justify-between items-center gap-2 theme-swithcer">
        <ClerkLoading>
          <div className="flex items-center">
            <Loader />
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size={"sm"} variant={"ghost"}>
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size={"sm"} variant={"default"}>
                Get started for free
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            {isSignedIn && isLoaded && (
              <Button
                asChild
                size={"sm"}
                variant={"ghost"}
                className="md:inline-flex hidden"
              >
                <Link href={"/notes"}>Enter Snappy notes</Link>
              </Button>
            )}
            <UserButton
              appearance={{
                baseTheme:
                  resolvedTheme === "dark" ? dark : experimental__simple,
              }}
              userProfileMode="modal"
            />
          </SignedIn>
        </ClerkLoaded>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
