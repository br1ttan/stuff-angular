import { ChangeDetectorRef, Directive, inject, TemplateRef } from '@angular/core';
import { TemplateService } from '@features';

@Directive()
export abstract class BaseComponent {
    private readonly templateService = inject(TemplateService);
    
    public updateTemplate(template: TemplateRef<unknown> | null): void {
        setTimeout(() => {
            this.templateService.update(template);
        }, 10);
    }
}
