export interface CatFact {
  _id:       string;
  status:    CatFactStatus;
  type:      string;
  deleted:   boolean;
  user:      string;
  text:      string;
  // createdAt: Date;
  createdAt: string;
  // updatedAt: Date;
  updatedAt: string;
  __v:       number;
}

export interface CatFactStatus {
  verified:  boolean | null;
  sentCount: number;
}
