import { Component } from '@angular/core';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.scss']
})
export class AdminCreateArticleComponent { 
     // 富文本编辑器设置
    editorConfig: Object = {
        height: 500,
        placeholderText: '请在此输入!'
    };

    // 分类选择器
    options = [
        { value: '技术', label: '技术'},
        { value: '演讲', label: '演讲'},
        { value: '生活', label: '生活'},
        { value: '读书', label: '读书'},
        { value: '随笔', label: '随笔'},
    ];

    editorContent: string = "";

    single = '技术';

    // 标题框内容
    inputValue: string;

    _console(value) {
        console.log(value);
    }

    onClickMe() {
        console.log(this.editorContent)
    }

    constructor() { }

    ngOnInit() {
    }
}