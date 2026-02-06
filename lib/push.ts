export type PushSender = {
  send: (args: { subscription: unknown; title: string; body: string }) => Promise<void>;
};

export function getPushSender(): PushSender {
  // MVP stub: wiring (subscription storage + SW registration) exists,
  // but actual sending can be added with `web-push` later.
  return {
    async send({ subscription, title, body }) {
      console.log("[push:stub]", { subscription, title, body });
    },
  };
}
