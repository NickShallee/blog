import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
import {PostService} from 'services/post-service';

@inject (EventAggregator, Router, PostService)
export class Edit {

	constructor(EventAggregator, Router, PostService) {
		this.eventAggregator = EventAggregator;
		this.router = Router;
		this.postService = PostService;
	}

	activate(params) {
		this.post = this.postService.findOne(params.id);
	}

	publish() {
		this.postService.update(this.post);
		this.eventAggregator.publish('newpost', new Date());
		this.router.navigate('/');
	}

}