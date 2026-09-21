# Doug’s Lab

Australia-only educational notebook for family, land and purpose structures.

**Product name:** Doug’s Lab  
**Subtitle:** Family, land & purpose structures — Australia only  
**Domain:** [earthacer.link](https://earthacer.link)  
**Cloudflare account:** Amarwakara@gmail.com  
**GitHub (Cloudflare source):** [AmarWak/dougs-lab](https://github.com/AmarWak/dougs-lab)

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

## Why AmarWak, not v2-prog

Cloudflare (`Amarwakara@gmail.com`) is already connected to the **AmarWak** GitHub account. It is **not** connected to `v2-prog`, which is why v2-prog repos do not appear in the Git dropdown.

`github.com/amarwakara` is not a GitHub user. Until that handle exists, ship from **AmarWak**.

## Load onto Cloudflare (Amarwakara)

Every push to `main` on the AmarWak repo will deploy automatically once Git is connected.

1. Open [dash.cloudflare.com](https://dash.cloudflare.com) as **Amarwakara@gmail.com**.
2. Go to **Workers & Pages** → **Create** → **Connect to Git**.
3. Under **Git account**, pick **AmarWak** with the GitHub mark (black octocat).  
   Do **not** pick GitLab AmarWak, and do **not** pick acerlab-Link.
4. Select repository **dougs-lab**, production branch **main**.
5. Build settings:
   - **Build command:** `npm run build:cloudflare`
   - **Root directory:** `/` (leave empty)
   - **Node version:** `22` (from `.node-version`)
   - Wrangler config is `wrangler.jsonc` (Worker name `dougs-lab-au`).
6. Save / Deploy. The first build publishes a `*.workers.dev` URL.
7. **Custom domains:** attach `earthacer.link` and `www.earthacer.link`.  
   Do **not** attach `earthacer.in` (parked at Hostinger).

If the repo is not in the list, it is still under `v2-prog`. Fork it to AmarWak:

1. Open https://github.com/v2-prog/dougs-lab
2. **Fork** → owner **AmarWak** → fork name `dougs-lab`
3. Return to Cloudflare and choose **AmarWak / dougs-lab**

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
