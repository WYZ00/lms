import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <p className="text-3xl font-medium text-sky-600">
        This is a protected Page
      </p>
    </div>
  );
}
