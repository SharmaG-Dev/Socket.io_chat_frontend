export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <span className="font-semibold text-white">
        Dev.<span className="text-yellow-400">Chat</span>
      </span>
    </div>
  );
}
