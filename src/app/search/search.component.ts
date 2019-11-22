import { KbarticlesService } from './../services/appservices/kbarticles.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { KBArticles } from '../classes/kbarticles';
import { DdlCatogoryName } from '../classes/ddlcategory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() emit1 = new EventEmitter();
	@Output() emit2 = new EventEmitter();

	arr_search: KBArticles[] = [];
	id: number;
	arr: KBArticles[] = [];
	artcle: KBArticles[];
	article: KBArticles[];
	//event emitter
	arr1: DdlCatogoryName[];

	constructor(private _data: KbarticlesService, private actroute: ActivatedRoute) {}

	ngOnInit() {
		this._data.getCategory().subscribe(
			(data: DdlCatogoryName[]) => {
				this.arr1 = data;
				console.log(this.arr1);

			}
		);


	}

	selectedAnswer: number;
	updateCheckedOptions(id) {

		this.selectedAnswer = id;
		this.emit1.emit(id);


	}
	onSearchClick(searchTerm) {
		this.emit2.emit(searchTerm);
		console.log(searchTerm);
	}


}
