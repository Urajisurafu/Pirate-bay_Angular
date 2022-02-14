export interface ship {
  id: number;
  img: string;
  frigate: string;
  frigateClass: number;
  guns: number;
  frame: number;
  team: number;
  hold: number;
  speed: number;
  maneuverability: number;
}

export interface loginForm {
  login: string;
  password: string;
  isRemember: boolean;
}
