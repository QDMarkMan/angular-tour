import { Component, OnInit } from '@angular/core'; // 首先要导入核心库
import { Hero } from './../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/**
 * export 出去供别的页面使用
 */
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  // 选中英雄
  selectedHero: Hero

  // 禁用button
  disabled: Boolean
  /**
   * 点击事件
   * @param data 
   */
  onSelect(hero: Hero){
    this.selectedHero = hero
  }
  getHeroes (): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  deleteHeroes () {
    this.heroes.pop()
    this.heroes.length  === 0 ? this.disabled = true : this.disabled = false
  }
  constructor(private heroService: HeroService) {
    
  }

  ngOnInit() { // 生命周期函数 angualr创建完之后就会调用这个方法
    this.getHeroes()
  }

}
