export class Algorithm {
  constructor (obj) {
    Object.assign(this, obj);
  }

  public id: number;
  public abbreviation: string;
  public title: string;
  public categories: Array<string>;
  public authors: Array<{name: string, id: number, delete: boolean}>;
  public units: Array<string>;
  public tags: Array<{tag: string, id: number, delete: boolean}>;
  public features: string;
  public links: Array<{link: string, description: string, id: number, delete: boolean}>;
  public parameters: Array<{label: string, description: string, id: number, delete: boolean, variable: string}>;
  public datasets: Array<{name: string, link: string, free: number, open: number, resource?: string, source?: Array<string>, publish_in?: string, id: number, delete: boolean}>;
  public input_type: string;
  public output_type: string;
  public remote_secret: string;
  public email: string;
  public belong_to: string;
  public description: string;
  public executable: string;
  public created_at: string;
}
