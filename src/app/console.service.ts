import { debug } from 'util';

export class ConsoleService {
  log(str: string) {
   if (debug) {
    console.log(str);
   }
  }
}
