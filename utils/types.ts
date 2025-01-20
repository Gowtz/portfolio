export type Project = {
  id: string
  title: string
  thumbnailURL: string
  projectUrl?: string
  gitHubUrl: string
  desc: string
  active:boolean
  category:string
  time:string
}

export type Repo = {
  id:number
  name:string
  full_name:string
  description:string
  html_url:string
  stargazers_count:number
  watchers_count:number
}
