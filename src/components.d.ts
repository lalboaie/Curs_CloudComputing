/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppMenuRenderer {
    'active': boolean;
    'value': string;
  }
  interface AppProfile {
    'getMyName': Function;
    'lastName': string;
    'match': MatchResults;
  }
  interface AppRoot {
    'controller': any;
    'history': RouterHistory;
  }
  interface MyMenuItem {
    'label': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppMenuRendererElement extends Components.AppMenuRenderer, HTMLStencilElement {}
  var HTMLAppMenuRendererElement: {
    prototype: HTMLAppMenuRendererElement;
    new (): HTMLAppMenuRendererElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMyMenuItemElement extends Components.MyMenuItem, HTMLStencilElement {}
  var HTMLMyMenuItemElement: {
    prototype: HTMLMyMenuItemElement;
    new (): HTMLMyMenuItemElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-menu-renderer': HTMLAppMenuRendererElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-menu-item': HTMLMyMenuItemElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppMenuRenderer extends JSXBase.HTMLAttributes<HTMLAppMenuRendererElement> {
    'active'?: boolean;
    'value'?: string;
  }
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'getMyName'?: Function;
    'lastName'?: string;
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {
    'controller'?: any;
    'history'?: RouterHistory;
    'onRouteChanged'?: (event: CustomEvent<any>) => void;
  }
  interface MyMenuItem extends JSXBase.HTMLAttributes<HTMLMyMenuItemElement> {
    'label'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-menu-renderer': AppMenuRenderer;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'my-menu-item': MyMenuItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


