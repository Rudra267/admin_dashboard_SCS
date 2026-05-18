"use client";

import {
  Award,
  BadgeCheck,
  BarChart3,
  Bell,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  IdCard,
  LayoutDashboard,
  LogOut,
  Mail,
  Megaphone,
  Phone,
  School,
  Trophy,
  University,
  User,
  Users,
  UsersRound,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Profile", icon: User, active: true },
  { label: "Schools Management", icon: University },
  { label: "Staff Management", icon: UsersRound },
  { label: "Student Management", icon: GraduationCap },
  { label: "Reports", icon: BarChart3 },
  { label: "Job Application List", icon: Briefcase },
  { label: "Holiday", icon: CalendarDays },
  { label: "My Achievements", icon: Trophy },
  { label: "Exam Schedule", icon: FileText },
];

const summaryCards = [
  {
    label: "Total Schools",
    value: "12",
    helper: "Active Schools",
    icon: School,
    color: "#D9145C",
    helperColor: "#10B347",
    gradient: "from-[#FF4F8A] to-[#E81964]",
  },
  {
    label: "Total Staff",
    value: "256",
    helper: "Active Staff",
    icon: Users,
    color: "#005BDB",
    helperColor: "#10B347",
    gradient: "from-[#3584FF] to-[#005BDB]",
  },
  {
    label: "Total Students",
    value: "4,258",
    helper: "Active Students",
    icon: GraduationCap,
    color: "#22C55E",
    helperColor: "#10B347",
    gradient: "from-[#45C85C] to-[#1DA640]",
  },
  {
    label: "Total Reports",
    value: "128",
    helper: "Generated This Month",
    icon: ClipboardList,
    color: "#7C3AED",
    helperColor: "#3429A4",
    gradient: "from-[#8B6DFF] to-[#6247E7]",
  },
  {
    label: "Job Applications",
    value: "36",
    helper: "New Applications",
    icon: BriefcaseBusiness,
    color: "#F97316",
    helperColor: "#FF2E00",
    gradient: "from-[#FF9C21] to-[#F56A00]",
  },
];

const timetable = [
  ["09:00 AM - 09:45 AM", "Class 10 - A", "Mathematics", "Completed"],
  ["09:45 AM - 10:30 AM", "Class 10 - A", "Mathematics", "Completed"],
  ["10:45 AM - 11:30 AM", "Class 9 - B", "Algebra", "In Progress"],
  ["11:30 AM - 12:15 PM", "Class 9 - B", "Algebra", "Upcoming"],
  ["01:00 PM - 01:45 PM", "Class 8 - C", "Geometry", "Upcoming"],
];

const attendanceData = [
  { name: "Present", value: 3456, color: "#22C55E" },
  { name: "Absent", value: 602, color: "#EF4444" },
  { name: "Leave", value: 200, color: "#F97316" },
];

const staffData = [
  { name: "Teaching Staff", value: 165, color: "#005BDB" },
  { name: "Non-Teaching Staff", value: 61, color: "#22C55E" },
  { name: "Support Staff", value: 30, color: "#7C3AED" },
];

const notices = [
  ["Staff Meeting Scheduled on 25 May 2024", "20 May 2024"],
  ["Summer Vacation from 01 June to 15 June", "18 May 2024"],
  ["New Academic Session 2024-25", "15 May 2024"],
  ["PTM on 30 May 2024", "14 May 2024"],
];

const exams = [
  ["Unit Test - 1 (Class 10)", "22 May 2024"],
  ["Half Yearly Exam (Class 9)", "05 Jun 2024"],
  ["Unit Test - 1 (Class 8)", "12 Jun 2024"],
  ["Annual Exam (All Classes)", "01 Jul 2024"],
];

const applications = [
  {
    value: "36",
    label: "New Applications",
    color: "#22C55E",
    bg: "bg-[#EAFBF1]",
    icon: FileText,
  },
  {
    value: "12",
    label: "Shortlisted",
    color: "#005BDB",
    bg: "bg-[#EAF2FF]",
    icon: ClipboardList,
  },
  {
    value: "8",
    label: "In Process",
    color: "#F97316",
    bg: "bg-[#FFF4E8]",
    icon: Award,
  },
  {
    value: "5",
    label: "Selected",
    color: "#7C3AED",
    bg: "bg-[#F2ECFF]",
    icon: BadgeCheck,
  },
];

