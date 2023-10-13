import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[boxListener]',
})
export class BoxListenerDirective {
    @Output()
    public closeBox = new EventEmitter<Event>();

    constructor(
        private readonly hostElement: ElementRef<HTMLDivElement>
    ) {}

    @HostListener('document:click', ['$event'])
    public onClick(e: Event): void {
        const element = this.hostElement.nativeElement;

        if (e.target !== element) {
            this.closeBox.emit();
        }
    }
}
