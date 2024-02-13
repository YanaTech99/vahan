export interface AppInitialConfig {
  token: string;
  userId: string;
  isLogin: boolean;
  username: string;
  userData: any;
  language: string;
  isBiometrics: boolean;
}

export interface AppTokenConfig {
  token: string;
  expiryTime: string;
}

export interface Loader {
  isActive: boolean;
  labe?: string;
}

export interface EventPayLoad {
  id?: string;
  name?: string;
  description?: string;
  timeZone?: string;
  startDateTime?: string;
  endDateTime?: string;
  tickets?: Ticket;
  venue?: Venue;
}

export interface Ticket {
  name?: string;
  numberOfTickets?: string;
  price?: string;
  saleEnd?: string;
  startDateTime?: string;
  endDateTime?: SaleEnd;
  description?: string;
  perOrder?: PerOrder;
  refundPolicy?: string;
}

export interface SaleEnd {
  event?: string;
  intervel?: string;
}

export interface PerOrder {
  min?: string;
  max?: string;
}

export interface Venue {
  address_line_1?: string;
  address_line_2?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  lat?: string;
  long?: string;
}

export type ILanguage = "en" | "es";

export interface OrganizersProfile {
  organizers?: Organizers;
  affiliateOrganizers?: any;
  username?: string;
  id?: string;
}

export interface Organizers {
  name?: string;
  id?: string;
}

export interface HomeStats {
  liveCount?: string;
  draftCount?: string;
  pastCount?: string;
  teamCount?: string;
  isExit?: boolean;
}
