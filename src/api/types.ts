export interface Job {
  id: number;
  title: string;
  degree: string;
  jobType: string;
  organization: string;
  locations: string[];

  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Degree {
  id: number;
  degree: string;
}
