import { KbarticlesService } from './../services/appservices/kbarticles.service';
import { Component, OnInit } from '@angular/core';
import { KBArticles } from '../classes/kbarticles';
import { Pagerinfo } from '../classes/pagerinfo';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  length: number

 norecordfound:boolean=false;
  Article_Header: string;
	show = false;
	arr: KBArticles[] = [];
	artcle: KBArticles[];
	article: KBArticles[];
	show_add_article: boolean = false;
	all_articles: any;
	page: Pagerinfo;
	Page: number = 1;
	Categoryid: number = 0;
	pageVariable: boolean = false;
	totalItem: number;
	totalPages: number;
	// spinner=false;
    totalItems: number;
    currentPage:number;
    queryParamsObject: any = {};
    private _subscriptions = new Subscription();
	constructor(private router: Router, private act: ActivatedRoute, private _data: KbarticlesService)  {
    // this.router.routerState.root.queryParams.subscribe((params: Params) => {

    //     this.queryParamsObject = params;
    //     this.Page = this.queryParamsObject.pagenumber;
    //     this.loadPage(this.queryParamsObject.pagenumber);
    // });

    // this._subscriptions.add(this.router.routerState.root.queryParams.subscribe((params: Params) => {
    //     this.queryparams = params['ArticleId'];
    //   }
    this._subscriptions.add(this.router.routerState.root.queryParams.subscribe((params: Params) => {
        this.queryParamsObject = params;
            this.Page = this.queryParamsObject.pagenumber;
            this.loadPage(this.queryParamsObject.pagenumber);
      }));
for (let i = 1; i <= this.all_articles; i++) {
  let Obj: [];
  this.all_articles.push(Obj);
}

}

  ngOnInit() {
    this.getArticles();
    this.getPageInfo();
    this.onLoad(1);

  }
	getArticles() {
		//  this.spinner=false;
		this._data.getAllKbArticle().subscribe(

			(data: KBArticles[]) => {
				this.pageVariable = true;
				// this.spinner=true;
				this.arr = data;
        this.norecordfound=true;
				//    this.page=data['pagerInfo'];

				this.page = data['pagerInfo'];
				this.totalItem = this.page.totalItems;
				this.totalPages = this.page.totalPages;
				this.totalItems = this.page.itemsPerPage;

				// this.artcle = _.toArray(this.arr);
				this.all_articles = this.arr['kbArticles'];

				// this.article = this.artcle;


			},
			function (error) {
                  console.log("erroe");



			},
			function () {}
        );
        var req = {
            pagenumber : this.queryParamsObject.pagenumber,
        };
        this.router.navigate(['/user-profile'], { queryParams: req });
	}
      onReadMore(item) {
        this.router.navigate(['/readmore'], {
          queryParams: {
            ArticleId: item.articleId
          }
        });
      }
      onEditArticle(item) {
        this.router.navigate(['/edit'], {
          queryParams: {
            ArticleId: item.articleId
          }
        });
      }


      onFilterCheck(value) {
        //   this.spinner=false;
        this.Categoryid = value;
        if (value != '') {
          this._data.getCategoriesById(value).subscribe(
            (data: KBArticles[]) => {
              console.log(data);
                        this.arr = data;
                        window.scroll(0, 0);
              //   this.spinner=true;
              this.page = data['pagerInfo'];
              this.totalItem = this.page.totalItems;
              this.totalPages = this.page.totalPages;
              this.totalItems = this.page.itemsPerPage;
                        this.all_articles = this.arr['kbArticles'];
                      //  this.onLoad(1);

            });
        } else {
          this._data.getAllKbArticle().subscribe(

            (data: KBArticles[]) => {
              this.arr = data;
              console.log(this.arr);
              // var arr = _.values(arr);
              this.all_articles = this.arr['kbArticles'];


              this.article = this.artcle;

            },
            function (error) {
              alert(error);
            },
            function () {}
          );
        }
      }

      // search
      onSearchClick(value) {

        // this.spinner=false;
        if (value != "") {
          this._data.getArticleBySearch(value).subscribe(
            (data: KBArticles[]) => {
              //   this.spinner=true;
                        window.scroll(0, 0);
                        this.arr = data;
                        this.page = data['pagerInfo'];
                this.totalItem = this.page.totalItems;
                 this.totalPages = this.page.totalPages;
                        this.all_articles = this.arr['kbArticles'];

                    });

        } else {
          this._data.getAllKbArticle().subscribe(

            (data: KBArticles[]) => {
              this.arr = data;
                        window.scroll(0, 0);
              // var arr = _.values(arr);
              this.all_articles = this.arr['kbArticles'];

              this.article = this.artcle;

            });
        }
      }


      getAdminArticles() {
        this.Article_Header = "/MY Articles";
        this._data.getAdminArticles(this.Page).subscribe (
          (data: KBArticles[]) => {

            this.arr = data;
            this.page = data['pagerInfo'];
            this.totalItem = this.page.totalItems;
            this.totalPages = this.page.totalPages;
                    this.totalItems = this.page.itemsPerPage * this.Page;
                    this.currentPage=this.page.currentPage;
    console.log(this.currentPage+"pagenum");
                    this.all_articles = this.arr['kbArticles'];


          }
        );
      }
      loadPage(number: number) {
        // number = this.Page;
        console.log(number);
        if (number != 0) {
          this._data.getPageByNumber(number, this.Categoryid).subscribe(
            (data: KBArticles[]) => {
                        this.arr = data;
                        window.scroll(0, 0);
              this.all_articles = this.arr['kbArticles'];
                    });
                    var req = {
                         pagenumber : number
                     };
                    this.router.navigate(['/user-profile'], { queryParams: req });
            }


        }
        onLoad(number:number){
            console.log("pageLoad");

            var req = {
                pagenumber : number
            };
            this.router.navigate(['/user-profile'], { queryParams: req });
        }


          getPageInfo() {
            this._data.getAllKbArticle().subscribe(

              (data: KBArticles[]) => {
                this.arr = data;

                this.page = data['pagerInfo'];
                this.totalItem = this.page.totalItems;
                this.totalPages = this.page.totalPages;
                // this.totalPages=this.totalPages-4;



                // this.artcle = _.toArray(this.arr);
                this.all_articles = this.arr['kbArticles'];

                this.article = this.artcle;


              },
              function (error) {

              },
              function () {}
            );

          }
          ngOnDestroy(){
            this._subscriptions.unsubscribe();
          }
}
