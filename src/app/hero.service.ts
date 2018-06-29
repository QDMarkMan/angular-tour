import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './../mock/mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ // 装饰器 主要是把这个类标识魏为依赖注入系统得参与者之一  @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('add heroes done')
    return of(HEROES)
  }
  /**
   * 查询hero
   * @param id 
   */
  getHeroe(id: number): Observable<Hero> {
    this.messageService.add('find heroes done')
    return of(HEROES.find(hero => hero.id === id))
  }
  constructor(private messageService: MessageService) { // 注入私有属性

  }
}
