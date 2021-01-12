import { Injectable, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ModalService<C, T = void> {
  constructor(private readonly modalController: ModalController) {}

  public async show(
    component: Type<C>,
    componentProps?: Partial<C>,
    swipeToClose = true,
    cssClass?: string | string[]
  ): Promise<T | undefined> {
    // On crée le picker
    const modal = await this.modalController.create({
      component,
      componentProps,
      swipeToClose,
      cssClass,
    });

    // On affiche le picker
    await modal.present();

    // On déconstruit la valeur retourné pour coller au type T
    const { data } = await modal.onWillDismiss();

    return data;
  }
}
