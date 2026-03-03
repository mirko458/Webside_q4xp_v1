export function ImpressumSection() {
  return (
    <section className="container py-24 sm:py-32" id="impressum">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Impressum</h2>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h3>
            <p>
              Q4XP GmbH<br />
              Oliver Loose (Geschäftsführer)<br />
              SAP PLM Consulting<br />
              Branichstr. 54<br />
              69198 Schriesheim
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Kontakt</h3>
            <p>
              Telefon: +49 170 960 38 99<br />
              Mobil: +49 6203 189 489 5<br />
              E-Mail: <a href="mailto:oliver.loose@q4xp.com" className="text-foreground hover:underline">oliver.loose@q4xp.com</a>
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr. einfügen oder Abschnitt entfernen, falls nicht vorhanden]
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
