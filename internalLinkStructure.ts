export const InternalLinkStructure = {
  services: {
    repairs: {
      from: ['home', 'services', 'brands'],
      to: 'repairs',
      anchor: 'emergency printer repair Saskatoon',
      context: 'same-day service'
    },
    managedPrint: {
      from: ['home', 'services', 'office-equipment'],
      to: 'managed-print',
      anchor: 'managed print services Saskatchewan',
      context: 'reduce printing costs'
    },
    inkToner: {
      from: ['services', 'brands', 'office-equipment'],
      to: 'ink-toner',
      anchor: 'ink toner supplies Saskatoon',
      context: 'genuine cartridges'
    },
    leaseRental: {
      from: ['services', 'office-equipment'],
      to: 'lease-rental',
      anchor: 'printer rental Saskatoon',
      context: 'flexible terms'
    }
  },

  brands: {
    konicaMinolta: {
      from: ['repairs', 'office-equipment', 'services'],
      anchor: 'Konica Minolta repair Saskatchewan',
      context: 'certified technician'
    },
    lexmark: {
      from: ['repairs', 'services', 'ink-toner'],
      anchor: 'Lexmark printer repair Saskatoon',
      context: 'authorized dealer'
    }
  },

  locations: {
    saskatchewan: {
      from: ['all-pages'],
      anchor: 'Saskatchewan printing services',
      context: 'province-wide coverage'
    },
    saskatoon: {
      from: ['all-pages'],
      anchor: 'Saskatoon printer services',
      context: 'local expertise'
    }
  }
};
