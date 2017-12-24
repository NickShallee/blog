import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {PostService} from 'services/post-service';

@inject (Router, PostService)
export class Edit {

	constructor(Router, PostService) {
		this.postService = PostService;
		this.router = Router;
	}

	activate(params) {
		this.post = this.postService.findOne(params.id);
	}

	publish() {
		this.postService.update(this.post);
		this.router.navigate('/');
	}

}