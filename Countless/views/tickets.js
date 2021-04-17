import { bar } from "../components/bar.js";
import { months } from "../components/monthBar.js";
import { monthTable } from "../components/monthTable.js";
import { settings } from "../config/settings.js";
import { lastday } from "../core/monthCalc.js";
import { create } from "../lib/component.js";
import { getMonthTicketsService } from "../services/ticketService.js";

/**
 * Show the tickets view
 * @param {array} params
 */
export const ticketView = (params) => {
  const web_tittle = "Countless - Tickets";
  window.title = web_tittle;
  document.title = web_tittle;

  const view = create({
    type: "view",
    classes: ["main", "no_copy", "box-column"],
    styles: {
      height: "100vh",
      width: "100vw",
    },
  });

  const titleBar = bar();

  const show = create({
    type: "box",
    id: "show",
    classes: ["box-column"],
    styles: {
      margin: "20px",
      height: "92vh",
    },
  });

  const year_dropdown = create({
    type: "select",
    id: "selectYear",
    styles: {
      display: "block",
      width: "100px",
      border: "none",
      background: "transparent",
    },
    events: {
      change: (e) => {
        const select = e.target;
        const option = select.options[select.selectedIndex];
        const monthTab = document.querySelector(".monthTab.selected");
        showTickets(+option.value, +monthTab.dataset.month);
      },
    },
  });

  for (let i = new Date().getFullYear(); i >= 2015; i--) {
    create({
      type: "option",
      text: i,
    }).appendTo(year_dropdown.element);
  }

  const months_title = create({
    type: "h2",
    text: "Meses contables:",
    styles: {
      "border-left" : "4px solid var(--success_color)",
      "font-family": "Roboto thin",
      'padding-left' : "10px"
    },
  });

  const months_bar = months();

  titleBar.appendTo(view.element);
  show.appendTo(view.element);

  months_title.appendTo(show.element);
  year_dropdown.appendTo(show.element);
  months_bar.appendTo(show.element);
  view.appendTo(document.body);

  prepareEvents();
  document.querySelectorAll(".monthTab")[new Date().getMonth()].click();
};

const prepareEvents = () => {
  const months = document.querySelectorAll(".monthTab");

  months.forEach((tab) => {
    tab.onclick = () => {
      months.forEach((m) => {
        if (m == tab) m.classList.add("selected");
        else {
          m.className = "";
          m.classList.add("tab");
          m.classList.add("monthTab");
          m.classList.add("box-center");
          m.classList.add("center_text");
        }
      });

      const select = document.querySelector("#selectYear");
      const option = select.options[select.selectedIndex];
      showTickets(+option.value, +tab.dataset.month);
    };
  });
};

/**
 * Show tickets of a month
 * @param {*} y - The year
 * @param {*} m - The month
 */
const showTickets = (y, m) => {
  getMonthTicketsService(
    (json) => {
      let draft = {};
      if (json.success) draft = json.json;
      else draft = generateDraft(y, m);

      drawDraft(draft, draft.year, draft.month);
    },
    y,
    m + 1
  ); 
};

const drawDraft = (draft, y, m) => {
  const total = create({
    type: "h3",
    text: "Total : " + 0.0 + "€",
    id: "total",
    styles: {
      color: "#c5c5c5",
      "font-family": "Roboto thin",
      "margin-left": "20px",
      opacity: "0",
      transition: "1.2s",
    },
  });

  const month_table = monthTable(draft);
  const show = document.querySelector("#show");

  const old_total = show.querySelector("#total");
  const old_table = show.querySelector("#monthTable");

  if (old_total != null) old_total.style.opacity = "0";
  if (old_table != null) old_table.style.opacity = "0";

  setTimeout(() => {
    if (old_total != null) show.removeChild(old_total);
    if (old_table != null) show.removeChild(old_table);
  }, 100);

  total.appendTo(show);
  month_table.appendTo(show);

  setTimeout(() => {
    total.element.style.opacity = 1;
    month_table.element.style.opacity = 1;
  }, 300);
};

/**
 * Generate empty month draft
 * @param {*} y - The year
 * @param {*} m - The month
 * @returns The month's draft
 */
const generateDraft = (y, m) => {
  const draft = {
    month: m,
    year: y,
    company: settings().COMPANY,
    lastID: 0,
    info: {},
    total: 0,
  };

  const last = lastday(y, m);
  for (let i = 0; i <= last; i++) {
    draft.info[i] = {};
    draft.info[i].id = "";
    draft.info[i].number = 0;
    draft.info[i].price = 0;
  }

  return draft;
};
