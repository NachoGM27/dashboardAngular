import { Component } from '@angular/core';
import { Title } from '../../../shared/title/title';
import { HeavyLoadersFast } from '../../../shared/heavy-loaders/heavy-loaders-fast';

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFast, Title],
  templateUrl: './defer-options.html'
})
export default class DeferOptions {

}
