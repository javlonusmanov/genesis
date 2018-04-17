import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-footer-content',
    templateUrl: './footer-content.component.html',
    styleUrls: ['./footer-content.component.css']
})
export class FooterContentComponent implements OnInit {
    ngOnInit(): void {
    }

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/at.svg'));
        iconRegistry.addSvgIcon('linkedIn', sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin-logo.svg'));
    }
}
