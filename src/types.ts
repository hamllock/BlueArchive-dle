export type Students = Student[]
export interface Student {
  Id: number;
  Name: string;
  FamilyName: string;
  School: string;
  Club: string;
  SquadType: string;
  TacticRole: string;
  BulletType: string;
  ArmorType: string;
}

export interface Localization {
  SquadType: SquadType
  BulletType: BulletType
  ArmorTypeLong: ArmorTypeLong
  TacticRole: TacticRole
  SchoolLong: SchoolLong
  Club: Club
}

export interface SquadType {
  [key: string]: string;
  Main: string
  Support: string
}

export interface BulletType {
  [key: string]: string;
  Explosion: string
  Pierce: string
  Mystic: string
  Normal: string
  Sonic: string
  Mixed: string
}

export interface ArmorTypeLong {
  [key: string]: string;
  LightArmor: string
  HeavyArmor: string
  Unarmed: string
  Structure: string
  ElasticArmor: string
  Normal: string
  Mixed: string
}

export interface TacticRole {
  [key: string]: string;
  DamageDealer: string
  Tanker: string
  Healer: string
  Supporter: string
  Vehicle: string
}

export interface SchoolLong {
  [key: string]: string;
  Abydos: string
  Arius: string
  Gehenna: string
  Hyakkiyako: string
  Millennium: string
  RedWinter: string
  Shanhaijing: string
  SRT: string
  Trinity: string
  Valkyrie: string
  ETC: string
  Tokiwadai: string
  Sakugawa: string
}

export interface Club {
  [key: string]: string;
  Kohshinjo68: string
  Justice: string
  CleanNClearing: string
  BookClub: string
  Countermeasure: string
  Engineer: string
  FoodService: string
  Fuuki: string
  GourmetClub: string
  HoukagoDessert: string
  KnightsHospitaller: string
  MatsuriOffice: string
  Meihuayuan: string
  Onmyobu: string
  RemedialClass: string
  SPTF: string
  Shugyobu: string
  Endanbou: string
  TheSeminar: string
  TrainingClub: string
  TrinityVigilance: string
  Veritas: string
  NinpoKenkyubu: string
  GameDev: string
  RedwinterSecretary: string
  anzenkyoku: string
  SisterHood: string
  Class227: string
  Emergentology: string
  RabbitPlatoon: string
  PandemoniumSociety: string
  AriusSqud: string
  HotSpringsDepartment: string
  TeaParty: string
  PublicPeaceBureau: string
  BlackTortoisePromenade: string
  Genryumon: string
  LaborParty: string
  KnowledgeLiberationFront: string
  Hyakkayouran: string
  ShinySparkleSociety: string
  EmptyClub: string
}