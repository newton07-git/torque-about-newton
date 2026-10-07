# Newton Baskaran — Design Portfolio

This is a portable copy of the updated portfolio. The same fonts, colours,
layout, animation, project pages, photographs, reports, and downloads are
included. Links work at the root of a domain or under a GitHub project path.
No paid theme, build service, database, or API key is required.

## Free hosting with GitHub Pages

1. Create a **public** repository in your GitHub account using the Free plan.
2. Upload all the files and folders from this extracted ZIP, including the
   `.github/workflows/pages.yml` file, to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and set the source to
   **GitHub Actions**.
4. Open **Actions** and run **Publish portfolio to GitHub Pages** if it has
   not already run. The successful deployment gives you the real website URL.

A project site uses `https://<your-username>.github.io/<repository-name>/`.
Those values are placeholders, not a published or reserved address. A user
site instead uses a repository named `<your-username>.github.io`.
The free address reflects your GitHub username. A public repository is
required for Pages on GitHub Free.

Official documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Free hosting without your account name in the URL

Cloudflare Pages provides a free `<project-name>.pages.dev` address.
Choose the Free plan. In **Workers & Pages**, create a Pages application,
choose **Direct Upload / Drag and drop**, upload this ZIP, and deploy.
Choose the project name you want; Cloudflare confirms the available name and
the actual live address. This site contains only static assets, whose requests
are free and unlimited on the Free plan. No custom domain purchase is needed.

Official documentation:
https://developers.cloudflare.com/pages/get-started/direct-upload/
https://developers.cloudflare.com/pages/functions/pricing/

## Updating the website

Edit the relevant HTML file and upload a new copy, or request another update
to the original portfolio. The files in `assets/` include the local video,
project photographs, resume, portfolio, and individual project summaries.
The Google font files are loaded from Google Fonts, with system-font fallbacks.
