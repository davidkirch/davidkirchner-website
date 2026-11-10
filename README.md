# davidkirchner-website

Personal website and CV, built with TanStack Start and React. The text lives in `src/content.ts`.

## Local development

```sh
bun install
bun run dev      # http://localhost:3000
bun run check    # biome + tsc
```

## Deployment

The site runs as a Docker container on the SSH host `davidkirchner-website` (Debian, user `root`).
The repository is cloned to `~/davidkirchner-website`, and the container listens on port 3000 with `--restart unless-stopped`.

### Redeploy after changes

Push your changes to `main` first, then run:

```sh
ssh davidkirchner-website
cd ~/davidkirchner-website
git pull
docker build -t davidkirchner-website .
docker rm -f website 2>/dev/null
docker run -d --name website -p 3000:3000 --restart unless-stopped davidkirchner-website
```

The first time you run this, also stop the old unnamed container, or port 3000 will already be in use:

```sh
docker ps                                  # find the container running davidkirchner-website
docker rm -f <container-name>
```

### Check it worked

```sh
docker ps                                  # "website" shows as Up
curl -I http://localhost:3000              # HTTP 200
docker logs website                        # if it isn't running
docker image prune -f                      # optional: clean up old images
```
