import { Player } from "./types";
import { players } from "./data/players";

export interface Plugin {
  name: string;
  description: string;
  players: Player[];
}

export const plugin: Plugin = {
  name: "Hockey Pista A1",
  description: "Database Hockey su pista A1 - giocatori da riempire in seguito",
  players
};
