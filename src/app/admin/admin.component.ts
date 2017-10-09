import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from './admin.routing';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    isCollapsed = false;
    
    constructor(
      private router: Router
    ) {}
    
    ngOnInit() {
    }

    navigateToAdminHome() {
      this.router.navigate(["admin", "home"])
    }

    navigateToCreateArticle() {
      this.router.navigate(["admin", "create-article"])
    }

    navigateToManageArticle() {
      this.router.navigate(["admin", "manage-article"])
    }

    navigateToAdminCategory() {
      this.router.navigate(["admin", "category"])
    }

    navigateToAdminTag() {
      this.router.navigate(["admin", "tag"])
    }

    navigateToAdminComment() {
      this.router.navigate(["admin", "comment"])
    }

    navigateToAdminMessage() {
      this.router.navigate(["admin", "message"])
    }

    navigateToAdminUser() {
      this.router.navigate(["admin", "user"])
    }

    navigateToChangePassword() {
      console.log("asdgagsd")
      this.router.navigate(["admin", "change-password"])
    }

  

    // navigateToCreateArticle() {
    //   this.router.navigate("/create-article")
    // }
}