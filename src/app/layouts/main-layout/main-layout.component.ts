import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TemplateService } from '@features';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit { 
  public ngTemplate$ = this.templateService.getTemplate$;

  constructor(
    private readonly templateService: TemplateService
  ) {}

  public ngOnInit(): void {
    this.templateService.getTemplate$.subscribe((data) => console.log)    
  }
}
