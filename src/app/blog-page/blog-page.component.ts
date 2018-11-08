import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  blogs: object[] = [{
    name: "The Best WordPress Real Estate Themes & Pluginssss",
    content: "It’s not wrong to say that perfection in web design is something that doesn't really exist. But that doesn't mean"
  }, {
    name: "4 Deadly Sins of UI and UX Design You Need to Avoid",
    content: "When you're just getting started, it's hard to know what advice to listen to, and what to ignore. Finding your …" 
  }, {
    name: "The Best Advice for Novice Web Designers in 2018",
    content: "When you're just getting started, it's hard to know what advice to listen to, and what to ignore. Finding your …"
  }, {
    name: "20 Stellar Science Fiction After Effects Templates",
    content: "We’ve assembled a collection of sci-fi After Effects templates most likely to induce awe and wonder and tried to pick …"
  }]
  constructor() { }

  ngOnInit() {
  }

}
