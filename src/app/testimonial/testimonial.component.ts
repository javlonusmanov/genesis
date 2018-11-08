import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  testimonials: object[] = [{
    feed: `Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy,
      when an unknown printer took a galley of type a type specimen book.`,
    by: "Alex Smith",
    from: "Envato Author"
  },
  {
    feed: `Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy,
    when an unknown printer took a galley of type a type specimen book.`,
    by: "Alex Smith",
    from: "Envato Author"
  },
  {
    feed: `Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy,
  when an unknown printer took a galley of type a type specimen book.`,
    by: "Alex Smith",
    from: "Envato Author"
  }]
  constructor() { }

  ngOnInit() {
  }

}
