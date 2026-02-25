import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { DollarSign, Download, Calendar } from "lucide-react";

const payrollData = [
  { name: "Sarah Chen", role: "Senior Engineer", dept: "Engineering", avatar: "SC", base: "$9,200", bonus: "$800", deductions: "$1,450", net: "$8,550" },
  { name: "James Wilson", role: "Product Designer", dept: "Design", avatar: "JW", base: "$7,500", bonus: "$500", deductions: "$1,180", net: "$6,820" },
  { name: "Maria Garcia", role: "Marketing Manager", dept: "Marketing", avatar: "MG", base: "$8,000", bonus: "$600", deductions: "$1,260", net: "$7,340" },
  { name: "Alex Kim", role: "DevOps Engineer", dept: "Engineering", avatar: "AK", base: "$8,800", bonus: "$700", deductions: "$1,390", net: "$8,110" },
  { name: "David Park", role: "Sales Executive", dept: "Sales", avatar: "DP", base: "$6,500", bonus: "$1,200", deductions: "$1,130", net: "$6,570" },
  { name: "Tom Rogers", role: "Account Manager", dept: "Sales", avatar: "TR", base: "$7,000", bonus: "$900", deductions: "$1,160", net: "$6,740" },
];

const summaryItems = [
  { label: "Total Payroll", value: "$186,400", icon: DollarSign, desc: "February 2026" },
  { label: "Pay Date", value: "Feb 28", icon: Calendar, desc: "Next Friday" },
  { label: "Employees", value: "152", icon: Download, desc: "All processed" },
];

const Payroll = () => {
  return (
    <AppLayout title="Payroll" subtitle="February 2026 payroll summary">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {summaryItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-xl p-5 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-secondary/10">
              <item.icon className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-xl font-extrabold text-foreground">{item.value}</p>
              <p className="text-[11px] text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Payslip Details</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg gradient-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Employee</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Base</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Bonus</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">Deductions</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Net Pay</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((emp, i) => (
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
                        {emp.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{emp.name}</p>
                        <p className="text-xs text-muted-foreground">{emp.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground font-medium">{emp.base}</td>
                  <td className="py-3 px-4 text-right text-success font-medium hidden sm:table-cell">{emp.bonus}</td>
                  <td className="py-3 px-4 text-right text-destructive font-medium hidden md:table-cell">{emp.deductions}</td>
                  <td className="py-3 px-4 text-right text-foreground font-bold">{emp.net}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default Payroll;
