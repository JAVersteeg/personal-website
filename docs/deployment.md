# Deployment — Vimexx (DirectAdmin)

The site compiles to static HTML/CSS/JS via `pnpm build`. No Node.js server is required on the host.

## Build

```powershell
pnpm build
```

This generates the `out/` directory. Each route becomes a folder with an `index.html` (e.g. `out/about/index.html` → `/about`).

## Upload to Vimexx

The contents of `out/` go directly into `public_html` — not the `out/` folder itself. The `index.html` must sit directly in `public_html`.

**Option A — DirectAdmin File Manager**
1. Log in to the Vimexx DirectAdmin panel
2. Go to **Files → File Manager**
3. Navigate into `public_html`
4. Upload the contents of `out/`

**Option B — FTP/SFTP**

Use an FTP client such as FileZilla. Credentials are found in DirectAdmin under **Account Manager → FTP Management**. Connect and upload the contents of `out/` to `public_html`.

## `.htaccess`

A `.htaccess` file should be present in `public_html` to force HTTPS. Create it once manually if it isn't there:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Since every page is pre-rendered as its own `index.html`, no rewrite rules are needed for routing.

## Subsequent deploys

```powershell
pnpm build
```

Then re-upload the contents of `out/` to `public_html`, overwriting existing files. No server processes need to be restarted.
