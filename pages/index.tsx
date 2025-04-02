import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, ShieldCheck, Boxes, LayoutGrid, Warehouse, Phone } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/custom/Map"), { ssr: false });

export default function RiosTransportes() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-blue-900 text-white h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Rio's Transportes</h1>
          <p className="text-lg max-w-2xl mb-6">
            Há 15 anos oferecendo soluções em transporte e logística com eficiência, confiança e estrutura completa no Rio de Janeiro.
          </p>
          <Button className="text-lg px-6 py-3">Solicite um Orçamento</Button>
        </motion.div>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre a Rio's Transportes</h2>
        <p className="max-w-4xl mx-auto text-lg">
          Localizada em Duque de Caxias, a Rio's Transportes atua há 15 anos no segmento de transporte e logística, com foco em carga dedicada e operações de crossdocking. Nossa estrutura conta com dois depósitos totalizando 6.000m², equipe especializada e processos otimizados.
        </p>
      </section>

      {/* Serviços */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6">
            <Truck className="mx-auto mb-4 w-10 h-10 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Carga dedicada</h3>
            <CardContent>Transporte direto com agilidade e segurança.</CardContent>
          </Card>
          <Card className="text-center p-6">
            <LayoutGrid className="mx-auto mb-4 w-10 h-10 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Crossdocking</h3>
            <CardContent>Consolidação e redistribuição rápida de cargas.</CardContent>
          </Card>
          <Card className="text-center p-6">
            <ShieldCheck className="mx-auto mb-4 w-10 h-10 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Seguro & Informação</h3>
            <CardContent>Monitoramento completo e segurança nas entregas.</CardContent>
          </Card>
          <Card className="text-center p-6">
            <Boxes className="mx-auto mb-4 w-10 h-10 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Paletização & Filmagem</h3>
            <CardContent>Organização e proteção das cargas no embarque.</CardContent>
          </Card>
          <Card className="text-center p-6">
            <Warehouse className="mx-auto mb-4 w-10 h-10 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Estrutura de Armazenagem</h3>
            <CardContent>6.000m² em Duque de Caxias para atender grandes volumes.</CardContent>
          </Card>
        </div>
      </section>

      {/* Clientes & Mercados */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Clientes & Mercados Atendidos</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Temos conhecimento profundo das operações de grandes clientes como Suzano, Bracell, Copobras e Caramuru. Realizamos entregas regulares para Carrefour, Atacadão, Assaí e Dom.
        </p>
      </section>

      {/* Mapa */}
      <section className="w-full h-[400px]">
        <Map />
      </section>

      {/* Contato */}
      <section className="bg-blue-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-6">Fale com nossa equipe e solicite um orçamento personalizado.</p>
        <a
          href="https://wa.me/5521999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-white text-lg"
        >
          <Phone className="mr-2" /> WhatsApp Comercial
        </a>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-950 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Rio's Transportes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
