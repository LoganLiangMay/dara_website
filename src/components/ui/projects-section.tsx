import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink, Award, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string;
  tags: string[];
  link?: string;
  image?: string;
  featured?: boolean;
}

interface ProjectsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  projects: Project[];
}

const ProjectsSection = React.forwardRef<HTMLDivElement, ProjectsSectionProps>(
  ({ className, title = "Featured Projects", subtitle, projects, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 px-8 md:py-24 md:px-12 lg:px-16 bg-secondary/10", className)}
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
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all",
                  project.featured && "md:col-span-2 lg:col-span-2"
                )}
              >
                {project.image && (
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary/30" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-primary font-semibold">{project.company}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {project.impact && (
                    <div className="flex items-start mb-4">
                      <Award className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground font-medium">{project.impact}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
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

ProjectsSection.displayName = "ProjectsSection";

export { ProjectsSection, type Project };