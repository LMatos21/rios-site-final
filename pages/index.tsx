import dynamic from "next/dynamic";
import Head from "next/head";

const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function RiosTransportes() {
  return (
    <>
      <Head>
        <title>Rio's Transportes</title>
      </Head>
      <div className="bg-white text-gray-900">
        <section className="bg-gray-900 text-white h-[50vh] flex items-center justify-center">
          <MotionDiv
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Rio's Transportes</h1>
            <p className="text-lg mb-6">Há 15 anos conectando empresas com eficiência e confiança</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              Solicite um Orçamento
            </button>
          </MotionDiv>
        </section>
      </div>
    </>
  );
}
