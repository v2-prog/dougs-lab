# Doug’s Lab

Australia-only educational notebook for family, land and purpose structures.

**Product name:** Doug’s Lab  
**Subtitle:** Family, land & purpose structures — Australia only  
**Domain:** [earthacer.link](https://earthacer.link)  
**Cloudflare account:** Amarwakara@gmail.com

General information only. Confirm with a registered tax agent and solicitor. Rules include 2026–28 announced reforms that may change.

A charity or community land trust with an asset lock cannot be a substitute for a family discretionary trust.

This is a decision and explainer tool — not a store, blog, booking site, or US nature-credits company. No accounts. No lead-capture. No invented duty tables or dollar savings.

Australia only. No LLCs, S-corps, FEIE, 1031, Augusta rule, or Delaware vehicles.

## Rooms

1. Home  
2. Household profile (answers stay in the browser)  
3. Succession planner  
4. Structure explorer — 19 Australian structures, each with succession & continuity  
5. Scenario workshop  
6. CLT / charity / co-op studio  
7. Economic regenerative village  
8. Compare  
9. Action checklist  
10. Glossary & timeline  

## 1. Put the repo on AmarWak (required for Cloudflare)

Cloudflare is signed in as **Amarwakara@gmail.com** and already connected to **AmarWak** GitHub. It is **not** connected to `v2-prog`, so v2-prog repos never appear in that Git dropdown.

`github.com/amarwakara` is not a GitHub user. Use **AmarWak**.

While signed into GitHub as **AmarWak**:

1. Open **https://github.com/v2-prog/dougs-lab/fork**
2. Owner: **AmarWak**. Repository name: **dougs-lab**
3. Create fork

You should then have **https://github.com/AmarWak/dougs-lab**

## 2. Attach AmarWak/dougs-lab in Cloudflare

Every push to `main` on the AmarWak repo deploys automatically after this is connected.

1. Open [dash.cloudflare.com](https://dash.cloudflare.com) as **Amarwakara@gmail.com**.
2. **Workers & Pages** → **Create** → **Connect to Git**.
3. **Git account:** pick **AmarWak** with the GitHub mark (black octocat).  
   Do **not** pick GitLab AmarWak. Do **not** pick acerlab-Link.
4. Repository: **dougs-lab**. Production branch: **main**.
5. Build settings:
   - **Build command:** `npm run build:cloudflare`
   - **Root directory:** leave empty
   - **Node version:** `22` (file `.node-version` is already in the repo)
   - Wrangler file: `wrangler.jsonc` (Worker name `dougs-lab-au`)
6. Deploy. First build publishes a `*.workers.dev` URL.
7. **Custom domains:** attach `earthacer.link` and `www.earthacer.link`.  
   Do **not** attach `earthacer.in` (parked at Hostinger).

If `dougs-lab` is missing from the list, the fork in step 1 is not under AmarWak yet.

## Local

```bash
npm install
npm run dev
```

Cloudflare-shaped production build:

```bash
npm run build:cloudflare
```

## Sister notebook

Structure Lab AU (AcerLab) lives at [acerlab.link](https://acerlab.link) — repo [v2-prog/structure-lab](https://github.com/v2-prog/structure-lab).
