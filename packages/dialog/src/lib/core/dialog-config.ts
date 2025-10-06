export interface DialogConfig {
  animationDisabled: boolean;
  styleClass?: string;
  contentClass: string;
  backdropClass: string;
  closeOnBackdropClick: boolean;
}

export class NgxDialogConfig implements DialogConfig {
  animationDisabled = false;
  contentClass = '';
  styleClass = '';
  backdropClass = '';
  closeOnBackdropClick = true;

  constructor(
    config: Partial<DialogConfig> = {}
  ) {
    Object.assign(this, config);
  }
}
