import { KbarticlesService } from '../../services/appservices/kbarticles.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DdlCatogoryName } from '../../classes/ddlcategory';
import { KBArticles } from '../../classes/kbarticles';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  text: string;

  addForm: FormGroup;
  // msgs: Message[] = [];
  constructor(private fb: FormBuilder, private data: KbarticlesService,private route:Router) { }
  cat: DdlCatogoryName[] = [];
  ngOnInit() {
    this.data.getCategory().subscribe(
        (data:DdlCatogoryName[])=>{
          this.cat=data;
          console.log(this.cat);
        }
      );
    this.addForm = this.fb.group({
      article_name: new FormControl(),
      content: new FormControl(),
      category_id: new FormControl()
      //category_name: new FormControl(),
    });

  }

  onAddArticle() {
    this.data.addArticle(
      new KBArticles(
        this.addForm.value.article_id,
        this.addForm.value.article_name,
        this.addForm.value.content,
        this.addForm.value.previewcontent,
        this.addForm.value.category_id,
        this.addForm.value.category_name,
        this.addForm.value.created_by,
        this.addForm.value.created_by_name,
        this.addForm.value.created_date,
        this.addForm.value.modified_by,
        this.addForm.value.modified_by_name,
        this.addForm.value.modified_date
      ));


}

  onClickClose() {
    this.route.navigate(['/user-profile']);
  }
}
