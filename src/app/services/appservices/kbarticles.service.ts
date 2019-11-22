import { AppConstant } from './../../app.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonHttpService } from './../../shared/common-http.service';
import { Router } from '@angular/router';
// import { AppConstant } from 'src/app/app.constant';
@Injectable({
  providedIn: 'root'
})
export class KbarticlesService {
  // appSettings: any = appSettings;
  api_url: string;
  appendpoint: string;
  ReadMore_URL: string;
  cpDefaultUrl: string;
  cpDefaultUpdateUrl: string;
  Edit_Fetch_URL: string;
  CAT_URL: string;
  INSERT_URL: string;
  Search_article: string;
  GetAllArticles: string;
  GETCATEGORIESBYID:string;
  GETADMINARTICLES:string;
  PAGINATION:string;
  Concat:string;
  constructor(
    private http: HttpClient, public router: Router,
    private CommonHttpService: CommonHttpService
)
{
    // this.api_url = AppConstant.API_ENDPOINT;
    // this.appendpoint = this.api_url;






    // this.GetAllArticles = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETALLARTICLE;

    this.api_url = AppConstant.API_ENDPOINT;
        this.appendpoint = this.api_url;
        this.ReadMore_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.READMORE;
        this.Edit_Fetch_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.FETCHARTICLEBYID;

        this.CAT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETCATEGORIES;
        this.INSERT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.INSERTARTICLE;
        this.Search_article = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.SEARCHARTICLE;
        this.GetAllArticles = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETALLARTICLE;
        this.GETADMINARTICLES=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETADMINARTICLES;
        this.GETCATEGORIESBYID=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETARTICLEBYID;
        this.PAGINATION=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.PAGINATION;
}
public getAllKbArticle() {
  return this.http.get(this.GetAllArticles);
}

public getCategory() {
  console.log();
  return this.http.get(this.CAT_URL);
}

public getArticleBySearch(value) {
  return this.http.get(this.Search_article + value);
}

public getCategoriesById(value)
{
  return this.http.get(this.GETCATEGORIESBYID + value);
}


public addArticle(data: any): Promise<any> {
  return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
      .then(data => {
          return data;
  });
}


public getAdminArticles(page:number){
  let con="&Page"+page;
  return this.http.get(this.GETADMINARTICLES+con);
}


public getKbArticleById(ArticleId) {
  console.log((this.Edit_Fetch_URL + ArticleId));
  return this.http.get(this.Edit_Fetch_URL + ArticleId);
}

public updateArticle(data: any): Promise<any> {
  return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
      .then(data => {
          return data;
  });
}


public getArticleById(data: any): Promise<any> {
  console.log(data);
  return this.CommonHttpService.globalGetService(this.ReadMore_URL, data)
      .then(data => {
          return data;
      },
          err => {
              console.log(err);
          });
}



public getPageByNumber(ArticleId,CatId) {

  if(CatId==0){
    this.Concat="categ="+"&Page="+ArticleId;
  console.log("Concat"+this.Concat)
    return this.http.get(this.PAGINATION + this.Concat);
    }else{
        this.Concat="categ="+CatId+"&Page="+ArticleId;
  console.log("Concat"+this.Concat)
    return this.http.get(this.PAGINATION + this.Concat);
    }
  }


}
