export type ReferenceItem = { industry: string; location: string; title: string; skills: string };
import type { Locale } from '@/lib/utils'

type Service = { title: string; description: string }
type Step = { title: string; text: string }
type ContentModel = {
  nav: { about: string; services: string; approach: string; references: string; contact: string }
  hero: { badge: string; title: string; subtitle: string; motto: string; primaryCta: string; secondaryCta: string }
  about: { title: string; lead: string; points: string[] }
  services: { title: string; intro: string; items: Service[] }
  approach: { title: string; intro: string; steps: Step[] }
  references: { title: string; intro: string; items: ReferenceItem[] }
  contact: { title: string; intro: string; name: string; email: string; message: string; cta: string; success: string; error: string }
  footer: { line: string; impressum: string; datenschutz: string }
}

export const content: Record<Locale, ContentModel> = {
  de: {
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      approach: 'Methodik',
      references: 'Referenzen',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Q4XP GmbH – SAP PLM Consulting',
      title: 'Q4XP GmbH',
      subtitle:
        '28+ Jahre SAP PLM Erfahrung',
      motto: '„Ganz ehrlich? Wir sind nicht die Einzigen. Nur die Besten.“',
      primaryCta: 'Jetzt anfragen',
      secondaryCta: 'Leistungen ansehen'
    },
    about: {
      title: 'Über uns',
      lead:
        'Als spezialisierte SAP PLM Beratung der <strong class="font-bold text-foreground">Q4XP GmbH</strong> unterstützen wir Unternehmen dabei, Fachbereich und IT in komplexen SAP-Landschaften optimal zu verbinden. Die operative Leitung liegt bei Geschäftsführer <strong class="font-bold text-foreground">Oliver Loose</strong>.',
      points: [
        '<strong class="font-bold text-foreground">Schwerpunkte (Methoden):</strong> Projektmanagement (PMP), Konzeption von SAP Loesungsarchitekturen, innovative Entwicklungsprojekte',
        '<strong class="font-bold text-foreground">Schwerpunkte (Prozesse):</strong> PLM, PLM-ERP Integration, ERP (insb. ETO/MTO Prozesse, PS/PP)',
        '<strong class="font-bold text-foreground">Erfahrung:</strong> Seit 1998 umfassende, integrative SAP Projekterfahrungen in Automotive, Maschinen- und Anlagenbau, Aerospace',
        '<strong class="font-bold text-foreground">Rolle:</strong> SAP Berater und Projektleiter mit langjaehriger Erfahrung in SAP PLM/ERP sowie Planung und Durchfuehrung komplexer Beratungs- und Entwicklungsprojekte',
        '<strong class="font-bold text-foreground">Frag wen du willst:</strong> Am Ende landest du eh bei uns',
        '<strong class="font-bold text-foreground">Geschaeftsfuehrung:</strong> Oliver Loose (Q4XP GmbH)'
      ]
    },
    services: {
      title: 'Leistungen',
      intro: 'Ganzheitliche Betreuung – von der fachlichen Analyse und Konzeption über die Softwarearchitektur bis hin zur technischen Umsetzung.',
      items: [
        {
          title: 'Applikationsberatung',
          description: 'Tiefgreifendes prozessuales Fachwissen in SAP PLM und den dazugehörigen Objekten und Anwendungen.'
        },
        {
          title: 'Solution Architektur',
          description: 'Design und Konzeption hochskalierbarer SAP PLM-Lösungen und Systemlandschaften.'
        },
        {
          title: 'Softwareentwicklung',
          description: 'Hochwertige Implementierungen mit ABAP OO, SAP UI5, Fiori und HANA CDS Views.'
        },
        {
          title: 'Systemintegration',
          description: 'Sichere Anbindung von Drittsystemen, inklusive PDM/PLM-Integrationen wie Dassault 3DX und Siemens Teamcenter.'
        }
      ]
    },
references: {
      title: 'Referenzen',
      intro: 'Auszug relevanter Projekte:',
      items: [
  {
    industry: 'Automotive OEM',
    location: 'Muenchen',
    title: 'SAP PL, PEP PDM LS1+LS2 sowie Mitwirkung an der Gesamtstrategie fuer den PLM Backbone (SAP PLM iPPE Projekt)',
    skills: 'SAP PL, PEP PDM, iPPE, PLM Backbone'
  },
  {
    industry: 'Automotive Zulieferer',
    location: 'Stuttgart',
    title: 'Loesungskonzeption und Implementierungspartner fuer weltweiten PLM Backbone und Product Portfolio Management auf Basis SAP PSM/iPPE',
    skills: 'SAP PSM, iPPE, PLM Backbone, Product Portfolio Mgmt.'
  },
  {
    industry: 'Anlagenbau',
    location: 'Muenchen',
    title: 'Gesamtarchitektur und Implementierungspartner fuer Global Manufacturing Solution (ETO/PS Prozesse) sowie diverse PLM/ERP Projekte',
    skills: 'ETO, PS, ERP, Gesamtarchitektur, Implementierung'
  }
      ]
    },
    approach: {
      title: 'Methodik',
      intro: 'Ein praxisbewährter Ansatz für effiziente und transparente Projektabwicklung.',
      steps: [
        {
          title: '1. Analyse',
          text: 'Bewertung der Ist-Situation, Anforderungsaufnahme inkl. Fit-Gap-Analyse und Definition des Zielzustands.'
        },
        {
          title: '2. Konzeption',
          text: 'Erstellung von Fach- und IT-Konzepten mit klaren Verantwortlichkeiten und Machbarkeitsprüfung.'
        },
        {
          title: '3. Umsetzung',
          text: 'Agile oder klassische Realisierung in ABAP, Fiori und SAP PLM mit höchstem Qualitätsanspruch.'
        },
        {
          title: '4. Go-Live & Support',
          text: 'Sicherer Know-how-Transfer, Stabilisierung der Systeme und Begleitung im produktiven Betrieb.'
        }
      ]
    },
    
    contact: {
      title: 'Kontakt',
      intro: 'Kontaktieren Sie uns gerne direkt per E-Mail, Telefon oder über LinkedIn für einen ersten Austausch.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      cta: 'Nachricht senden',
      success: 'Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.',
      error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
    },
    footer: {
      line: 'Q4XP GmbH · Oliver Loose · SAP PLM Consulting',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      approach: 'Methodology',
      references: 'References',
      contact: 'Contact'
    },
    hero: {
      badge: 'Q4XP GmbH – SAP PLM Consulting',
      title: 'Q4XP PLM Consulting',
      subtitle: '20+ Years of SAP PLM Experience',
      motto: '„We believe that true innovation emerges when complexity is made simple“',
      primaryCta: 'Inquire Now',
      secondaryCta: 'View Services'
    },
    about: {
      title: 'About Us',
      lead: 'As a specialized SAP PLM consultancy at <strong class="font-bold text-foreground">Q4XP GmbH</strong>, we help organizations connect business and IT in complex SAP landscapes. Managing Director <strong class="font-bold text-foreground">Oliver Loose</strong> leads our delivery.',
      points: [
        '<strong class="font-bold text-foreground">20+ Years</strong> of SAP PLM experience across the team, including 8 years directly at SAP in Walldorf',
        '<strong class="font-bold text-foreground">Managing Director:</strong> Oliver Loose (Q4XP GmbH)',
        '<strong class="font-bold text-foreground">Specialized</strong> in the analysis, design, and implementation of complex system integrations in the SAP PLM environment.',
        '<strong class="font-bold text-foreground">Industry Expertise:</strong> Automotive, Automotive Suppliers, Mechanical Engineering, Plant Engineering, Medical Technology, Telecommunications, Software',
        '<strong class="font-bold text-foreground">Professional Core Competencies:</strong> iPPE (Integrated Product and Process Engineering), Release and Maturity Management, Change Management, Material Master, Bills of Material (BOM), BOM Synchronization via GSS (Guided Structure Synchronization), Document Management',
        '<strong class="font-bold text-foreground">IT Core Competencies:</strong> ABAP OO, SAP UI5, Fiori, SAP PDMI, HANA CDS Views, ABAP Web Dynpro, Floor Plan Manager (FPM), Excel VBA, Open SQL, SAP Script, Smartforms',
        '<strong class="font-bold text-foreground">Focus</strong> on sustainable architectures, clean implementation, and reliable operations'
      ]
    },
    services: {
      title: 'Services',
      intro: 'Holistic support – from professional analysis and conceptual design, to software architecture and technical implementation.',
      items: [
        {
          title: 'Application Consulting',
          description: 'In-depth procedural expertise in SAP PLM and its associated objects and applications.'
        },
        {
          title: 'Solution Architecture',
          description: 'Design and conceptualization of highly scalable SAP PLM solutions and system landscapes.'
        },
        {
          title: 'Software Development',
          description: 'High-quality implementations using ABAP OO, SAP UI5, Fiori, and HANA CDS Views.'
        },
        {
          title: 'System Integration',
          description: 'Secure connection of third-party systems, including PDM/PLM integrations such as Dassault 3DX and Siemens Teamcenter.'
        }
      ]
    },
    references: {
      title: 'References',
      intro: 'Selection of relevant integration and development projects:',
      items: [
        {
          industry: 'Automotive',
          location: 'England, Gaydon',
          title: 'Interface Dassault 3DX Delmia to SAP Material, Classic BOM & iPPE',
          skills: 'SAP PDMI, iPPE, BOM, Material Master, Change Management, ABAP OO'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Friedrichshafen',
          title: 'Implementation of SAP GSS for fully automated EBOM-to-MBOM synchronization from Teamcenter',
          skills: 'GSS, BOM, Change Management, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Mechanical Engineering',
          location: 'Zweibrücken',
          title: 'Implementation of SAP GSS for EBOM/MBOM synchronization including extensive migration of legacy data',
          skills: 'GSS, BOM, Change Management, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Nuremberg',
          title: 'Variant configuration using SAP iPPE for JIT calls and interface from Siemens Capital to SAP iPPE',
          skills: 'iPPE, Change Management, ABAP OO'
        },
        {
          industry: 'Plant Engineering',
          location: 'Munich',
          title: 'Development of an SAP UI5 / Fiori web application for supplier communication for bulk orders',
          skills: 'SAP UI5, Fiori, SAP HANA, CDS Views, ABAP OO'
        },
        {
          industry: 'Medical Technology',
          location: 'Mannheim / Switzerland, Rotkreuz',
          title: 'Global implementation of SAP Product Structure Management (PSM) for product configurations and PLM extensions (ECR)',
          skills: 'iPPE, SAP ECR, Material Master, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Software & Automotive',
          location: 'Walldorf / China, Shanghai',
          title: 'Solution architecture of the engineering BOM with integration of geometric processes by embedding visualization capabilities of SAP Visual Enterprise',
          skills: 'SAP Visual Manufacturing Planner, ABAP OO'
        },
        {
          industry: 'Medical Technology',
          location: 'Fulda',
          title: 'Concept and implementation of cross-object status and maturity management in SAP PLM including CAD integration',
          skills: 'SAP DVS, SAP ECTR, Material Master, Pronovia ConfigManager, ABAP OO'
        },
        {
          industry: 'Automotive',
          location: 'Munich',
          title: 'Long-term support and development of SAP add-on functions to map complex vehicle product configurations in SAP iPPE',
          skills: 'iPPE, BOM, Excel VBA, ABAP OO'
        },
        {
          industry: 'Software (SAP)',
          location: 'Walldorf',
          title: 'Creation of an interface for manufacturing BOMs from Dassault 3DX Delmia to SAP iPPE',
          skills: 'iPPE, SAP PDMI, ABAP OO'
        },
        {
          industry: 'Specialty Glass',
          location: 'Mainz',
          title: 'Implementation of requirements for Engineering Change Record, Process Route Workflows & DMS',
          skills: 'DVS, SAP ECR, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Aerospace',
          location: 'Herborn',
          title: 'General PLM optimizations in the SAP system, including establishment of release processes for documents and materials',
          skills: 'BOM, Material Master, Change Management, Excel VBA, SAP Script, Smartforms, Adobe Lifecycle Manager, ABAP OO'
        },
        {
          industry: 'Automotive Supplier',
          location: 'Germany',
          title: 'Implementation of SAP GSS for iPPE to BOM synchronization including migration of legacy data',
          skills: 'ABAP OO, Web Dynpro'
        },
        {
          industry: 'Aerospace',
          location: 'Switzerland',
          title: 'Implementation of an approving change management based on SAP PLM 7 Engineering Change Records',
          skills: 'SAP PLM7, SAP ECR, ABAP OO, Web Dynpro'
        },
        {
          industry: 'Automotive',
          location: 'Mannheim',
          title: 'Migration of variant configuration data from the legacy system MATRIX into SAP iPPE',
          skills: 'iPPE, Change Management, ABAP OO, ABAP to XLSX, Excel VBA'
        },
        {
          industry: 'Medical Technology',
          location: 'Hanau',
          title: 'Migration of master data into ProNovia configuration types as part of a PLM implementation',
          skills: 'ProNovia Config Manager, ABAP OO'
        },
        {
          industry: 'Public Broadcasting',
          location: 'Germany',
          title: 'Implementation of EHP2 Employee Self Service (ESS) for SAP Travel Management in the portal',
          skills: 'ABAP Web Dynpro, SAP FPM (Floor Plan Manager)'
        },
        {
          industry: 'Insurance',
          location: 'Braunschweig',
          title: 'Creation of a Web Dynpro application for field service for customer, contract, and claims overview',
          skills: 'ABAP Web Dynpro'
        }
      ]
    },
    approach: {
      title: 'Methodology',
      intro: 'A clear structure is the key to successful system integration.',
      steps: [
        {
          title: 'Analysis',
          text: 'Thorough recording of the actual state and specific business requirements.'
        },
        {
          title: 'Concept',
          text: 'Development of sustainable architectures and precise process mapping.'
        },
        {
          title: 'Realization',
          text: 'Clean IT implementation with a focus on maintainability and performance.'
        },
        {
          title: 'Rollout',
          text: 'Secure go-live, comprehensive testing, and sustainable support.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'Looking for an experienced partner for your SAP PLM project? Feel free to contact us directly via email, phone, or LinkedIn.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      cta: 'Send Message',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'An error occurred. Please try again later or contact me directly via email.'
    },
    footer: {
      line: 'Q4XP GmbH · Oliver Loose · SAP PLM Consulting',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy'
    }
  }
};