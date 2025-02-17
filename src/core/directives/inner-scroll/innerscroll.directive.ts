import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '.inner-scroll'
})
export class InnerScrollDirective implements OnInit, OnDestroy
{
    // Private
    private _parent: any;
    private _grandParent: any;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {FuseMatchMediaService} _fuseMediaMatchService
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent
        this._parent = this._renderer.parentNode(this._elementRef.nativeElement);

        // Return, if there is no parent
        if ( !this._parent )
        {
            return;
        }

        // Get the grand parent
        this._grandParent = this._renderer.parentNode(this._parent);

        this._addClass();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Return, if there is no parent
        if ( !this._parent )
        {
            return;
        }

        // Remove the class
        this._removeClass();

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add the class name
     *
     * @private
     */
    private _addClass(): void
    {
        // Add the inner-scroll class
        this._renderer.addClass(this._grandParent, 'inner-scroll');
    }

    /**
     * Remove the class name
     * @private
     */
    private _removeClass(): void
    {

        // Remove the inner-scroll class
        this._renderer.removeClass(this._grandParent, 'inner-scroll');
    }
}
