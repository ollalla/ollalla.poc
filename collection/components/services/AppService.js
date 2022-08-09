var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "inversify";
const ALLOWED_APPS = [
  {
    name: 'OPSTrax',
    landingUrl: `https://www.opstrax.com/opsportal/#/product/trax`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/product/trax`,
    description: 'Collision & Mechanical Ordering',
    isOpsProduct: true,
    order: 1
  },
  {
    name: 'DeliveryTrax',
    landingUrl: `https://www.opstrax.com/opsportal/#/product/deliverytrax`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/product/deliverytrax`,
    description: 'Route & Fleet Management',
    isOpsProduct: true,
    order: 2
  },
  {
    name: 'ValuTrax',
    landingUrl: `https://www.opstrax.com/opsportal/#/product/valutrax`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/product/valutrax`,
    description: 'Claims Management',
    isOpsProduct: true,
    order: 3
  },
  {
    name: 'BackTrax',
    landingUrl: `https://www.opstrax.com/opsportal/#/product/backtrax`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/product/backtrax`,
    description: 'Electronic Parts Returns',
    isOpsProduct: true,
    order: 4
  },
  {
    name: 'TraxPartners',
    landingUrl: `https://www.opstrax.com/opsportal/#/contactus`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/contactus`,
    description: 'Connection Manager',
    isOpsProduct: true,
    order: 5
  },
  {
    name: 'TraxAR',
    landingUrl: `https://www.opstrax.com?query=TraxAR`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/contactus`,
    description: 'Accounting and Payables',
    isOpsProduct: true,
    order: 6
  },
  {
    name: 'SubTrax',
    landingUrl: `https://www.opstrax.com?query=SubTrax`,
    marketingUrl: `https://www.opstrax.com/opsportal/#/contactus`,
    description: 'Sublet Management',
    isOpsProduct: true,
    order: 7
  },
  /* -------------- */
  {
    name: 'CollisionLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/CollisionLink`,
    marketingUrl: `https://www.oeconnection.com?query=CollisionLink`,
    description: 'Collision Ordering',
    isOpsProduct: false,
    order: 8
  },
  {
    name: 'RepairLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/RepairLink`,
    marketingUrl: `https://www.oeconnection.com?query=RepairLink`,
    description: 'Mechanical Ordering',
    isOpsProduct: false,
    order: 9
  },
  {
    name: 'D2DLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/D2DLink`,
    marketingUrl: `https://www.oeconnection.com?query=D2DLink`,
    description: 'Parts Inventory',
    isOpsProduct: false,
    order: 10
  },
  {
    name: 'D2DExpress',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/D2DExpress`,
    marketingUrl: `https://www.oeconnection.com?query=D2DExpress`,
    description: 'Parts Inventory',
    isOpsProduct: false,
    order: 11
  },
  {
    name: 'MyPriceLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/MyPriceLink`,
    marketingUrl: `https://www.oeconnection.com?query=MyPriceLink`,
    description: 'OEM Realtime Pricing',
    isOpsProduct: false,
    order: 12
  },
  {
    name: 'LinkIQ',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/LinkIQ`,
    marketingUrl: `https://www.oeconnection.com?query=LinkIQ`,
    description: 'Performance Monitoring',
    isOpsProduct: false,
    order: 13
  },
  {
    name: 'EPCLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/EPCLink`,
    marketingUrl: `https://www.oeconnection.com?query=EPCLink`,
    description: 'Parts Catalog',
    isOpsProduct: false,
    order: 14
  },
  {
    name: 'ConsumerLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/ConsumerLink`,
    marketingUrl: `https://www.oeconnection.com?query=ConsumerLink`,
    description: 'Parts Marketing',
    isOpsProduct: false,
    order: 15
  },
  {
    name: 'Marketplace Direct',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/MarketplaceDirect`,
    marketingUrl: `https://www.oeconnection.com?query=MarketplaceDirect`,
    description: 'EBAY Sales Channel',
    isOpsProduct: false,
    order: 16
  },
  {
    name: 'FakeLink',
    landingUrl: `https://portal.oecdev.oeconnection.com/#!/FakeLink`,
    marketingUrl: `https://www.oeconnection.com?query=FakeLink`,
    description: 'FakeLink',
    isOpsProduct: false,
    order: 17
  }
];
let AppService = class AppService {
  getAppListing() {
    return Promise.resolve(ALLOWED_APPS);
  }
};
AppService = __decorate([
  injectable()
], AppService);
export { AppService };
