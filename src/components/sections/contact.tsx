import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/layout/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Globe } from 'lucide-react'

type ContactContent = {
  title: string
  intro: string
  name: string
  email: string
  message: string
  cta: string
  success: string
  error: string
}

export function ContactSection({ content }: { content: ContactContent }) {
  return (
    <Section id="contact" className="pb-28">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <Reveal direction="left">
            <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
          </Reveal>
          <Reveal delay={0.2} direction="left">
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{content.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.3} direction="up">
          <Card className="overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:oliver.loose@q4xp.com" className="text-lg font-semibold hover:text-primary transition-colors">
                    oliver.loose@q4xp.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Telefon</p>
                  <a href="tel:+491709603899" className="text-lg font-semibold hover:text-primary transition-colors">
                    +49 170 960 38 99
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Website</p>
                  <a href="https://www.q4xp.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">
                    www.q4xp.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
