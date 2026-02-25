import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, Mail, Phone } from "lucide-react";
import { useState } from "react";

const employees = [
  { id: 1, name: "Sarah Chen", role: "Senior Engineer", dept: "Engineering", email: "sarah@company.com", phone: "+1 555-0101", status: "Active", avatar: "SC", joined: "Jan 2023" },
  { id: 2, name: "James Wilson", role: "Product Designer", dept: "Design", email: "james@company.com", phone: "+1 555-0102", status: "Active", avatar: "JW", joined: "Mar 2023" },
  { id: 3, name: "Maria Garcia", role: "Marketing Manager", dept: "Marketing", email: "maria@company.com", phone: "+1 555-0103", status: "Active", avatar: "MG", joined: "Jun 2022" },
  { id: 4, name: "Alex Kim", role: "DevOps Engineer", dept: "Engineering", email: "alex@company.com", phone: "+1 555-0104", status: "On Leave", avatar: "AK", joined: "Sep 2023" },
  { id: 5, name: "David Park", role: "Sales Executive", dept: "Sales", email: "david@company.com", phone: "+1 555-0105", status: "Active", avatar: "DP", joined: "Nov 2023" },
  { id: 6, name: "Emily Zhang", role: "UX Researcher", dept: "Design", email: "emily@company.com", phone: "+1 555-0106", status: "Active", avatar: "EZ", joined: "Feb 2024" },
  { id: 7, name: "Tom Rogers", role: "Account Manager", dept: "Sales", email: "tom@company.com", phone: "+1 555-0107", status: "Active", avatar: "TR", joined: "Aug 2022" },
  { id: 8, name: "Lisa Patel", role: "Frontend Developer", dept: "Engineering", email: "lisa@company.com", phone: "+1 555-0108", status: "Active", avatar: "LP", joined: "May 2024" },
];

const Employees = () => {
  const [search, setSearch] = useState("");
  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout title="Employees" subtitle="Manage your team members">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-lg bg-card border border-border outline-none focus:ring-2 focus:ring-ring w-72 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2 text-sm rounded-lg gradient-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
            + Add Employee
          </button>
        </div>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden lg:table-cell">Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Joined</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp, i) => (
                <motion.tr
                  key={emp.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                        {emp.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{emp.name}</p>
                        <p className="text-xs text-muted-foreground">{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <span className="text-xs font-medium bg-muted px-2.5 py-1 rounded-full text-muted-foreground">{emp.dept}</span>
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="text-xs">{emp.email}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-xs hidden sm:table-cell">{emp.joined}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      emp.status === "Active"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="p-1 hover:bg-muted rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default Employees;
