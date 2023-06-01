import { supabase } from "@/lib/supabase";

export const revalidate = 0;
export default async function Home() {
  let { data, error } = await supabase
    .from("organizations")
    .select()
    .like("title", "%P%");

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-4xl">
        Supabase Running Locally with React Server Components
      </h1>
      <div className="self-left">
        <p className="text-2xl text-blue-200">Organizations</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
