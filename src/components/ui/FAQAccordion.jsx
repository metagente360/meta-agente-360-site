import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const defaultFaqs = [
  {
    q: 'O Meta Agente 360 é um chatbot?',
    a: 'Não. Ele pode criar agentes de atendimento, mas não se limita a isso. O Meta Agente 360 é uma plataforma para criar agentes inteligentes com contexto, objetivo, canais, dados e gestão.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Não. A plataforma foi pensada para criar agentes com ajuda da IA, usando instruções, documentos, processos, prompts ou descrição livre.',
  },
  {
    q: 'O que é um agente de IA?',
    a: 'É uma inteligência configurada para cumprir uma missão. Ele pode conversar, organizar dados, responder dúvidas, analisar informações, executar fluxos e apoiar decisões.',
  },
  {
    q: 'O que é um Meta Produtor?',
    a: 'É quem usa o Meta Agente 360 para criar agentes, implementar soluções e transformar conhecimento em produtos, serviços ou negócios.',
  },
  {
    q: 'Posso usar no WhatsApp?',
    a: 'Sim. Os agentes podem ser distribuídos por WhatsApp, WebApp, ChatApp, páginas públicas e QR Codes.',
  },
  {
    q: 'O que é um Board de Agentes?',
    a: 'É uma arquitetura em que vários agentes especializados trabalham conectados e coordenados por um agente gestor.',
  },
  {
    q: 'O Meta Agente serve para empresas?',
    a: 'Sim. Empresas podem usar agentes para atendimento, processos internos, gestão de informação, treinamento, relatórios, dashboards e automações.',
  },
  {
    q: 'Para onde vão os meus dados?',
    a: 'Todos os dados ficam em servidores brasileiros dentro da infraestrutura da Implanta, criptografados em trânsito e em repouso. Nunca compartilhamos dados com terceiros.',
  },
  {
    q: 'Minha empresa precisa de um time de TI para implementar?',
    a: 'Não. A plataforma foi projetada para especialistas de negócio, sem necessidade de programação. Você configura, publica e acompanha tudo pelo painel.',
  },
  {
    q: 'Como funciona o suporte após a contratação?',
    a: 'MetaProdutores e distribuidores têm acesso à comunidade, às lives com Eduardo e ao suporte via WhatsApp. Clientes empresa têm atendimento dedicado.',
  },
];

export default function FAQAccordion({ faqs = defaultFaqs, dark = false }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 ${
            dark
              ? 'border-white/8 bg-white/4 hover:border-white/15'
              : 'border-brand-grey bg-white/60 hover:border-brand-blue/20'
          }`}
        >
          <button
            className={`w-full flex items-center justify-between px-5 py-4 text-left gap-4 min-h-[56px] ${
              dark ? 'text-white' : 'text-navy'
            }`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold">{faq.q}</span>
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              dark ? 'bg-white/8' : 'bg-brand-grey'
            }`}>
              {open === i
                ? <Minus className="w-3 h-3" />
                : <Plus className="w-3 h-3" />}
            </div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className={`px-5 pb-4 text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-navy/65'}`}>
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}