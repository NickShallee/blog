import {bindable, inject} from 'aurelia-framework';
import {PostService} from 'services/post-service';

@inject (PostService)
export class PostForm {
	@bindable post = {};
	@bindable publish;

	constructor(PostService) {
		this.postService = PostService;
	}

	bind() {
		this.allTags = this.postService.allTags();
	}

}