const holidays = [
  ["25 May 2024", "Saturday", "Weekend"],
  ["26 May 2024", "Sunday", "Weekend"],
  ["27 May 2024", "Monday", "Summer Holiday"],
];

const cardMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.35, ease: "easeOut" },
};

function DashboardCard({
  className,
  cardClassName,
  children,
}: {
  className?: string;
  cardClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      {...cardMotion}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("min-w-0", className)}
    >
      <Card
        className={cn(
          "min-w-0 rounded-[14px] p-6 shadow-[0_12px_32px_rgba(7,27,82,0.07)]",
          cardClassName,
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}

function SectionLink({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-xs font-bold text-[#D9145C] transition hover:text-[#a90f48]">
      {children}
    </button>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="mb-7 rounded-lg bg-white p-4 shadow-[0_16px_32px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image
                src="/assets/logo_transparent_fixed.png"
                alt="Sri Chaitanya logo"
                width={48}
                height={48}
                className="size-12 object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xl font-extrabold leading-5 text-[#005BDB]">
                Sri Chaitanya
              </p>
              <p className="text-sm font-bold text-[#D9145C]">
                Educational Institutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "group flex h-14 items-center justify-between rounded-lg px-4 text-left text-sm font-semibold text-white/90 transition-all hover:bg-white/10",
              item.active &&
                "bg-gradient-to-r from-[#D9145C] to-[#E9286C] text-white shadow-[0_14px_30px_rgba(217,20,92,0.28)]",
            )}
          >
            <span className="flex items-center gap-4">
              <item.icon className="size-5" />
              {item.label}
            </span>
            {!item.active && <ChevronRight className="size-4 opacity-70" />}
          </button>
        ))}
      </nav>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
        <Avatar className="size-14">
          <AvatarImage src="/assets/profileImg.png" alt="Admin profile photo" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold">Admin</p>
          <p className="truncate text-xs text-white/75">Administrator</p>
        </div>
        <ChevronDown className="size-4" />
      </div>
    </>
  );
}

