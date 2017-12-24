import {inject} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {PostService} from './services/post-service';

@inject (EventAggregator, PostService)
export class App {

  constructor(EventAggregator, PostService) {
    this.eventAggregator = EventAggregator;
  	this.postService = PostService;
  }

  bind() {
    this.refreshSidebar();
  }

  attached() {
    this.subscriber = this.eventAggregator.subscribe('newpost', response => {
      this.refreshSidebar();
    });
  }

  detached() {
    this.subscriber.dispose();
  }

  refreshSidebar() {
    this.allTags = this.postService.allTags();
    this.allArchives = this.postService.allArchives();
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'home', moduleId: 'index', title: 'Home' },
      { route: 'posts/:id', name: 'posts-show', moduleId: 'posts/show', title: 'View Post' },
      { route: 'posts/edit/:id', name: 'posts-edit', moduleId: 'posts/edit', title: 'Edit Post' },
      { route: 'posts/create', name: 'posts-create', moduleId: 'posts/create', title: 'Create Post' }
    ]);
  
  }


}
