// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportJuejin from '../../../app/controller/juejin';
import ExportPage from '../../../app/controller/page';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    juejin: ExportJuejin;
    page: ExportPage;
  }
}
