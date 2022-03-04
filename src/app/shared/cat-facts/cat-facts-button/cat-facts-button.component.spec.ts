import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CatFactsButtonComponent} from './cat-facts-button.component';
import {CatFactsService} from '../cat-facts.service';
import {NotificationsService} from '../../../core/services/notifications.service';
import {CatFact} from '../catFact';
import Spy = jasmine.Spy;


const mockCatFact: CatFact = {
  'status': {
    'verified': true,
    'sentCount': 1
  },
  '_id': '591f98703b90f7150a19c125',
  '__v': 0,
  'text': 'An adult cat has 30 teeth, 16 on the top and 14 on the bottom.',
  'source': 'api',
  'type': 'cat',
  'updatedAt': '2020-08-23T20:20:01.611Z',
  'createdAt': '2018-01-04T01:10:54.673Z',
  'deleted': false,
  'used': false,
  'user': '5a9ac18c7478810ea6c06381'
};

describe('CatFactsButtonComponent',
  () => {
    let component: CatFactsButtonComponent;
    let fixture: ComponentFixture<CatFactsButtonComponent>;

    const catFactsServiceSpy = jasmine.createSpyObj('CatFactsService', ['getCatFact']);
    const notificationsServiceSpy = jasmine.createSpyObj('NotificationsService', ['displayError']);

    let button;
    let outputSpy: Spy;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CatFactsButtonComponent],
        providers: [
          {provide: CatFactsService, useValue: catFactsServiceSpy},
          {provide: NotificationsService, useValue: notificationsServiceSpy},
        ]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(CatFactsButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    beforeEach(() => {
      button = fixture.nativeElement.querySelector('button');
      outputSpy = spyOn(component.catFact, 'emit');
      catFactsServiceSpy.getCatFact.calls.reset();
      notificationsServiceSpy.displayError.calls.reset();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });


    describe('when api returns proper values', () => {

      beforeEach(() => {
        catFactsServiceSpy.getCatFact.and.returnValue(Promise.resolve(mockCatFact));
      });

      it('should return output value on click', fakeAsync(() => {
        button.click();
        tick();
        expect(outputSpy).toHaveBeenCalledOnceWith(mockCatFact);
      }));

      it('should set isLoading to true during api call and to false after the call', fakeAsync(() => {
        button.click();
        expect(component.isLoading).toBeTrue();
        tick();
        expect(component.isLoading).toBeFalse();
      }));

    });

    describe('when api returns error', () => {
      beforeEach(() => {
        catFactsServiceSpy.getCatFact.and.returnValue(Promise.reject());
      });

      it('should call notification service', fakeAsync(() => {
        button.click();
        tick();
        expect(notificationsServiceSpy.displayError.calls.count()).toBe(1);
      }));

      it('should set isLoading to true during api call and to false after error', fakeAsync(() => {
        button.click();
        expect(component.isLoading).toBeTrue();
        tick();
        expect(component.isLoading).toBeFalse();
      }));
    });

  });

