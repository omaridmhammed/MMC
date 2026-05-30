export type Location = {
  slug: 'carling' | 'richmond';
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  fax: string;
  email: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: 'carling',
    name: 'Carling',
    addressLine1: '1081 Carling Avenue, Unit 507',
    city: 'Ottawa',
    province: 'ON',
    postalCode: 'K1Y 4G2',
    phone: '613-704-2524',
    fax: '613-704-2430',
    email: 'admin@mymedicalcenters.ca',
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    addressLine1: '190 Richmond Rd',
    addressLine2: '(inside Superstore, second level)',
    city: 'Ottawa',
    province: 'ON',
    postalCode: 'K1Z 6W6',
    phone: '613-704-2524',
    fax: '613-704-2636',
    email: 'patient@mymedicalcenters.ca',
  }
];
