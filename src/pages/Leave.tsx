import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { Check, X, Clock } from "lucide-react";

const leaveRequests = [
  { id: 1, name: "Alex Kim", type: "Sick Leave", from: "Feb 24", to: "Feb 26", days: 3, status: "Pending", avatar: "AK", reason: "Medical appointment and recovery" },
  { id: 2, name: "Sarah Chen", type: "Vacation", from: "Mar 1", to: "Mar 5", days: 5, status: "Approved", avatar: "SC", reason: "Family trip" },
  { id: 3, name: "Tom Rogers", type: "Personal", from: "Feb 28", to: "Feb 28", days: 1, status: "Pending", avatar: "TR", reason: "Moving to new apartment" },
  { id: 4, name: "Emily Zhang", type: "Vacation", from: "Mar 10", to: "Mar 14", days: 5, status: "Approved", avatar: "EZ", reason: "Planned vacation" },
  { id: 5, name: "David Park", type: "Sick Leave", from: "Feb 20", to: "Feb 21", days: 2, status: "Rejected", avatar: "DP", reason: "Insufficient leave balance" },
];

const leaveBalance = [
  { type: "Annual Leave", total: 20, used: 8, color: "bg-secondary" },
  { type: "Sick Leave", total: 10, used: 3, color: "bg-warning" },
  { type: "Personal Leave", total: 5, used: 1, color: "bg-chart-4" },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-warning/10 text-warning",
  Approved: "bg-success/10 text-success",
  Rejected: "bg-destructive/10 text-destructive",
};

const Leave = () => {
  return (
    <AppLayout title="Leave Management" subtitle="Track and manage leave requests">
      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {leaveBalance.map((lb, i) => (
          <motion.div
            key={lb.type}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <p className="text-sm font-medium text-muted-foreground mb-2">{lb.type}</p>
            <div className="flex items-end justify-between mb-3">
              <p className="text-2xl font-extrabold text-foreground">{lb.total - lb.used}</p>
              <p className="text-xs text-muted-foreground">{lb.used} / {lb.total} used</p>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${lb.color} transition-all duration-500`}
                style={{ width: `${(lb.used / lb.total) * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leave Requests */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Leave Requests</h3>
          <button className="px-4 py-2 text-sm rounded-lg gradient-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
            + New Request
          </button>
        </div>
        <div className="divide-y divide-border/50">
          {leaveRequests.map((lr, i) => (
            <motion.div
              key={lr.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 + i * 0.04 }}
              className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors flex-wrap gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                  {lr.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{lr.name}</p>
                  <p className="text-xs text-muted-foreground">{lr.type} · {lr.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-right">
                  <p className="text-xs font-medium text-foreground">{lr.from} – {lr.to}</p>
                  <p className="text-[11px] text-muted-foreground">{lr.days} day{lr.days > 1 ? "s" : ""}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[lr.status]}`}>
                  {lr.status}
                </span>
                {lr.status === "Pending" && (
                  <div className="flex gap-1.5">
                    <button className="p-1.5 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors">
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default Leave;
