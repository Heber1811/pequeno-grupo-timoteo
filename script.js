const eventList = document.querySelector("#event-list");
const eventStatus = document.querySelector("#event-status");

function createEventCard(event) {
  const card = document.createElement("article"); card.className = "card event-card";
  const tag = document.createElement("p"); tag.className = "tag"; tag.textContent = event.category;
  const title = document.createElement("h3"); title.textContent = event.title;
  const description = document.createElement("p"); description.textContent = event.description;
  const meta = document.createElement("div"); meta.className = "event-meta"; meta.setAttribute("aria-label", "Informações do evento");
  [["Data", event.date], ["Horário", event.time], ["Local", event.location]].forEach(([label, value]) => { const line = document.createElement("span"); const strong = document.createElement("strong"); strong.textContent = `${label}: `; line.append(strong, document.createTextNode(value)); meta.append(line); });
  const share = document.createElement("a"); share.className = "btn primary"; share.target = "_blank"; share.rel = "noopener noreferrer"; share.textContent = "Compartilhar pelo WhatsApp";
  share.href = `https://wa.me/?text=${encodeURIComponent(`Olá! Tenho interesse no evento ${event.title}. Data: ${event.date}, às ${event.time}. Local: ${event.location}.`)}`; share.setAttribute("aria-label", `Compartilhar ${event.title} pelo WhatsApp`);
  card.append(tag, title, description, meta, share); return card;
}

async function loadEvents() {
  try {
    const response = await fetch("data/events.json"); if (!response.ok) throw new Error(`Falha HTTP ${response.status}`);
    const events = await response.json(); if (!Array.isArray(events)) throw new Error("Formato de dados inválido");
    eventList.replaceChildren();
    if (!events.length) { eventStatus.textContent = "Nenhum evento foi cadastrado no momento."; return; }
    const fragment = document.createDocumentFragment(); events.forEach((event) => fragment.append(createEventCard(event))); eventList.append(fragment); eventStatus.textContent = "";
  } catch (error) { console.error("Não foi possível carregar os eventos:", error); eventStatus.textContent = "Não foi possível carregar os eventos. Atualize a página ou tente novamente mais tarde."; }
}

const feedbackForm = document.querySelector("#feedback-form");
const feedbackError = document.querySelector("#feedback-error");
const feedbackStatus = document.querySelector("#feedback-status");
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault(); feedbackError.textContent = "";
  if (!feedbackForm.checkValidity()) { feedbackError.textContent = "Preencha as três perguntas obrigatórias antes de continuar."; feedbackForm.querySelector(":invalid")?.focus(); return; }
  const data = new FormData(feedbackForm); const comment = String(data.get("comentario") || "").trim();
  const message = ["Avaliação do projeto Conecta Igreja", `Foi fácil navegar? ${data.get("facilidade")}`, `As informações estavam claras? ${data.get("clareza")}`, `O site foi útil? ${data.get("utilidade")}`, `Sugestão: ${comment || "Sem sugestão"}`].join("\n");
  feedbackStatus.textContent = "O WhatsApp será aberto. Revise a mensagem, escolha o destinatário e confirme o envio."; window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
loadEvents();