function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <aside className="hidden min-h-screen w-[300px] shrink-0 flex-col bg-gradient-to-b from-[#002B5B] to-[#001B3A] p-4 text-white lg:flex">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <motion.button
              aria-label="Close navigation backdrop"
              className="absolute inset-0 bg-[#071B52]/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={onClose}
              type="button"
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex h-full w-[300px] max-w-[86vw] flex-col overflow-y-auto bg-gradient-to-b from-[#002B5B] to-[#001B3A] p-4 text-white shadow-[18px_0_45px_rgba(7,27,82,0.25)]"
            >
              <SidebarContent />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function Header() {
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 bg-gradient-to-r from-[#D9145C] to-[#C80E52] px-4 py-3 text-white shadow-[0_16px_36px_rgba(217,20,92,0.22)] sm:px-6 lg:sticky lg:left-auto lg:right-auto lg:px-8 lg:py-4">
      <div className="flex min-h-[54px] items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* <Button
            aria-label="Open navigation"
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-6" />
          </Button> */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex min-w-0 items-center gap-3 lg:hidden"
          >
            <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/80">
              <Image
                src="/assets/logo_transparent_fixed.png"
                alt="Sri Chaitanya logo"
                width={56}
                height={56}
                className="size-14 object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xl font-extrabold leading-6">
                Sri Chaitanya
              </p>
              <p className="truncate text-sm leading-4 text-white/90">
                Admin Dashboard
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="relative">
            <HeaderIcon icon={Bell} />
            <span className="absolute -right-0.5 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-[#D9145C] bg-white text-[10px] font-bold text-[#D9145C]">
              5
            </span>
          </div>
          <div className="relative">
            <button
              aria-expanded={accountOpen}
              aria-label="Open account menu"
              className="flex items-center gap-3 rounded-full text-left transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:rounded-xl sm:py-1 sm:pl-1 sm:pr-2"
              onClick={() => setAccountOpen((open) => !open)}
              type="button"
            >
              <Avatar className="size-12 border-2 border-white sm:size-11">
                <AvatarImage src="/assets/profileImg.png" alt="Admin profile photo" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="hidden items-center gap-2 text-sm font-bold sm:flex">
                ADMIN
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform",
                    accountOpen && "rotate-180",
                  )}
                />
              </span>
            </button>

            <AnimatePresence>
              {accountOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-[calc(100%+10px)] z-30 w-44 overflow-hidden rounded-xl border border-[#E8EEF7] bg-white py-2 text-[#071B52] shadow-[0_16px_38px_rgba(7,27,82,0.18)]"
                >
                  <button
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold transition hover:bg-[#F5F8FC]"
                    onClick={() => setAccountOpen(false)}
                    type="button"
                  >
                    <User className="size-4 text-[#005BDB]" />
                    Profile
                  </button>
                  <button
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#D9145C] transition hover:bg-[#FCE5EF]"
                    onClick={() => setAccountOpen(false)}
                    type="button"
                  >
                    <LogOut className="size-4" />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="size-9 text-white hover:bg-white/10 sm:size-10"
    >
      <Icon className="size-5" />
    </Button>
  );
}

function SummaryCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {summaryCards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          whileHover={{ y: -3 }}
        >
          <Card className="h-full min-h-[116px] rounded-lg border-[#E8EDF7] px-7 py-6 shadow-[0_12px_30px_rgba(7,27,82,0.08)] transition-shadow hover:shadow-[0_18px_42px_rgba(7,27,82,0.12)]">
            <div className="flex items-start gap-5">
              <div
                className={cn(
                  "flex size-[46px] shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br text-white shadow-[0_10px_20px_rgba(7,27,82,0.12)]",
                  card.gradient,
                )}
              >
                <card.icon className="size-[25px] stroke-[2.25]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold leading-4 text-[#071B52]">
                  {card.label}
                </p>
                <p className="mt-2 text-[22px] font-extrabold leading-7 text-[#071B52]">
                  {card.value}
                </p>
              </div>
            </div>
            <p
              className="mt-6 text-[12px] font-semibold leading-4"
              style={{ color: card.helperColor }}
            >
              {card.helper}
            </p>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}

function ProfileSummary() {
  const rows = [
    { label: "Employee ID", value: "SC-ADM-001", icon: IdCard },
    { label: "Department", value: "Administration", icon: Building2 },
    { label: "Email", value: "admin@scinet.in", icon: Mail },
    { label: "Contact", value: "9876543210", icon: Phone },
    { label: "Joining Date", value: "01 Jan 2018", icon: CalendarDays },
  ];

  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">Teacher / Profile Summary</CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="flex items-center gap-5">
          <Avatar className="size-[88px] border-4 border-[#D9E5FF] shadow-inner">
            <AvatarImage src="/assets/profileImg.png" alt="Admin profile photo" />
            <AvatarFallback className="bg-gradient-to-br from-[#005BDB] via-[#86B7FF] to-[#F7B7CC] text-xl">
              AD
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-extrabold leading-6 text-[#071B52]">
              Admin
            </h2>
            <Badge className="mt-2 rounded-md bg-[#FFE5EF] px-4 py-2 text-[11px]">
              Super Administrator
            </Badge>
          </div>
        </div>
        <div className="mt-7 space-y-4">
          {rows.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 text-xs"
            >
              <span className="flex items-center gap-3 font-medium text-[#61708F]">
                <Icon className="size-4 text-[#61708F]" />
                {label}
              </span>
              <span className="font-semibold text-[#071B52]">{value}</span>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-7 h-10 w-full rounded-md text-xs">
          View Full Profile
        </Button>
      </CardContent>
    </DashboardCard>
  );
}

function TimetableCard() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">Today&apos;s Time Table</CardTitle>
        <SectionLink>View Full Timetable</SectionLink>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="space-y-4 text-xs">
          {timetable.map(([time, klass, subject, status]) => (
            <div
              key={`${time}-${klass}`}
              className="grid min-w-0 grid-cols-[1fr_auto] gap-x-3 gap-y-2 py-1 sm:grid-cols-[1.35fr_0.8fr_1fr_auto] sm:items-center"
            >
              <p className="min-w-0 font-medium text-[#071B52]">{time}</p>
              <Badge
                className="justify-self-end rounded-md px-2 py-1 text-[10px] sm:order-last"
                variant={
                  status === "Completed"
                    ? "success"
                    : status === "In Progress"
                      ? "info"
                      : "violet"
                }
              >
                {status}
              </Badge>
              <p className="min-w-0 font-medium text-[#071B52]">{klass}</p>
              <p className="min-w-0 break-words font-medium text-[#071B52]">
                {subject}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function AttendanceCard() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">Student Attendance (Today)</CardTitle>
      </CardHeader>
      <CardContent className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-[0.95fr_1.05fr]">
        <DonutChart data={attendanceData} centerValue="81%" centerLabel="Present" />
        <div className="flex flex-col justify-center gap-4">
          {attendanceData.map((item) => (
            <MetricLine key={item.name} {...item} suffix={item.name === "Present" ? "(81%)" : item.name === "Absent" ? "(14%)" : "(5%)"} />
          ))}
        </div>
        <div className="grid gap-4 sm:col-span-2 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-xs font-semibold text-[#61708F]">Total Students</p>
            <p className="mt-1 text-2xl font-extrabold leading-7 text-[#071B52]">
              4,258
            </p>
          </div>
          <Button variant="outline" className="h-10 rounded-md px-8 text-xs">
            View Attendance Report
          </Button>
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function StaffOverview() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">Staff Overview</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-5 grid items-center gap-5 sm:grid-cols-[0.9fr_1.1fr]">
        <DonutChart data={staffData} centerValue="256" centerLabel="Total Staff" />
        <div className="space-y-4">
          {staffData.map((item) => (
            <MetricLine key={item.name} {...item} />
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function DonutChart({
  data,
  centerValue,
  centerLabel,
}: {
  data: { name: string; value: number; color: string }[];
  centerValue: string;
  centerLabel: string;
}) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, amount: 0.55 });

  return (
    <div
      ref={chartRef}
      className="relative mx-auto flex h-40 w-full max-w-44 items-center justify-center"
    >
      <PieChart width={160} height={160}>
        {chartInView && (
          <Pie
            data={data}
            dataKey="value"
            innerRadius="58%"
            outerRadius="82%"
            paddingAngle={1}
            stroke="none"
            isAnimationActive
            animationBegin={180}
            animationDuration={900}
            animationEasing="ease-out"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        )}
          <Tooltip
            contentStyle={{
              borderRadius: 14,
              border: "1px solid #E8EEF7",
              boxShadow: "0 12px 30px rgba(7, 27, 82, 0.1)",
            }}
          />
        </PieChart>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-[#071B52]">
          {centerValue}
        </span>
        <span className="text-xs font-medium text-[#61708F]">{centerLabel}</span>
      </div>
    </div>
  );
}

function MetricLine({
  name,
  value,
  color,
  suffix,
}: {
  name: string;
  value: number;
  color: string;
  suffix?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-xs">
      <span className="flex items-center gap-3 font-medium text-[#071B52]">
        <span className="size-2.5 rounded-full" style={{ backgroundColor: color }} />
        {name}
      </span>
      <span className="font-extrabold text-[#071B52]">
        {value.toLocaleString()} {suffix}
      </span>
    </div>
  );
}

function ListCard({
  title,
  action,
  icon,
  items,
  iconBg = "bg-[#FCE5EF]",
  iconColor = "text-[#D9145C]",
}: {
  title: string;
  action: string;
  icon: React.ElementType;
  items: string[][];
  iconBg?: string;
  iconColor?: string;
}) {
  const Icon = icon;

  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        <SectionLink>{action}</SectionLink>
      </CardHeader>
      <CardContent className="mt-4">
        <div>
          {items.map(([label, date]) => (
            <div
              key={label}
              className="grid min-w-0 grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 py-3 sm:grid-cols-[auto_1fr_auto]"
            >
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md",
                  iconBg,
                  iconColor,
                )}
              >
                <Icon className="size-4" />
              </div>
              <p className="min-w-0 break-words text-xs font-medium text-[#071B52]">
                {label}
              </p>
              <p className="col-start-2 text-xs font-medium text-[#314166] sm:col-start-auto sm:shrink-0">
                {date}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function JobApplications() {
  return (
    <DashboardCard cardClassName="p-4">
      <CardHeader>
        <CardTitle className="text-[13px]">Job Applications Summary</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {applications.map(({ value, label, color, bg, icon: Icon }) => (
          <div
            key={label}
            className={cn(
              "flex min-h-[82px] flex-col items-center justify-center rounded-md px-2 py-2 text-center transition hover:-translate-y-1",
              bg,
            )}
          >
            <Icon className="mb-2 size-4" style={{ color }} />
            <p className="text-[20px] font-extrabold leading-6 text-[#071B52]">
              {value}
            </p>
            <p className="mt-1 text-[10px] font-medium leading-3 text-[#314166]">
              {label}
            </p>
          </div>
        ))}
      </CardContent>
    </DashboardCard>
  );
}

function HolidayCalendar() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">Holiday Calendar</CardTitle>
        <SectionLink>View Calendar</SectionLink>
      </CardHeader>
      <CardContent className="mt-5 grid min-w-0 gap-5 sm:grid-cols-[0.55fr_1fr]">
        <div className="overflow-hidden rounded-md border border-[#F2A5C4] bg-white text-center">
          <div className="bg-[#D9145C] py-2 text-xs font-bold text-white">
            May 2024
          </div>
          <div className="p-4">
            <p className="text-4xl font-extrabold leading-10">20</p>
            <p className="text-xs font-semibold text-[#314166]">Monday</p>
          </div>
        </div>
        <div className="min-w-0">
          {holidays.map(([date, day, type]) => (
            <div
              key={date}
              className="grid min-w-0 grid-cols-[1fr_auto] gap-x-3 gap-y-1 py-3 text-xs sm:grid-cols-3"
            >
              <span className="font-bold">{date}</span>
              <span className="font-medium text-[#314166]">{day}</span>
              <span
                className={cn(
                  "col-span-2 font-semibold sm:col-span-1 sm:text-right",
                  type.includes("Holiday") ? "text-[#D9145C]" : "text-[#071B52]",
                )}
              >
                {type}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function Achievements() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle className="text-sm">My Achievements</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="flex items-center gap-5">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-[#FCE5EF] text-[#D9145C]">
            <Trophy className="size-12 fill-[#D9145C]/15" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-extrabold text-[#071B52]">
              Excellent Performance Award
            </h3>
            <p className="mt-2 text-xs leading-5 text-[#61708F]">
              For outstanding contribution in academics 2023-24
            </p>
          </div>
          <ChevronRight className="size-6 text-[#AAB7CB]" />
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={cn(
                "size-2.5 rounded-full",
                dot === 1 ? "bg-[#D9145C]" : "bg-[#D5DDEB]",
              )}
            />
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F8FC]">
      <div className="flex min-w-0">
        <Sidebar
          mobileOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
        <div className="min-w-0 flex-1">
          <Header />
          <div className="space-y-5 p-4 pt-[94px] sm:p-6 sm:pt-[102px] lg:p-8">
            <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold tracking-normal text-[#071B52] sm:text-3xl">
                  Welcome back, <span className="text-[#D9145C]">Admin!</span>
                </h1>
                <p className="mt-2 text-sm font-medium text-[#61708F]">
                  Here&apos;s what&apos;s happening in your dashboard today.
                </p>
              </div>
              <Button
                variant="soft"
                className="w-full border border-[#E8EEF7] bg-white shadow-sm sm:w-auto"
              >
                <CalendarDays className="size-4 text-[#071B52]" />
                20 May 2024, Monday
              </Button>
            </section>

            <SummaryCards />

            <section className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[0.82fr_1.32fr_1.1fr]">
              <div className="grid min-w-0 gap-5">
                <ProfileSummary />
                <StaffOverview />
                <JobApplications />
              </div>

              <div className="grid min-w-0 gap-5">
                <TimetableCard />
                <ListCard
                  title="School Notices"
                  action="View All"
                  icon={Megaphone}
                  items={notices}
                  iconBg="bg-[#EEF3FF]"
                  iconColor="text-[#2F57D6]"
                />
                <HolidayCalendar />
              </div>

              <div className="grid min-w-0 gap-5">
                <AttendanceCard />
                <ListCard
                  title="Upcoming Exams"
                  action="View All"
                  icon={CalendarDays}
                  items={exams}
                  iconBg="bg-[#FFE5EF]"
                  iconColor="text-[#D9145C]"
                />
                <Achievements />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-30 lg:hidden">
        <Button
          aria-label="Open navigation"
          size="icon"
          className="rounded-full shadow-2xl"
          onClick={() => setMobileNavOpen(true)}
        >
          <LayoutDashboard className="size-5" />
        </Button>
      </div>
    </main>
  );
}
