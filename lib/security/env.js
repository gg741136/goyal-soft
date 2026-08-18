function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getServerEnv() {
  return {
    firebaseProjectId: requireEnv("FIREBASE_ADMIN_PROJECT_ID"),
    firebaseClientEmail: requireEnv("FIREBASE_ADMIN_CLIENT_EMAIL"),
    firebasePrivateKey: requireEnv("FIREBASE_ADMIN_PRIVATE_KEY"),
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
    telegramChatId: process.env.TELEGRAM_CHAT_ID || "",
  };
}