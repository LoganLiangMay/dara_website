import { HeroSection } from './components/ui/hero-section-2';
import { ExperienceSection } from './components/ui/experience-section';
import { SkillsSection, type SkillCategory } from './components/ui/skills-section';
import { ProjectsSection, type Project } from './components/ui/projects-section';
import { ContactSection, type ContactInfo } from './components/ui/contact-section';
import { Target, Users, Lightbulb, BarChart3, Palette, TrendingUp } from 'lucide-react';

function App() {
  // Dara's Experience Data
  const experiences = [
    {
      company: "Prophet",
      position: "Integrated Communications Planner",
      duration: "Aug 2022 - Present",
      location: "Austin, TX",
      description: [
        "Develop Go-to-Market strategies for Fortune 500 clients across consumer goods, technology, and retail sectors",
        "Lead qualitative and quantitative research methodologies to uncover consumer insights and market opportunities",
        "Create integrated marketing communication plans that align brand strategy with business objectives",
        "Collaborate with cross-functional teams to deliver data-driven recommendations for brand growth"
      ],
      skills: ["GTM Strategy", "Market Research", "Brand Strategy", "Consumer Insights"]
    },
    {
      company: "PepsiCo",
      position: "Marketing Intelligence Capstone - Product Assortment Project",
      duration: "Jan 2022 - May 2022",
      location: "Texas, United States",
      description: [
        "Conducted comprehensive market analysis for product assortment optimization",
        "Utilized advanced analytics and data visualization to identify growth opportunities",
        "Developed strategic recommendations based on consumer behavior patterns and market trends"
      ],
      skills: ["Marketing Analytics", "Data Analysis", "Product Strategy"]
    },
    {
      company: "Inteli-K",
      position: "Marketing Manager",
      duration: "Jan 2019 - Mar 2020",
      location: "Mexico",
      description: [
        "Led brand strategy and omnichannel marketing initiatives",
        "Managed product marketing campaigns from conception to execution",
        "Designed and implemented UX/UI improvements based on user research"
      ],
      skills: ["Brand Strategy", "Omnichannel Marketing", "Product Marketing", "UX/UI Design"]
    }
  ];

  // Skills Categories
  const skillCategories: SkillCategory[] = [
    {
      title: "GTM Strategy",
      icon: Target,
      color: "text-blue-500",
      skills: ["Market Research", "Product Launch", "Channel Strategy", "Customer Segmentation", "Competitive Analysis"]
    },
    {
      title: "Consumer Insights",
      icon: Users,
      color: "text-green-500",
      skills: ["Qualitative Research", "Quantitative Analysis", "User Personas", "Journey Mapping", "Behavioral Analysis"]
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
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "text-indigo-500",
      skills: ["Digital Media", "SEO/SEM", "Social Media", "Email Marketing", "Content Marketing"]
    }
  ];

  // Projects Data
  const projects: Project[] = [
    {
      title: "Fortune 500 GTM Strategy",
      company: "Prophet",
      description: "Led the development of a comprehensive go-to-market strategy for a major CPG brand's new product line, resulting in successful launch across 15 markets.",
      impact: "25% increase in market penetration within first quarter",
      tags: ["Strategy", "Research", "Product Launch"],
      featured: true
    },
    {
      title: "Consumer Behavior Study",
      company: "Prophet",
      description: "Conducted extensive qualitative and quantitative research to understand evolving consumer preferences in the post-pandemic retail environment.",
      impact: "Insights influenced $2M marketing budget allocation",
      tags: ["Research", "Analytics", "Consumer Insights"]
    },
    {
      title: "PepsiCo Product Assortment",
      company: "PepsiCo / UT Austin",
      description: "Analyzed product portfolio performance and developed data-driven recommendations for assortment optimization across retail channels.",
      impact: "Identified opportunities for 15% revenue growth",
      tags: ["Analytics", "Strategy", "Retail"]
    },
    {
      title: "Brand Identity Redesign",
      company: "Inteli-K",
      description: "Led complete brand refresh including visual identity, messaging framework, and omnichannel marketing strategy implementation.",
      impact: "40% increase in brand awareness metrics",
      tags: ["Branding", "Design", "Marketing"]
    },
    {
      title: "MIT COVID-19 Hackathon Winner",
      company: "MIT",
      description: "Developed winning solution for healthcare system support during COVID-19 pandemic, focusing on community immunity tracking.",
      impact: "Selected as winner in 'Support Health System' category",
      tags: ["Innovation", "Healthcare", "Technology"]
    },
    {
      title: "NICE Catalog Collection",
      company: "Nice de México",
      description: "Designed product collections for Latin American market, including back-to-school campaign and seasonal catalog design.",
      impact: "Featured in EXPO Joya and JOYA Magazine",
      tags: ["Design", "Product Development", "Retail"]
    }
  ];

  // Contact Information
  const contactInfo: ContactInfo = {
    email: "dara.rubio@example.com",
    phone: "+1 (512) 734-1531",
    location: "Austin, Texas",
    linkedin: "https://www.linkedin.com/in/derubio/",
    website: "www.dararubio.com"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        logo={{
          url: "/dara-profile.png",
          alt: "Dara Rubio",
          text: "Dara Rubio"
        }}
        slogan="BRAND & GTM STRATEGIST"
        title={
          <>
            Creating Impact Through
            <br />
            <span className="text-primary">Strategic Innovation</span>
          </>
        }
        subtitle="Combining deep analytical skills with creative thinking to develop practical solutions for complex business challenges. Master of Science in Marketing from UT Austin McCombs."
        callToAction={{
          text: "VIEW MY WORK",
          href: "#projects",
        }}
        backgroundImage="/dara-profile.png"
        contactInfo={{
          website: "www.dararubio.com",
          phone: "+1 (512) 734-1531",
          address: "Austin, Texas",
        }}
      />

      {/* Experience Section */}
      <ExperienceSection
        experiences={experiences}
        title="Professional Experience"
        subtitle="Driving growth through strategic marketing initiatives and consumer-centric approaches"
      />

      {/* Skills Section */}
      <SkillsSection
        title="Core Competencies"
        subtitle="A unique blend of analytical rigor and creative problem-solving"
        categories={skillCategories}
      />

      {/* Projects Section */}
      <ProjectsSection
        id="projects"
        title="Featured Projects"
        subtitle="Delivering measurable impact through strategic marketing solutions"
        projects={projects}
      />

      {/* Contact Section */}
      <ContactSection
        title="Let's Connect"
        subtitle="I'm passionate about creating meaningful brand experiences and driving business growth"
        contactInfo={contactInfo}
        showForm={false}
      />
    </div>
  );
}

export default App;