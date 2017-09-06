import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit { 
    newCategory = {
        active: true,
        name: '新增分类',
        customStyle: {
            'background': '#f7f7f7',
            'border-radius': '4px',
            'margin-bottom': '24px',
            'border': '0px'
        }
    };

    categoryList = [
        {
            active: true,
            name: '技术'
        },
        {
            active: true,
            name: '感悟'
        },
        {
            active: true,
            name: '生活'
        },
        {
            active: true,
            name: '读书'
        },
        {
            active: true,
            name: '随笔'
        },
    ];

    constructor() { }
    
    ngOnInit() { }
}