import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TemplateService } from '@features';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  public ngTemplate$ = this.templateService.getTemplate$;

  constructor(
    private readonly templateService: TemplateService
  ) {}
}
