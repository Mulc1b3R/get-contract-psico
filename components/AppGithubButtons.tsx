import dynamic from "next/dynamic";

const GitHubButton = dynamic<any>(
  () => import("react-github-btn").then((mod) => mod.default),
  { ssr: false }
);

export const AppGithubButtons: React.FC = () => {
  return (
    <div className="flex gap-4">
      <GitHubButton
        href="https://www.remixide.org"
        data-show-count="true"
        aria-label="remix ide"
      >
        Remix
      </GitHubButton>
      <GitHubButton
        href="https://github.com/psico-mojo/get-contract-psico"
        aria-label="Fork on GitHub"
      >
        Fork
      </GitHubButton>
      <GitHubButton
        href="https://github.com/psico-mojo/get-contract-psico"
        aria-label="Follow on GitHub"
      >
        Follow
      </GitHubButton>
    </div>
  );
};
