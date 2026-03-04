import React from 'react';
import { cn } from "@/lib/utils";
import { motion, Variants } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-1.5 sm:mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component - removed extends to avoid conflicts
interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo }, ref) => {

    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 md:bg-background text-foreground md:flex-row md:min-h-screen",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content - Full width on mobile */}
        <div className="flex w-full flex-col justify-between min-h-screen md:min-h-full p-6 sm:p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-8 sm:mb-12" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            {/* Profile image - Larger on mobile since it's the only image */}
                            <div className="mr-3 h-12 w-12 sm:h-12 sm:w-12 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
                                <img src={logo.url} alt={logo.alt} className="h-full w-full object-cover" />
                            </div>
                            <div>
                                {logo.text && <p className="text-base sm:text-lg font-bold text-foreground">{logo.text}</p>}
                                {slogan && <p className="text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase">{slogan}</p>}
                            </div>
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-4 sm:my-6 h-1 w-16 sm:w-20 bg-primary" variants={itemVariants}></motion.div>
                    <motion.p className="mb-6 sm:mb-8 max-w-md text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a
                        href={callToAction.href}
                        className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base tracking-wide hover:bg-primary/90 transition-all hover:scale-105 transform"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {callToAction.text}
                    </motion.a>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-8 sm:mt-12 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span className="truncate">{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span className="truncate">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span className="truncate">{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Angled Clip Path Animation - Hidden on Mobile */}
        <motion.div
          className="hidden md:block relative w-full md:w-1/2 md:min-h-full lg:w-2/5 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center top',
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
        />
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };