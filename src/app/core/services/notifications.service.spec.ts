import {AppComponent} from '../../app.component';
import {UserService} from './user.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NotificationsService} from './notifications.service';
import {NotifierModule} from 'angular-notifier';

describe('NotificationsService', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    const userServiceStub: Partial<UserService> = {populate: () => {}};

    let service: NotificationsService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [
          NotificationsService,
          {provide: UserService, useValue: userServiceStub},
        ],
        imports: [
          NotifierModule,
        ]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      service = TestBed.inject(NotificationsService);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(app).toBeTruthy();
      expect(service).toBeTruthy();
    });

    it('notifier-container should be present on app component', () => {
      const notifierContainer = fixture.nativeElement.querySelector('notifier-container');
      expect(notifierContainer).toBeTruthy();
    });


    describe('on displayError() call', () => {
      it('should display notification', () => {
        service.displayError();
        fixture.detectChanges();
        const notification = fixture.nativeElement.querySelector('notifier-notification');
        expect(notification).toBeTruthy();
      });

      it('notification class should be error', () => {
        service.displayError();
        fixture.detectChanges();
        const notification = fixture.nativeElement.querySelector('notifier-notification');
        expect(notification.className).toContain('notifier__notification--error');
      });
    });



  });

