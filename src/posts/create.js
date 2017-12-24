import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {PostService} from 'services/post-service';

@inject (Router, PostService)
export class Create {

	constructor(Router, PostService) {
		this.post = {
			title: '',
			body: '',
			tags: []
		};
		this.postService = PostService;
		this.router = Router;
	}

	publish() {
		this.postService.publish(this.post);
		this.router.navigate('/');
	}

}