# Progresso, Erros, Testes e Resultados

- Início da estruturação do projeto de Task Manager com base no `referencia.md`.
- Aguardando a conclusão da Fase 1 (Visão).
- **[Resolvido]** Bug do gráfico redondo (0% Concluídas / Feitas (0) / A Fazer (0)): Resolvido o erro de igualdade em Strings do backend que incluia espaços invisíveis ou emojis (ex: '✅ Concluída'). O status vindo do BD agora é extraído e normalizado no React (`mappedTasks`).
- **[Resolvido]** Bug da tela escura ao trocar de tema: No arquivo `index.css`, a transição do tema escuro alterava a opacidade da imagem base de fundo para `0` (revelando puramente o bloco preto sem texturas). Alterado para `opacity: 0.15` com `filter: saturate` para revelar o Mesh Gradient discretamente sem saturar a visão à noite.
