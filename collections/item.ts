import { v4 } from 'uuid';
import set from 'date-fns/set';
import { IEntity } from 'fireorm';

export class Item implements IEntity {
  id: string = v4();
  name: string;
  bells: number;
  islandId: string;
  expiresAt: Date;
  constructor(name: string, bells: number, islandId: string) {
    this.name = name;
    this.bells = bells;
    this.islandId = islandId;

    // items expire at 10pm 22 hundred, I have no idea when
    const time = set(new Date(), { hours: 22 });
    this.expiresAt = time;
  }
}
