import { cn } from "@/lib/utils";
import logo from "@/assets/rouge-logo.png";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  chips?: string[];
};

function renderLine(line: string, key: number) {
  const bullet = line.startsWith("• ");
  const content = bullet ? line.slice(2) : line;
  const parts = content.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <p
      key={key}
      className={cn(
        "text-[0.9375rem] leading-relaxed",
        bullet && "relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/50",
      )}
    >
      {parts.map((p, i) =>
        p.startsWith("**") ? (
          <strong key={i} className="font-semibold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </p>
  );
}

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  const lines = message.text.split("\n").filter((l) => l.trim().length > 0);

  return (
    <div className={cn("flex w-full animate-bubble-in gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <img
          src={logo}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          className="mt-1 h-8 w-8 shrink-0 rounded-xl bg-rouge-soft object-contain p-0.5"
        />
      )}
      <div
        className={cn(
          "max-w-[85%] space-y-1.5 rounded-2xl px-4 py-3 shadow-bubble sm:max-w-[75%]",
          isUser
            ? "rounded-br-md bg-bubble-user text-bubble-user-foreground"
            : "rounded-bl-md border border-border bg-card text-card-foreground",
        )}
      >
        {lines.map(renderLine)}
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex animate-bubble-in items-end gap-3">
      <img
        src={logo}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        className="h-8 w-8 shrink-0 rounded-xl bg-rouge-soft object-contain p-0.5"
      />
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-card px-4 py-4 shadow-bubble">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-primary/60"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: "1s" }}
          />
        ))}
      </div>
    </div>
  );
}
