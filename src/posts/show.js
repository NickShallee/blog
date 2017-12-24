import {inject} from 'aurelia-framework';
import {PostService} from 'services/post-service';

@inject(PostService)
export class Show {
	
	constructor(PostService) {
		this.post = null;
		this.postService = PostService;
	}

	activate(params) {
		// Load correct post
		this.post = this.postService.findOne(params.id);
	}

}