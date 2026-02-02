const FREE_EMAIL_PROVIDERS_PREFIXES = [
     "aol.",
     "icloud.",
     "protonmail.",
     "yandex.",
     "gmx.",
     "zoho."
];

const FREE_EMAIL_PROVIDERS_EXACT = [
     "mail.com",
     "wanadoo.fr",
     "orange.fr",
     "free.fr",
     "sfr.fr",
     "laposte.net",
     "skynet.be",
     "telenet.be",
     "proximus.be"
];

export function isProfessionalEmail(email: string): boolean {
     if (!email || !email.includes("@")) return false;
     const domain = email.split("@")[1].toLowerCase();

     // Check specific ISP domains
     if (FREE_EMAIL_PROVIDERS_EXACT.includes(domain)) {
          return false;
     }

     // Check for global providers with any TLD (e.g., outlook.fr, yahoo.co.uk)
     if (FREE_EMAIL_PROVIDERS_PREFIXES.some(prefix => domain.startsWith(prefix))) {
          return false;
     }

     return true;
}
