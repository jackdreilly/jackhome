import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-2xl">Jack Reilly</h1>
        <ul>
          <li><a href="/chorduroy">Chorduroy</a></li>
        </ul>
      </div>
    </>
  );
}
