

export type Skill = {
  id: string,
  name: string,
  iconLink: string
}

export type Project = {
  name: string,
  description: string,
  more_description: string,
  path: string,
}

export type Experience = {
  title: string
  company: string
  link: string
  location: string
  start: Date,
  end: Date | "present",
  description: string
  key_features: string[]
}