/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
// import { TestBed } from '@angular/core/testing';
// import { JsonFormsOutlet, UnknownRenderer } from '@jsonforms/angular';
// import { IonicModule, Platform } from 'ionic-angular';
// import { NgRedux } from '@angular-redux/store';
// import { MockNgRedux } from '@angular-redux/store/testing';
// import { setupMockStore } from '@jsonforms/angular-test';
// import { initComponent } from '@jsonforms/angular-test';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { VerticalLayoutRenderer } from '../src';
// import { PlatformMock } from '../test-config/mocks-ionic';
//
// describe('Vertical layout', () => {
//   let fixture: any;
//   let component: any;
//
//   const data = { foo: true };
//   const schema = {
//     type: 'object',
//     properties: {
//       foo: {
//         type: 'boolean'
//       }
//     }
//   };
//   const uischema = {
//     type: 'VerticalLayout',
//     elements: [
//       {
//         type: 'Control',
//         scope: '#/properties/foo'
//       }
//     ]
//   };
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UnknownRenderer, JsonFormsOutlet, VerticalLayoutRenderer],
//       imports: [IonicModule.forRoot(VerticalLayoutRenderer)],
//       providers: [
//         { provide: Platform, useClass: PlatformMock },
//         { provide: NgRedux, useFactory: MockNgRedux.getInstance }
//       ]
//     })
//       .overrideModule(BrowserDynamicTestingModule, {
//         set: {
//           entryComponents: [UnknownRenderer]
//         }
//       })
//       .compileComponents();
//
//     MockNgRedux.reset();
//     fixture = TestBed.createComponent(VerticalLayoutRenderer);
//     component = fixture.componentInstance;
//   });
//
//   it('add elements', () => {
//     initComponent(fixture, setupMockStore(fixture, { data, schema, uischema }));
//     MockNgRedux.reset();
//     component.uischema = {
//       type: 'VerticalLayout',
//       elements: [
//         ...uischema.elements,
//         {
//           type: 'Control',
//           scope: '#properties/bar'
//         }
//       ]
//     };
//     fixture.detectChanges();
//     expect(component.uischema.elements.length).toBe(2);
//   });
// });
