import { Head } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Jack - Chorduroy</title>
            </Head>
            <div class="p-4 mx-auto max-w-screen-md">
                <h1 class="text-2xl">Chorduroy</h1>
                <iframe
                    width="445"
                    height="791"
                    src="https://www.youtube.com/embed/OA1EKPFYZp0"
                    title="Chorduroy Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </>
    );
}
