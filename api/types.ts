export interface Player {
  first_name: string;
  // height_feet: null;
  // height_inches: null;
  id: number;
  last_name: string;
  // position: string;
  team: {
    // abbreviation: string;
    // city: string;
    // conference: string;
    // division: string;
    full_name: string;
    id: number;
    // name: string;
  };
  // weight_pounds: null;
}

export interface Meta {
  current_page: number;
  next_page: number;
  per_page: number;
}
