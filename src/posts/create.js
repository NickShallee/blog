import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
import {PostService} from 'services/post-service';

@inject (EventAggregator, Router, PostService)
export class Create {

	constructor(EventAggregator, Router, PostService) {
		this.post = {
			title: '',
			body: '',
			tags: []
		};
		this.eventAggregator = EventAggregator;
		this.postService = PostService;
		this.router = Router;
	}

	publish() {
		this.postService.publish(this.post);
		this.eventAggregator.publish('newpost', new Date());
		this.router.navigate('/');
	}

}