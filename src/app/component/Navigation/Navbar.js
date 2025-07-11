'use client';

import {
  Bell,
  Calendar,
  ChevronDown,
  LayoutDashboard,
  Link2,
  LogOut,
  Mail,
  Menu,
  Settings,
  UserPlus,
  X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-screen bg-white dark:bg-neutral-800 z-50 border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex items-center justify-between px-4 md:px-16 h-16">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-4 flex-grow">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Search Bar */}
          <form className="flex w-full max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder="Search products"
              className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm outline-none"
            />
          </form>
        </div>

        {/* Right: Icons & Profile */}
        <div className="hidden lg:flex items-center gap-4">
          <CreateButton />
          <IconLink icon={<LayoutDashboard className="h-5 w-5" />} />
          <DropdownWrapper
            icon={<Mail className="h-5 w-5" />}
            badgeColor="bg-green-500"
            title="Messages"
            items={[
              {
                img: '/assets/images/faces/face4.jpg',
                label: 'Mark sent you a message',
                sub: '1 minute ago',
              },
              {
                img: '/assets/images/faces/face2.jpg',
                label: 'Cregh sent you a message',
                sub: '15 minutes ago',
              },
              {
                img: '/assets/images/faces/face3.jpg',
                label: 'Profile picture updated',
                sub: '18 minutes ago',
              },
            ]}
          />
          <DropdownWrapper
            icon={<Bell className="h-5 w-5" />}
            badgeColor="bg-red-500"
            title="Notifications"
            items={[
              {
                icon: <Calendar className="text-green-500" />,
                label: 'Event today',
                sub: 'Just a reminder that you have an event',
              },
              {
                icon: <Settings className="text-red-500" />,
                label: 'Settings',
                sub: 'Update dashboard',
              },
              {
                icon: <Link2 className="text-yellow-500" />,
                label: 'Launch Admin',
                sub: 'New admin wow!',
              },
            ]}
          />
          <ProfileDropdown />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-4">
          <CreateButton />
          <IconLink icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" />
          <ProfileDropdown />
        </div>
      )}
    </nav>
  );
}

function CreateButton() {
  return (
    <div className="relative group">
      <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm w-full lg:w-auto">
        + Create New Sheet
      </button>
      <div className="hidden group-hover:flex absolute right-0 top-full mt-2 w-64 bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-700 rounded-md flex-col z-50">
        <h6 className="px-4 py-2 font-semibold">Projects</h6>
        <div className="border-t border-neutral-200 dark:border-neutral-700" />
        <DropdownItem icon={<UserPlus />} label="Software Development" />
        <DropdownItem icon={<LayoutDashboard />} label="UI Development" />
        <DropdownItem icon={<Settings />} label="Software Testing" />
        <p className="text-center text-sm py-2 text-neutral-500">See all projects</p>
      </div>
    </div>
  );
}

function IconLink({ icon, label }) {
  return (
    <Link href="#" className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center gap-2">
      {icon}
      {label && <span className="text-sm">{label}</span>}
    </Link>
  );
}

function ProfileDropdown() {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/assets/images/faces/face15.jpg"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="hidden sm:block text-sm font-medium">Henry Klein</p>
        <ChevronDown className="hidden sm:block h-4 w-4" />
      </div>
      <div className="hidden group-hover:flex absolute right-0 top-full mt-2 w-64 bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-700 rounded-md flex-col z-50">
        <h6 className="px-4 py-2 font-semibold">Profile</h6>
        <div className="border-t border-neutral-200 dark:border-neutral-700" />
        <DropdownItem icon={<Settings className="text-green-500" />} label="Settings" />
        <DropdownItem icon={<LogOut className="text-red-500" />} label="Log out" />
        <p className="text-center text-sm py-2 text-neutral-500">Advanced settings</p>
      </div>
    </div>
  );
}

function DropdownItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
      <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function DropdownWrapper({ icon, badgeColor, title, items }) {
  return (
    <div className="relative group">
      <div className="relative p-2 cursor-pointer rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800">
        {icon}
        <span className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${badgeColor}`} />
      </div>
      <div className="hidden group-hover:flex absolute right-0 top-full mt-2 w-72 bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-700 rounded-md flex-col z-50">
        <h6 className="px-4 py-2 font-semibold">{title}</h6>
        <div className="border-t border-neutral-200 dark:border-neutral-700" />
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            {item.img ? (
              <Image
                src={item.img}
                alt={item.label}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            )}
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-neutral-500">{item.sub}</p>
            </div>
          </div>
        ))}
        <p className="text-center text-sm py-2 text-neutral-500">See all {title.toLowerCase()}</p>
      </div>
    </div>
  );
}
