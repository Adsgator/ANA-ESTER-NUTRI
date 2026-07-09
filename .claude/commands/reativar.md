---
description: Devolve o site da Ana Ester ao ar (cliente pagou) e sobe para a Vercel
---

Reative o site da Ana Ester Nutricionista. Execute os passos abaixo em ordem,
sem pedir confirmação (o usuário já autorizou ao rodar este comando):

1. Rode `node suspender.mjs status`. Se já estiver **no ar**, apenas avise isso
   e **pare** — não faça commit nem push.
2. Rode `node suspender.mjs off`.
3. Rode `git add -A && git commit -m "Reativa site Ana Ester"`.
4. Rode `git push`.
5. Confirme com `node suspender.mjs status` e avise o usuário que a Vercel vai
   rebuildar e o site volta ao ar em ~1 minuto.

Se qualquer passo falhar (ex.: push rejeitado, sem rede), pare e mostre o erro
ao usuário em vez de tentar contornar.
