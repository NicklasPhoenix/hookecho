export type EmailProvider = {
  send: (args: { to: string; subject: string; text: string }) => Promise<void>;
};

export function getEmailProvider(): EmailProvider {
  // MVP: console provider. Hook env vars later (Resend/Mailgun/etc.).
  return {
    async send({ to, subject, text }) {
      console.log("[email:console]", { to, subject, text });
    },
  };
}
