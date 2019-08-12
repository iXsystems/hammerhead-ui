# [Hammerhead UI](https://ixsystems.github.io/hammerhead-ui/)

### iXsystem's Cross-Project UI Components for Angular

iXsystems builds and maintains many products with the Angular framework. The Hammerhead UI library was created to share Angular components across all of iXsystem's Angular projects.

---

## Installation

Use your favorite package manager to add `hammerhead-ui` to your project.

```sh
yarn add hammerhead-ui
```

Then, add `HammerheadUiModule` to a module in your Angular project.

```ts
import { NgModule } from '@angular/core';
import { HammerheadUiModule } from 'hammerhead-ui';

@NgModule({
    imports: [HammerheadUiModule]
})
export class AppModule {}
```

---

## Dependencies

A list of the library's peer dependencies can be found in its [`package.json` file](https://github.com/iXsystems/hammerhead-ui/blob/master/projects/hammerhead-ui/package.json). Generally speaking, the library relies on Angular 8+.

```json
{
    "name": "hammerhead-ui",
    "version": "0.0.1-beta",
    "peerDependencies": {
        "@angular/animations": "8.1.1",
        "@angular/cdk": "8.0.2",
        "@angular/common": "^8.1.1",
        "@angular/core": "^8.1.1",
        "@angular/flex-layout": "^8.0.0-beta.26",
        "@angular/material": "^8.0.2"
    }
}
```

---

## Development

The Hammerhead UI repo consists of two distinct but interrelated projects: the library itself (`hammerhead-ui`) and the library demo web app (`hammerhead-ui-app`). Both are Angular projects, both are managed by the [Angular CLI](https://cli.angular.io/).

Follow these steps to add a component to the library and demo the component in the library's demo app. This tutorial assumes you've cloned the repo to your local machine and you're operating from the root of the repo directory.

#### Create a new library component, `my-component`, using the Angular CLI

The Angular CLI can be used to scaffold out your new library component with a single command.

```sh
ng g c components/my-component --project=hammerhead-ui --export=true --style=scss
```

-   **_The `--project` flag is necessary for all Angular CLI commands since there are two Angular projects in the same workspace._**

-   **_The `--export` flag ensures that the component will be bundled properly when the library is compiled._**

-   **_The Hammerhead UI library uses SCSS for stylesheets._**

Add your desired functionality to the new component.

#### Don't forget to build the library!

Remember that the demo application uses the compiled version of the library project. As a general rule, any changes to `my-component` should be followed by a library build.

```sh
yarn build --project=hammerhead-ui
```

#### Add `my-component` to the project's demo app

To see your component in action, add a new component demo to the project's demo app. Much of the work can be done with a single Angular CLI command.

```sh
ng g c views/components/components/my-component-demo --style=scss --project=hammerhead-ui-app
```

Now that much of the boilerplate for your component demo has been generated, use the `zero-state-demo/` directory as your guide to creating example use-cases for your new component.

-   **_Don't forget to register your examples in `projects/hammerhead-ui-app/src/app/views/components/components-view.module.ts`!_**

#### Register your new demo

Register your new demo in `projects/hammerhead-ui-app/src/app/views/components/components-view.module.ts` by adding your new component to the `COMPONENT_DEMOS` array. After this step, your component demo will be registered in the side-nav navigation list.

```ts
export const COMPONENT_DEMOS = [
    {
        id: 'zero-state',
        name: 'Zero State'
    },
    {
        id: 'my-component',
        name: 'My Component'
    }
];
```

Finally, register your demo with with the app's `Router` in `projects/hammerhead-ui-app/src/app/views/components/components-view.routes.ts`.

```ts
export const ROUTES_COMPONENTS_VIEW: Routes = [
    /* ... */
    {
        path: 'zero-state',
        component: ZeroStateDemoComponent
    },
    {
        path: 'my-component',
        component: MyComponentDemoComponent
    }
];
```

#### Serve the demo app to see your examples in the browser

The demo app is just like any other Angular SPA. Use the usual commands to see your updates to the demo app in the browser.

```sh
yarn start
```

---

## Publishing

Those with publish-access to the project can deploy a new version of the library with a simple bash script located in the root of the project's directory: [`publish_lib.sh`](https://github.com/iXsystems/hammerhead-ui/blob/master/publish_lib.sh).

There are only a few minor notes to keep in mind when publishing:

-   **_You may be prompted to enter your `npm` credentials when running the publishing script. If you do not have publish credentials to the project, you will not be able to run the entire script._**

-   **_Don't forget to bump the version number before running the publish script. The versions of both `package.json` and `projects/hammerhead-ui/package.json` should be bumped and synchronized before every publish._**

---

## Questions? Comments?

Don't hesitate to open a [Github issue](https://github.com/iXsystems/hammerhead-ui/issues/new)!
