"use server";
import axios from "axios";
import config from "@/utils/config";
import { Repo } from "./types";
type ResponseRepo = Repo & { fork: boolean }
export async function getRepo() {
  const response = await axios.get<ResponseRepo[]>(
    `${config.githubURL}/users/${config.gitUsername}/repos`, {
      headers: {

        'Cache-Control': 'no-cache', // Bypass server cache

      }
  }
  );
  const result = response.data.filter(
    ({ id, name, full_name, description, html_url, fork, watchers_count, stargazers_count }: ResponseRepo) => !fork && ({
      id,
      name,
      full_name,
      description,
      html_url,
      watchers_count,
      stargazers_count
    }),
  );
  return result;
}

export async function getProject() {
  const response = await axios.get(`${config.portfolioBackend}/api/projects`, {
    headers: {
      'Cache-Control': 'no-cache', // Bypass server cache
    }
  })
  return response.data
}
