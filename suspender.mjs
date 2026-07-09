#!/usr/bin/env node
/**
 * Suspende ou reativa a landing page da Ana Ester Nutricionista.
 *
 * A suspensão injeta um bloco `redirects` no vercel.json, mandando todo o
 * tráfego para /suspenso.html. A reativação remove esse bloco, preservando o
 * restante da configuração (headers, cleanUrls, build, etc.).
 *
 * Uso:
 *   node suspender.mjs on      # tira o site do ar
 *   node suspender.mjs off     # devolve o site ao ar
 *   node suspender.mjs status  # mostra o estado atual
 *
 * Depois de rodar `on`/`off`, faça commit e push. A Vercel rebuilda o projeto
 * quando o vercel.json muda.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const FILE = join(ROOT, "vercel.json");

// Bloco de suspensão inserido logo após a "{" de abertura do vercel.json.
// Tudo cai em /suspenso.html, exceto a própria página e seus assets (evita
// loop). permanent:false => HTTP 307, não fica cacheado pelo navegador.
//
// É JSON puro (sem comentários, que a Vercel rejeitaria) e inserido/removido
// por manipulação TEXTUAL — não re-serializa o arquivo, então a formatação da
// config existente fica intacta. O bloco é uma string literal fixa: a remoção
// casa exatamente esse mesmo texto.
const BLOCO =
  '  "redirects": [\n' +
  '    {\n' +
  '      "source": "/((?!suspenso(.html)?/?|logo-suspenso.svg|favicon.svg).*)",\n' +
  '      "destination": "/suspenso.html",\n' +
  '      "permanent": false\n' +
  '    }\n' +
  '  ],\n';

function lerTexto(file) {
  return readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

// Detecta o estado pelo JSON parseado (robusto a variações de formatação).
function estaSuspenso(txt) {
  let cfg;
  try {
    cfg = JSON.parse(txt);
  } catch {
    return false;
  }
  return (cfg.redirects || []).some((r) => r && r.destination === "/suspenso.html");
}

function suspender(txt) {
  if (estaSuspenso(txt)) return txt;
  const abre = txt.indexOf("{");
  if (abre === -1) throw new Error("vercel.json sem objeto JSON valido");
  // Insere o BLOCO logo após o "\n" que segue a "{", virando a primeira
  // propriedade. Reusa a quebra de linha original como separador (sem linha
  // em branco extra). O restante do arquivo não é tocado, então reativar()
  // devolve exatamente o conteúdo de antes.
  const nl = txt.indexOf("\n", abre);
  const pos = nl === -1 ? abre + 1 : nl + 1;
  return txt.slice(0, pos) + BLOCO + txt.slice(pos);
}

function reativar(txt) {
  if (!estaSuspenso(txt)) return txt;
  // Remove o bloco literal exato que suspender() inseriu.
  return txt.replace(BLOCO, "");
}

const acao = (process.argv[2] || "").toLowerCase();

if (!["on", "off", "status"].includes(acao)) {
  console.error("Uso: node suspender.mjs <on|off|status>");
  process.exit(1);
}

if (!existsSync(FILE)) {
  console.error("vercel.json nao encontrado na raiz do projeto.");
  process.exit(1);
}

const txt = lerTexto(FILE);

if (acao === "status") {
  console.log(estaSuspenso(txt) ? "SUSPENSO (fora do ar)" : "no ar");
  process.exit(0);
}

const antes = estaSuspenso(txt);
const novo = acao === "on" ? suspender(txt) : reativar(txt);
const depois = estaSuspenso(novo);

if (antes === depois) {
  console.log(`=  ja estava ${depois ? "SUSPENSO" : "no ar"}, nada a fazer`);
  process.exit(0);
}

writeFileSync(FILE, novo);
console.log(`OK site ${depois ? "SUSPENSO" : "reativado"}`);
console.log("\nAgora faca commit e push para a Vercel aplicar:");
console.log(
  "  git add -A && git commit -m \"" +
    (acao === "on" ? "Suspende site Ana Ester (inadimplencia)" : "Reativa site Ana Ester") +
    "\" && git push"
);
