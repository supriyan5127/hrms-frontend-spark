import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { User, Building2, Bell, Shield, Palette } from "lucide-react";

const sections = [
  { icon: User, title: "Profile Settings", desc: "Update your personal information and preferences" },
  { icon: Building2, title: "Company Settings", desc: "Manage company details, policies, and branding" },
  { icon: Bell, title: "Notifications", desc: "Configure email and push notification preferences" },
  { icon: Shield, title: "Security", desc: "Password, two-factor authentication, and login history" },
  { icon: Palette, title: "Appearance", desc: "Customize theme, layout, and display preferences" },
];

const Settings = () => {
  return (
    <AppLayout title="Settings" subtitle="Manage your account and preferences">
      <div className="max-w-2xl space-y-3">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-secondary/30 transition-all group"
          >
            <div className="p-3 rounded-lg bg-muted group-hover:bg-secondary/10 transition-colors">
              <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Settings;
