"use client";

import {
  Award,
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CalendarRange,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileBarChart2,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Megaphone,
  NotebookTabs,
  School,
  Trophy,
  User,
  UserRoundCog,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Cell,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Profile", icon: User, active: true },
  { label: "Schools Management", icon: Building2 },
  { label: "Staff Management", icon: Users },
  { label: "Student Management", icon: GraduationCap },
  { label: "Reports", icon: FileBarChart2 },
  { label: "Job Application List", icon: BriefcaseBusiness },
  { label: "Holiday", icon: CalendarRange },
  { label: "My Achievements", icon: Trophy },
  { label: "Exam Schedule", icon: NotebookTabs },
];

const summaryCards = [
  {
    label: "Total Schools",
    value: "12",
    helper: "Active Schools",
    icon: School,
    color: "#D9145C",
    bg: "bg-[#FCE5EF]",
  },
  {
    label: "Total Staff",
    value: "256",
    helper: "Active Staff",
    icon: Users,
    color: "#005BDB",
    bg: "bg-[#E6F0FF]",
  },
  {
    label: "Total Students",
    value: "4,258",
    helper: "Active Students",
    icon: GraduationCap,
    color: "#22C55E",
    bg: "bg-[#E6F9ED]",
  },
  {
    label: "Total Reports",
    value: "128",
    helper: "Generated This Month",
    icon: ClipboardList,
    color: "#7C3AED",
    bg: "bg-[#EEE8FF]",
  },
  {
    label: "Job Applications",
    value: "36",
    helper: "New Applications",
    icon: BriefcaseBusiness,
    color: "#F97316",
    bg: "bg-[#FFF2E8]",
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
  ["36", "New Applications", "#22C55E", "bg-[#EAFBF1]"],
  ["12", "Shortlisted", "#005BDB", "bg-[#EAF2FF]"],
  ["8", "In Process", "#F97316", "bg-[#FFF4E8]"],
  ["5", "Selected", "#7C3AED", "bg-[#F2ECFF]"],
];

const holidays = [
  ["25 May 2024", "Saturday", "Weekend"],
  ["26 May 2024", "Sunday", "Weekend"],
  ["27 May 2024", "Monday", "Summer Holiday"],
];

const cardMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" },
};

function DashboardCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      {...cardMotion}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      <Card className="h-full p-5">{children}</Card>
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

function IconTile({
  icon: Icon,
  className,
  color,
}: {
  icon: React.ElementType;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-2xl",
        className,
      )}
      style={color ? { color } : undefined}
    >
      <Icon className="size-6" />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-[300px] shrink-0 flex-col bg-gradient-to-b from-[#002B5B] to-[#001B3A] p-4 text-white lg:flex">
      <div className="mb-7 rounded-lg bg-white p-4 shadow-[0_16px_32px_rgba(0,0,0,0.18)]">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#FCE5EF] text-[#D9145C]">
            <School className="size-7" />
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
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold">Admin</p>
          <p className="truncate text-xs text-white/75">Super Administrator</p>
        </div>
        <ChevronDown className="size-4" />
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-[#D9145C] to-[#C80E52] px-4 py-4 text-white shadow-[0_16px_36px_rgba(217,20,92,0.22)] sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
            <Menu className="size-6" />
          </Button>
          <div className="lg:hidden">
            <p className="text-lg font-extrabold leading-5">Sri Chaitanya</p>
            <p className="text-xs text-white/80">Admin Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="soft"
            className="hidden h-11 rounded-xl border border-white/15 bg-white text-[#071B52] hover:bg-white/90 sm:flex"
          >
            <CalendarDays className="size-4 text-[#071B52]" />
            20 May 2024, Monday
            <ChevronDown className="size-4" />
          </Button>
          <HeaderIcon icon={CalendarDays} />
          <div className="relative">
            <HeaderIcon icon={Bell} />
            <span className="absolute -right-0.5 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-[#D9145C] bg-white text-[10px] font-bold text-[#D9145C]">
              5
            </span>
          </div>
          <Avatar className="size-11 border-2 border-white">
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <button className="hidden items-center gap-2 text-sm font-bold sm:flex">
            ADMIN <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function HeaderIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full p-5 transition-shadow hover:shadow-[0_18px_45px_rgba(7,27,82,0.11)]">
            <div className="flex items-start gap-4">
              <IconTile
                icon={card.icon}
                className={card.bg}
                color={card.color}
              />
              <div>
                <p className="text-sm font-medium text-[#314166]">{card.label}</p>
                <p className="mt-2 text-2xl font-extrabold text-[#071B52]">
                  {card.value}
                </p>
              </div>
            </div>
            <p
              className="mt-6 text-sm font-semibold"
              style={{ color: card.color }}
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
    ["Employee ID", "SC-ADM-001"],
    ["Department", "Administration"],
    ["Email", "admin@scinet.in"],
    ["Contact", "9876543210"],
    ["Joining Date", "01 Jan 2018"],
  ];

  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle>Teacher / Profile Summary</CardTitle>
      </CardHeader>
      <CardContent className="mt-5">
        <div className="flex items-center gap-4">
          <Avatar className="size-20 shadow-inner">
            <AvatarFallback className="bg-gradient-to-br from-[#005BDB] to-[#D9145C] text-xl">
              AD
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-extrabold">Admin</h2>
            <Badge>Super Administrator</Badge>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <span className="flex items-center gap-3 text-[#61708F]">
                <UserRoundCog className="size-4" />
                {label}
              </span>
              <span className="font-semibold text-[#071B52]">{value}</span>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-6 w-full">
          View Full Profile
        </Button>
      </CardContent>
    </DashboardCard>
  );
}

