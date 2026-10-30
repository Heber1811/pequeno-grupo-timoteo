# Pequeno Grupo Timóteo

Site estático, responsivo e acessível para divulgar os encontros do Pequeno Grupo Timóteo, no Parque dos Pirineus, em Anápolis. Projeto desenvolvido como apoio à Atividade Extensionista II da UNINTER.

> Por segurança e privacidade, o endereço residencial completo e o contato pessoal do responsável não são publicados. Eles devem ser compartilhados somente com participantes confirmados.

## Site publicado

https://pequeno-grupo-timoteo.jauntyjelly36.chatgpt.site

## Executar localmente

O carregamento do JSON exige um servidor HTTP:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Abrir o HTML diretamente com `file://` não carrega os eventos.

## Personalizar

- Conteúdo institucional e programação: `index.html`.
- Eventos: `data/events.json`.
- Aparência e responsividade: `style.css`.
- Interações e WhatsApp: `script.js`.
- Planejamento acadêmico: `documentacao-academica/`.

Cada evento deve conter `title`, `category`, `description`, `date`, `time` e `location`. Valide o JSON antes de publicar.

## Testar

1. Execute o servidor local.
2. Confira navegação, eventos e formulário em desktop e celular.
3. Percorra toda a página usando apenas Tab, Shift+Tab, Enter e setas.
4. Confirme foco visível, ampliação de 200%, contraste e redução de movimento.
5. Teste os links do WhatsApp sem enviar mensagens involuntariamente.
6. Rode `node --check script.js` e valide `data/events.json`.

## Publicar no Firebase Hosting

1. Crie ou selecione um projeto no Firebase com autorização da instituição.
2. Instale a Firebase CLI e autentique-se.
3. Na pasta do site, execute `firebase init hosting`.
4. Use `.` como diretório público e responda **não** à configuração de aplicação de página única.
5. Revise o conteúdo e execute `firebase deploy`.
6. Registre a URL publicada no relatório e no checklist de evidências.

Também é possível usar GitHub Pages, desde que a URL pública carregue o JSON corretamente.

## Privacidade

O site não possui banco de dados, autenticação, cookies analíticos ou coleta automática de dados. O formulário apenas prepara uma mensagem no WhatsApp. A pessoa revisa e escolhe o destinatário antes do envio. Não publique nomes, telefones, imagens ou respostas sem consentimento.

## Aplicação acadêmica

Antes da aplicação real:

- confirmar comunidade, responsável e necessidade;
- substituir todos os textos demonstrativos;
- obter autorização para publicação e registro;
- publicar código e site;
- testar com participantes reais;
- coletar apenas evidências verdadeiras e consentidas;
- preencher o template oficial da UNINTER e convertê-lo em PDF.

ODS sugerido: **ODS 11 - Cidades e Comunidades Sustentáveis**, condicionado à demonstração de que o site ampliou o acesso a informações e atividades comunitárias.
