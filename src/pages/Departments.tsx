import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

const departments = [
  { name: "Engineering", head: "Sarah Chen", employees: 45, openPositions: 3, budget: "$2.4M", color: "hsl(175, 60%, 40%)" },
  { name: "Design", head: "James Wilson", employees: 18, openPositions: 2, budget: "$850K", color: "hsl(222, 60%, 45%)" },
  { name: "Marketing", head: "Maria Garcia", employees: 22, openPositions: 1, budget: "$1.1M", color: "hsl(38, 92%, 55%)" },
  { name: "Sales", head: "Tom Rogers", employees: 30, openPositions: 4, budget: "$1.8M", color: "hsl(280, 60%, 55%)" },
  { name: "Human Resources", head: "Lisa Patel", employees: 12, openPositions: 1, budget: "$600K", color: "hsl(0, 72%, 55%)" },
  { name: "Finance", head: "David Park", employees: 15, openPositions: 0, budget: "$720K", color: "hsl(200, 80%, 50%)" },
];

const Departments = () => {
  return (
    <AppLayout title="Departments" subtitle="Organization structure overview">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, i) => (
          <motion.div
            key={dept.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${dept.color}20` }}>
                <Users className="w-5 h-5" style={{ color: dept.color }} />
              </div>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                {dept.budget}
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">{dept.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">Head: {dept.head}</p>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">{dept.employees}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Members</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-secondary">{dept.openPositions}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Open Roles</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Departments;
