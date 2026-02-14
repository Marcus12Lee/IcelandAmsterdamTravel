/**
 * International driver information for Iceland self-drive.
 * Edit names and license numbers here.
 */
export interface DriverInfo {
  /** First / display name */
  name: string;
  /** Full name + local ID (e.g. "Lee Song Ting, 2010405141426") */
  fullNameAndId: string;
  /** International driver's license number (國際駕照) */
  internationalLicense: string;
}

export const drivers: DriverInfo[] = [
  {
    name: "Marcus",
    fullNameAndId: "Lee Song Ting, 2010405141426",
    internationalLicense: "06401274",
  },
  {
    name: "Eugenne",
    fullNameAndId: "Chen Pin Jui, 4280091020305",
    internationalLicense: "06138882",
  },
  {
    name: "Dennis",
    fullNameAndId: "Lan Yung Chin, 4010403020909",
    internationalLicense: "06407478",
  },
];
