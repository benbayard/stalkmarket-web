import {
  Collection,
  SubCollection,
  ISubCollection,
  IEntity,
  Instantiable,
} from 'fireorm';
import { v4 } from 'uuid';
import { Item } from './item';

export enum NativeFruit {
  Peach = 'peach',
  Apple = 'apple',
  Cherry = 'cherry',
  Orange = 'orange',
  Pear = 'pear',
}

export enum Hemisphere {
  North = 'northern',
  Southern = 'southern',
}

@Collection()
export class Island {
  static Hemisphere = Hemisphere;
  static NativeFruit = NativeFruit;

  /* eslint-disable-next-line */
  id: string = v4();
  uid: string;
  name: string;
  nativeFruit: NativeFruit;
  hemisphere: Hemisphere;

  @SubCollection((Item as unknown) as Instantiable<IEntity>)
  items?: ISubCollection<Item>;

  constructor(
    name: string,
    uid: string,
    nativeFruit: NativeFruit,
    hemisphere: Hemisphere
  ) {
    this.name = name;
    this.uid = uid;
    this.nativeFruit = nativeFruit;
    this.hemisphere = hemisphere;
  }
}
