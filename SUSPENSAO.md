# Suspensão / Reativação do site — Ana Ester Nutricionista (inadimplência)

Mecanismo para tirar a landing page do ar quando o pagamento atrasa e
devolvê-la quando regularizar — **sem deletar nada, sem mudar a arquitetura
do site**.

## Visão geral

O site é um projeto **estático** (Astro `output: static`) hospedado na Vercel.
A suspensão injeta um redirect no `vercel.json`, mandando todo o tráfego para
`/suspenso.html`. Isso é feito pelo script `suspender.mjs` na raiz.

Por que redirect e não middleware/env var: middleware do Astro exige `output:
server`/`hybrid`. O site é estático, então o redirect nativo da Vercel é o
caminho mais simples e 100% reversível. O redirect é HTTP 307 (temporário),
então **não fica cacheado** no navegador do visitante — ao reativar, volta na
hora.

## Comandos

Na raiz do repositório:

```bash
node suspender.mjs status   # mostra o estado do site (no ar / suspenso)
node suspender.mjs on        # SUSPENDE o site
node suspender.mjs off       # REATIVA o site
```

O script só altera o que precisa: preserva a configuração existente do
`vercel.json` (headers, build, etc.) e é idempotente (rodar duas vezes não
causa problema). O `off` devolve o `vercel.json` exatamente como estava antes.

## SUSPENDER (cliente passou dos 7 dias de vencimento)

```bash
node suspender.mjs on
git add -A
git commit -m "Suspende site Ana Ester (inadimplencia)"
git push
```

A Vercel rebuilda o projeto e em ~1 min o site cai na página de suspensão.

## REATIVAR (cliente pagou)

```bash
node suspender.mjs off
git add -A
git commit -m "Reativa site Ana Ester"
git push
```

O site volta ao ar.

---

## Arquivos envolvidos

- `suspender.mjs` (raiz) — liga/desliga a suspensão.
- `public/suspenso.html` — página "Site temporariamente indisponível", com a
  logo da marca. Vai para o `dist/` no build.
- `public/logo-suspenso.svg` — logo usada na página de suspensão (cópia da
  logomarca dourada horizontal).
- `vercel.json` — config do projeto; recebe/perde o bloco `redirects`.

## Como funciona por dentro

O `suspender.mjs` insere um bloco `redirects` logo após a `{` de abertura do
`vercel.json`, por manipulação **textual** (não re-serializa o arquivo, então
a formatação existente fica intacta). O `source` do redirect é uma regex que
exclui a própria página de suspensão e seus assets (`suspenso.html`,
`logo-suspenso.svg`, `favicon.svg`) para evitar loop de redirect. A remoção
(`off`) casa exatamente o mesmo texto literal que foi inserido.

O estado é detectado pelo JSON parseado (procura um redirect com
`destination: "/suspenso.html"`), então é robusto a variações de formatação.

## Replicar para outro cliente / projeto (site único)

1. Copie `public/suspenso.html` e `public/logo-suspenso.svg` para o novo
   projeto (troque a logo e o `alt`, ajuste as cores no `<style>`).
2. Copie `suspender.mjs` para a raiz do novo projeto (o script já opera sobre
   o `vercel.json` da própria raiz, não precisa editar nada).
3. Garanta que o projeto tem `vercel.json` na raiz (mesmo mínimo,
   `{ "$schema": "https://openapi.vercel.sh/vercel.json" }` serve) e que o
   *Root Directory* na Vercel aponta para a pasta do projeto.
