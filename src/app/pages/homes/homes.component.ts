import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../../app.routes";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
  standalone:true
})
export class HomesComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  gotoHomes(){
    this.router.navigate(['/homes'], {  relativeTo: this.route })
  }

  gotoPropertyPage(){
    this.router.navigate([])
  }

}
