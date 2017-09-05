import { Component } from '@angular/core';

@Component({
  selector: 'admin-manage-article',
  templateUrl: './admin-manage-article.component.html',
  styleUrls: ['./admin-manage-article.component.scss']
})
export class AdminManageArticleComponent {
    _checked = true;

    _console(value) {
        console.log(value);
    }
}