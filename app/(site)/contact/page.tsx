import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch to discuss your project',
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <Container size="md">
        <div className="animate-in">
          <h1 className="text-foreground mb-6 text-center">Let's Work Together</h1>
          <p className="text-muted text-lg text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below or schedule a call to discuss 
            how we can collaborate.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-foreground text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-muted hover:text-foreground transition-colors">
                  hello@example.com
                </a>
              </div>

              <div>
                <h3 className="text-foreground text-lg font-semibold mb-2">Schedule a Call</h3>
                <p className="text-muted mb-4">
                  Prefer to talk? Book a 30-minute consultation call.
                </p>
                <a 
                  href="/schedule" 
                  className="text-foreground hover:text-muted transition-colors font-medium"
                >
                  View Available Times →
                </a>
              </div>

              <div>
                <h3 className="text-foreground text-lg font-semibold mb-2">Social</h3>
                <div className="space-y-2">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}