function TimetableCard() {
  return (
    <DashboardCard className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Today&apos;s Time Table</CardTitle>
        <SectionLink>View Full Timetable</SectionLink>
      </CardHeader>
      <CardContent className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <tbody>
            {timetable.map(([time, klass, subject, status]) => (
              <tr key={`${time}-${klass}`} className="border-t border-[#E8EEF7]">
                <td className="py-4 font-medium text-[#071B52]">{time}</td>
                <td className="py-4 text-[#071B52]">{klass}</td>
                <td className="py-4 text-[#071B52]">{subject}</td>
                <td className="py-4 text-right">
                  <Badge
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </DashboardCard>
  );
}

function AttendanceCard() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle>Student Attendance (Today)</CardTitle>
      </CardHeader>
      <CardContent className="mt-5 grid gap-5 sm:grid-cols-[1fr_1fr] xl:grid-cols-1 2xl:grid-cols-[1fr_1fr]">
        <DonutChart data={attendanceData} centerValue="81%" centerLabel="Present" />
        <div className="flex flex-col justify-center gap-4">
          {attendanceData.map((item) => (
            <MetricLine key={item.name} {...item} suffix={item.name === "Present" ? "(81%)" : item.name === "Absent" ? "(14%)" : "(5%)"} />
          ))}
        </div>
        <div className="sm:col-span-2 xl:col-span-1 2xl:col-span-2">
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#61708F]">Total Students</p>
            <p className="text-2xl font-extrabold text-[#071B52]">4,258</p>
          </div>
          <Button variant="outline" className="w-full">
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
        <CardTitle>Staff Overview</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-5 grid items-center gap-4 sm:grid-cols-[0.9fr_1.1fr]">
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
  return (
    <div className="relative mx-auto flex h-44 w-full max-w-52 items-center justify-center">
      <PieChart width={176} height={176}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="58%"
            outerRadius="82%"
            paddingAngle={1}
            stroke="none"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
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
        <span className="text-sm font-medium text-[#61708F]">{centerLabel}</span>
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
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="flex items-center gap-3 font-medium text-[#071B52]">
        <span className="size-3 rounded-full" style={{ backgroundColor: color }} />
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
}: {
  title: string;
  action: string;
  icon: React.ElementType;
  items: string[][];
}) {
  const Icon = icon;

  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <SectionLink>{action}</SectionLink>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="divide-y divide-[#E8EEF7]">
          {items.map(([label, date]) => (
            <div key={label} className="flex items-center gap-4 py-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#FCE5EF] text-[#D9145C]">
                <Icon className="size-4" />
              </div>
              <p className="min-w-0 flex-1 truncate text-sm font-medium text-[#071B52]">
                {label}
              </p>
              <p className="text-sm font-medium text-[#314166]">{date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </DashboardCard>
  );
}

function JobApplications() {
  return (
    <DashboardCard>
      <CardHeader>
        <CardTitle>Job Applications Summary</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {applications.map(([value, label, color, bg]) => (
          <div
            key={label}
            className={cn(
              "rounded-xl p-4 text-center transition hover:-translate-y-1",
              bg,
            )}
          >
            <ClipboardList className="mx-auto mb-3 size-6" style={{ color }} />
            <p className="text-2xl font-extrabold text-[#071B52]">{value}</p>
            <p className="mt-1 text-xs font-semibold text-[#314166]">{label}</p>
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
        <CardTitle>Holiday Calendar</CardTitle>
        <SectionLink>View Calendar</SectionLink>
      </CardHeader>
      <CardContent className="mt-5 grid gap-5 sm:grid-cols-[0.65fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-[#F2A5C4] bg-white text-center">
          <div className="bg-[#D9145C] py-2 text-sm font-bold text-white">
            May 2024
          </div>
          <div className="p-5">
            <p className="text-4xl font-extrabold">20</p>
            <p className="font-semibold text-[#314166]">Monday</p>
          </div>
        </div>
        <div className="divide-y divide-[#E8EEF7]">
          {holidays.map(([date, day, type]) => (
            <div key={date} className="grid grid-cols-3 gap-2 py-3 text-sm">
              <span className="font-bold">{date}</span>
              <span className="font-medium text-[#314166]">{day}</span>
              <span
                className={cn(
                  "text-right font-semibold",
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
        <CardTitle>My Achievements</CardTitle>
        <SectionLink>View All</SectionLink>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="flex items-center gap-5">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-[#FCE5EF] text-[#D9145C]">
            <Award className="size-12" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-extrabold text-[#071B52]">
              Excellent Performance Award
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#61708F]">
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
  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <div className="space-y-5 p-4 sm:p-6 lg:p-8">
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
                <ChevronDown className="size-4" />
              </Button>
            </section>

            <SummaryCards />

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-[0.9fr_1.45fr_1.2fr]">
              <ProfileSummary />
              <TimetableCard />
              <AttendanceCard />
            </section>

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
              <StaffOverview />
              <ListCard
                title="School Notices"
                action="View All"
                icon={Megaphone}
                items={notices}
              />
              <ListCard
                title="Upcoming Exams"
                action="View All"
                icon={CalendarDays}
                items={exams}
              />
            </section>

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
              <JobApplications />
              <HolidayCalendar />
              <Achievements />
            </section>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-30 lg:hidden">
        <Button size="icon" className="rounded-full shadow-2xl">
          <LayoutDashboard className="size-5" />
        </Button>
      </div>
    </main>
  );
}
