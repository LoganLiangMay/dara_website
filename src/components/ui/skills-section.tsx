import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, Users, Lightbulb, BarChart3, Palette, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

interface SkillsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  categories: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    title: "GTM Strategy",
    icon: Target,
    color: "text-blue-500",
    skills: ["Market Research", "Product Launch", "Channel Strategy", "Customer Segmentation", "Pricing Strategy"]
  },
  {
    title: "Consumer Insights",
    icon: Users,
    color: "text-green-500",
    skills: ["Qualitative Research", "Quantitative Analysis", "User Persona Development", "Journey Mapping", "Behavioral Analysis"]
  },
  {
    title: "Brand Management",
    icon: Palette,
    color: "text-purple-500",
    skills: ["Brand Strategy", "Brand Positioning", "Visual Identity", "Content Strategy", "Brand Guidelines"]
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    color: "text-orange-500",
    skills: ["Marketing Analytics", "Data Visualization", "A/B Testing", "ROI Analysis", "Predictive Modeling"]
  },
  {
    title: "Creative Strategy",
    icon: Lightbulb,
    color: "text-pink-500",
    skills: ["Campaign Development", "Creative Direction", "Storytelling", "UX/UI Design", "Design Thinking"]
  },
  {
    title: "Growth Marketing",
    icon: TrendingUp,
    color: "text-indigo-500",
    skills: ["Digital Marketing", "SEO/SEM", "Social Media", "Email Marketing", "Performance Marketing"]
  }
];

const SkillsSection = React.forwardRef<HTMLDivElement, SkillsSectionProps>(
  ({ className, title = "Skills & Expertise", subtitle, categories = defaultCategories, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 px-8 md:py-24 md:px-12 lg:px-16 bg-background", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all hover:border-primary/50"
                >
                  <div className="flex items-center mb-4">
                    <div className={cn("p-2 rounded-lg bg-secondary mr-3", category.color)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/40 mr-3" />
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = "SkillsSection";

export { SkillsSection, type SkillCategory };