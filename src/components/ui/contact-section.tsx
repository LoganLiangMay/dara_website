import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Linkedin, Globe, Send } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
}

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  contactInfo: ContactInfo;
  showForm?: boolean;
}

const ContactSection = React.forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ className, title = "Let's Connect", subtitle, contactInfo, showForm = false, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form submitted');
    };

    return (
      <section
        ref={ref}
        className={cn("py-16 px-8 md:py-24 md:px-12 lg:px-16 bg-background", className)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">{contactInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-secondary/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{contactInfo.location}</p>
                  </div>
                </div>

                {contactInfo.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium">Connect on LinkedIn</p>
                    </div>
                  </a>
                )}

                {contactInfo.website && (
                  <a
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Globe className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="text-foreground font-medium">{contactInfo.website}</p>
                    </div>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Contact Form or CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {showForm ? (
                <>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Collaborate?</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm passionate about creating meaningful brand experiences and driving business growth through strategic marketing initiatives. Let's discuss how we can work together to achieve your goals.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">Brand Strategy & GTM Planning</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">Consumer & Market Research</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">Integrated Marketing Communications</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">Creative Strategy & Design</p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start a Conversation
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export { ContactSection, type ContactInfo };