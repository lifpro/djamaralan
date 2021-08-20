import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from '../models/etudiant';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  etat: number = 0;// 0:Sans compte,1:Inscrit,2:Connecté
  imgUrl = "../assets/img/logo.png";
  image = '../assets/img/user.png';
  item: Etudiant;
  form: FormGroup;
  collection: AngularFirestoreCollection;
  document: AngularFirestoreDocument<Etudiant>
  constructor(protected fb: FormBuilder,
    public databaseService: AngularFirestore,
    public authService: AngularFireAuth,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    public toast: ToastController) {
    this.collection = databaseService.collection('etudiants');
    this.item = new Etudiant();
    this.item.cycle = "M";
    this.item.sexe = "H";
    this.item.prenom = "Fatim";
    this.item.nom = "DIARRA";
    this.item.email = "fatim@gmail.com";
    this.item.telephone = "+22356789076";
    this.item.pwd = "123456";
    this.item.niveau = "1";
    this.item.formation = "Télécom";
    this.item.centre = "Bamako - Adeken";
    this.item.pwd = "123456";
    this.item.annee = "2020-2021";
    this.form = this.fb.group({
      prenom: this.fb.control(this.item.prenom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      nom: this.fb.control(this.item.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      sexe: this.fb.control(this.item.sexe, [Validators.required]),
      telephone: this.fb.control(this.item.telephone, [Validators.required, Validators.minLength(8), Validators.maxLength(13)]),
      email: this.fb.control(this.item.email, [Validators.required, Validators.email]),
      cycle: this.fb.control(this.item.cycle, [Validators.required]),
      niveau: this.fb.control(this.item.niveau, [Validators.required]),
      formation: this.fb.control(this.item.formation, [Validators.required]),
      centre: this.fb.control(this.item.centre, [Validators.required]),
      annee: this.fb.control(this.item.annee, [Validators.required]),
      cours: this.fb.control(this.item.cours),
      pwd: this.fb.control(this.item.pwd, [Validators.required, Validators.minLength(6)]),
    });

    this.form.get('prenom').valueChanges.subscribe(v => {
      this.item.prenom = v;
    });
    this.form.get('nom').valueChanges.subscribe(v => {
      this.item.nom = v;
    });
    this.form.get('sexe').valueChanges.subscribe(v => {
      this.item.sexe = v;
    });
    this.form.get('telephone').valueChanges.subscribe(v => {
      this.item.telephone = v + "";
    });
    this.form.get('email').valueChanges.subscribe(v => {
      this.item.email = v;
    });
    this.form.get('cycle').valueChanges.subscribe(v => {
      this.item.cycle = v;
    });
    this.form.get('niveau').valueChanges.subscribe(v => {
      this.item.niveau = v;
    });
    this.form.get('formation').valueChanges.subscribe(v => {
      this.item.formation = v;
    });
    this.form.get('centre').valueChanges.subscribe(v => {
      this.item.centre = v;
    });
    this.form.get('annee').valueChanges.subscribe(v => {
      this.item.annee = v;
    });
    this.form.get('cours').valueChanges.subscribe(v => {
      this.item.cours = v;
    });
    this.form.get('pwd').valueChanges.subscribe(v => {
      this.item.pwd = v;
    });
  }

  inscription() {
    if (this.item.telephone.includes('+')) {
      this.item.telephone = this.item.telephone.replace('+', '');
    }

    this.authService.createUserWithEmailAndPassword(this.item.email, this.item.pwd).then(async auth => {
      this.item.id = auth.user.uid;
      this.collection.doc(this.item.id).set(Object.assign({}, this.item));
      const mymessage = await this.toast.create({
        message: 'Compte créé avec succès',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      mymessage.present();
    }).catch(async error => {
      console.log(error)
      const mymessage = await this.toast.create({
        message: "Une erreur est survenue lors de l'inscription",
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      mymessage.present();
    })


  }
  updateDocument() {
    this.collection.doc(this.item.id).update(Object.assign({}, this.item));
  }

  deleteDocument() {
    this.collection.doc(this.item.id).delete();
  }
  async addPhoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choisir',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('camera');
            this.recupererViaCamera();
          }
        }, {
          text: 'Gallerie',
          icon: 'image',
          handler: () => {
            console.log('galerie');
            this.recupererViaGallerie();
          }
        }, {
          text: 'Fermer',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();

  }
  async recupererViaCamera() {
    const base64 = await this.captureImage(this.camera.PictureSourceType.CAMERA);
    this.image = 'data:image/jpg;base64,' + base64;
  }
  async recupererViaGallerie() {
    const base64 = await this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    this.image = 'data:image/jpg;base64,' + base64;
  }

  async captureImage(source) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true,
      sourceType: source
    };
    return await this.camera.getPicture(options);
  }
}
