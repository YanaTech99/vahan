export const version = "v1";

export const endPoint = {
  //sendOtp: `/${version}/auth/login`,
  sendOtp: `/${version}/auth/code/send`,
  verifyOtp: `/${version}/auth/code/verify`,
  checkAvailability: `/${version}/auth/username/availability`,
  register: `/${version}/auth/register`,
  home: `/${version}/a/home`,
  event: `/${version}/events`,
  getProfile: `/${version}/me`,
  changeMobileNumber: `/${version}/me/mobile`,
  changeEmail: `/${version}/me/email`,
  updateEmail: `/${version}/me/email/update`,
  updateMobile: `/${version}/me/mobile/update`,
  homePage: `/${version}/organizations/home`,
  createEvent: `/${version}/organizations/organizers`,
  organizers: `/${version}/users/profile/organizers`,
  homeStats: `/${version}/organizations/home-stats`,
  memberList: `/${version}/organizations/teams`,
  uploadOrganizerDp: `/${version}/organizations`,
  searchTeamUser: `/${version}/search/users`,
  addTeamMember: `/${version}/organizations/teams`,
  organizationsEventList: `/${version}/organizations`,
  liveEventSale: `/${version}/organizations/events`,
  privacy_policy: `/${version}/help/privacy-policy`,
  terms_of_service: `/${version}/help/privacy-policy`,
  contact_us: `/${version}/help/contact-us`,
  updateOrganization: `/${version}/organizations/events`,
  attendantList : `/${version}/organizations/events`
};