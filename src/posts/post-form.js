import {bindable, inject} from 'aurelia-framework';
import {PostService} from 'services/post-service';

@inject (PostService)
export class PostForm {
	@bindable post = {};
	@bindable publish;

	constructor(PostService) {
		this.postService = PostService;
		this.newTag = '';
	}

	bind() {
		this.allTags = this.postService.allTags();
	}

	addTag() {
		this.allTags.push(this.newTag);
		this.post.tags.push(this.newTag);
		this.newTag = '';
	}

}