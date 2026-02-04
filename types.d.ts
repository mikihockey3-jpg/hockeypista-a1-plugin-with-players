export interface Player {
  id: string;
  name: string;
  team: string;
  position: "Portiere" | "Difensore" | "Attaccante";
  value?: number; // opzionale, puoi aggiungere in seguito
}

export interface Team {
  id: string;
  name: string;
}
