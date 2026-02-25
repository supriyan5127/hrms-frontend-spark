import { AppLayout } from "@/components/AppLayout";
import { MetricCard } from "@/components/MetricCard";
import { Users, Clock, CalendarDays, TrendingUp, UserCheck, UserMinus } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const attendanceData = [
  { day: "Mon", present: 142, absent: 8 },
  { day: "Tue", present: 138, absent: 12 },
  { day: "Wed", present: 145, absent: 5 },
  { day: "Thu", present: 140, absent: 10 },
  { day: "Fri", present: 135, absent: 15 },
];

const departmentData = [
  { name: "Engineering", value: 45, color: "hsl(175, 60%, 40%)" },
  { name: "Design", value: 18, color: "hsl(222, 60%, 45%)" },
  { name: "Marketing", value: 22, color: "hsl(38, 92%, 55%)" },
  { name: "Sales", value: 30, color: "hsl(280, 60%, 55%)" },
  { name: "HR", value: 12, color: "hsl(0, 72%, 55%)" },
];

const hireData = [
  { month: "Jul", hires: 5 },
  { month: "Aug", hires: 8 },
  { month: "Sep", hires: 3 },
  { month: "Oct", hires: 12 },
  { month: "Nov", hires: 7 },
  { month: "Dec", hires: 9 },
  { month: "Jan", hires: 6 },
  { month: "Feb", hires: 11 },
];

const recentActivities = [
  { name: "Sarah Chen", action: "approved leave request", time: "2 min ago", avatar: "SC" },
  { name: "James Wilson", action: "joined Engineering team", time: "1 hr ago", avatar: "JW" },
  { name: "Maria Garcia", action: "submitted timesheet", time: "3 hrs ago", avatar: "MG" },
  { name: "Alex Kim", action: "updated profile", time: "5 hrs ago", avatar: "AK" },
  { name: "David Park", action: "completed onboarding", time: "1 day ago", avatar: "DP" },
];

const upcomingBirthdays = [
  { name: "Emily Zhang", date: "Feb 28", dept: "Design" },
  { name: "Tom Rogers", date: "Mar 2", dept: "Sales" },
  { name: "Lisa Patel", date: "Mar 5", dept: "Engineering" },
];

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard" subtitle="Welcome back, John! Here's what's happening today.">
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard icon={Users} title="Total Employees" value={152} change="+4 this month" changeType="positive" variant="primary" />
        <MetricCard icon={UserCheck} title="Present Today" value={142} change="93.4% attendance" changeType="positive" />
        <MetricCard icon={CalendarDays} title="On Leave" value={8} change="5 planned, 3 sick" changeType="neutral" />
        <MetricCard icon={TrendingUp} title="New Hires" value={11} change="+37% vs last month" changeType="positive" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Attendance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Attendance</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
              <Tooltip />
              <Bar dataKey="present" fill="hsl(175, 60%, 40%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="absent" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Department Pie */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">By Department</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={departmentData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} dataKey="value" stroke="none">
                {departmentData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {departmentData.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
                <span className="font-semibold text-foreground">{d.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Hiring Trend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Hiring Trend</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={hireData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} />
              <Tooltip />
              <Line type="monotone" dataKey="hires" stroke="hsl(175, 60%, 40%)" strokeWidth={2.5} dot={{ fill: "hsl(175, 60%, 40%)", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivities.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-secondary flex items-center justify-center text-[10px] font-bold text-secondary-foreground shrink-0">
                  {a.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-foreground truncate">
                    <span className="font-semibold">{a.name}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Birthdays */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">🎂 Upcoming Birthdays</h3>
          <div className="space-y-3">
            {upcomingBirthdays.map((b, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="text-sm font-semibold text-foreground">{b.name}</p>
                  <p className="text-xs text-muted-foreground">{b.dept}</p>
                </div>
                <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                  {b.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
