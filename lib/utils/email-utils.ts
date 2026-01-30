const FREE_EMAIL_PROVIDERS = [
     "gmail.com",
     "hotmail.com",
     "outlook.com",
     "yahoo.com",
     "icloud.com",
     "live.com",
     "msn.com",
     "aol.com",
     "protonmail.com",
     "zoho.com",
     "mail.com",
     "gmx.com",
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
     return !FREE_EMAIL_PROVIDERS.includes(domain);
}
