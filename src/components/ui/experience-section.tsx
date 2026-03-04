import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
}

interface ExperienceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  experiences: Experience[];
  title?: string;
  subtitle?: string;
}

const ExperienceSection = React.forwardRef<HTMLDivElement, ExperienceSectionProps>(
  ({ className, experiences, title = "Experience", subtitle, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 px-8 md:py-24 md:px-12 lg:px-16 bg-secondary/10", className)}
        {...props}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {exp.logo && (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  )}

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0 gap-1">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {exp.description.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";

export { ExperienceSection };