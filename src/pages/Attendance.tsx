import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, MinusCircle } from "lucide-react";

const attendanceRecords = [
  { name: "Sarah Chen", avatar: "SC", checkIn: "09:02 AM", checkOut: "06:15 PM", hours: "9h 13m", status: "Present" },
  { name: "James Wilson", avatar: "JW", checkIn: "08:55 AM", checkOut: "05:50 PM", hours: "8h 55m", status: "Present" },
  { name: "Maria Garcia", avatar: "MG", checkIn: "09:30 AM", checkOut: "06:30 PM", hours: "9h 00m", status: "Late" },
  { name: "Alex Kim", avatar: "AK", checkIn: "—", checkOut: "—", hours: "—", status: "On Leave" },
  { name: "David Park", avatar: "DP", checkIn: "08:45 AM", checkOut: "05:45 PM", hours: "9h 00m", status: "Present" },
  { name: "Emily Zhang", avatar: "EZ", checkIn: "09:00 AM", checkOut: "—", hours: "In progress", status: "Present" },
  { name: "Tom Rogers", avatar: "TR", checkIn: "—", checkOut: "—", hours: "—", status: "Absent" },
  { name: "Lisa Patel", avatar: "LP", checkIn: "08:50 AM", checkOut: "05:55 PM", hours: "9h 05m", status: "Present" },
];

const statusConfig: Record<string, { icon: typeof CheckCircle2; style: string }> = {
  Present: { icon: CheckCircle2, style: "text-success" },
  Late: { icon: Clock, style: "text-warning" },
  "On Leave": { icon: MinusCircle, style: "text-info" },
  Absent: { icon: XCircle, style: "text-destructive" },
};

const summaryCards = [
  { label: "Present", value: 5, total: 8, color: "bg-success" },
  { label: "Late", value: 1, total: 8, color: "bg-warning" },
  { label: "On Leave", value: 1, total: 8, color: "bg-info" },
  { label: "Absent", value: 1, total: 8, color: "bg-destructive" },
];

const Attendance = () => {
  return (
    <AppLayout title="Attendance" subtitle="Today's attendance overview — Feb 25, 2026">
      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {summaryCards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <div className={`w-3 h-3 rounded-full ${c.color} mx-auto mb-2`} />
            <p className="text-2xl font-extrabold text-foreground">{c.value}</p>
            <p className="text-xs text-muted-foreground">{c.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Records Table */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Check In</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Check Out</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Hours</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((rec, i) => {
                const sc = statusConfig[rec.status];
                const Icon = sc.icon;
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0">
                          {rec.avatar}
                        </div>
                        <span className="font-medium text-foreground">{rec.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{rec.checkIn}</td>
                    <td className="py-3 px-4 text-muted-foreground">{rec.checkOut}</td>
                    <td className="py-3 px-4 text-muted-foreground font-medium hidden sm:table-cell">{rec.hours}</td>
                    <td className="py-3 px-4">
                      <div className={`flex items-center gap-1.5 ${sc.style}`}>
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-medium">{rec.status}</span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default Attendance;
