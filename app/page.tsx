import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <Button>Default</Button>
      <Button size="sm">Default</Button>
      <Button size="lg">Default</Button>
      <Button size="icon">Default</Button>
      <Button variant="destructive">destructive / cancel</Button>
      <Button variant="ghost">ghost</Button>

      <form role="search">
        <SearchInput />
      </form>
    </main>
  );
}
