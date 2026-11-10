# Orientações para agentes

## Projeto

MesaJá é uma aplicação estática de cardápio digital para pequenos restaurantes, desenvolvida com React, TypeScript, Vite e Tailwind CSS v4. Consulte `README.md` para o estado atual e `plano.md` para as fases planejadas; funcionalidades descritas no plano não devem ser presumidas como implementadas.

## Organização e convenções

- `src/app/` reúne rotas e provedores; `src/features/` organiza funcionalidades por domínio; componentes compartilhados ficam em `src/components/`.
- Dados de demonstração ficam em `src/data/`, utilitários em `src/lib/` e tokens visuais em `src/styles/globals.css`.
- Use o alias `@/` para importações a partir de `src`, seguindo os padrões existentes. Reutilize os componentes de interface e os tokens antes de criar alternativas.
- Preserve a identidade visual existente, a responsividade, a navegação por teclado e o respeito a movimento reduzido nas alterações de interface.
- Mantenha textos de interface e documentação em português brasileiro.

## Restrições da aplicação

- Preserve o `HashRouter` e o `base: './'` do Vite, necessários à publicação em subdiretório no GitHub Pages.
- O projeto não possui backend. Dados persistidos no navegador não são compartilhados entre dispositivos; não apresente recursos locais como sincronização real ou confirmação automática de pagamento.
- Valores em `src/data/brand.ts` são dados de demonstração: não os trate como dados reais do estabelecimento.
- Não inclua credenciais ou informações sensíveis no repositório.

## Desenvolvimento e validação

- Use Node 22, conforme `.nvmrc` e os workflows. Instale dependências com `npm ci` quando necessário.
- Execute `npm run dev` para desenvolvimento e `npm run preview` para inspecionar o build.
- Antes de concluir alterações, execute as verificações pertinentes: `npm run lint`, `npm run format:check` e `npm run build`. A CI executa as três.
- Não há script de testes automatizados configurado em `package.json`; para mudanças de comportamento ou interface, complemente as verificações com testes apropriados e informe o que foi efetivamente validado.
- `npm run format` altera arquivos; evite formatar arquivos não relacionados à tarefa.
- Preserve alterações preexistentes e revise o diff. Não faça commit, push ou deploy sem autorização explícita.
