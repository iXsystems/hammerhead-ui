# [Hammerhead UI](https://ixsystems.github.io/hammerhead-ui/)

### iXsystem's Cross-Project UI Components for Angular

iXsystems builds and maintains many products with the Angular framework. The Hammerhead UI library was created to share Angular components across all of iXsystem's Angular projects.

---

## Installation

Use your favorite package manager to add `hammerhead-ui` to your project.

```sh
yarn add hammerhead-ui
```

Then, add one or more Hammerhead UI modules to your Angular project.

```ts
import { NgModule } from '@angular/core';
import { DataTableModule } from 'hammerhead-ui';

@NgModule({
    imports: [DataTableModule]
})
export class AppModule {}
```

---

## Dependencies

A list of the library's peer dependencies can be found in its [`package.json` file](https://github.com/iXsystems/hammerhead-ui/blob/master/projects/hammerhead-ui/package.json). Generally speaking, the library relies on Angular 8+.

```json
{
    "name": "hammerhead-ui",
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

#### Create a new library component named `my-component`

The `create_component.sh` script is a user-friendly wrapper around some Angular CLI commands. Just pass in the name of your new component:

```sh
bash ./create_component.sh my-component
```

The new component can be found at `./projects/hammerhead-ui/src/lib/components/my-component`. Add your desired functionality to the new component.

#### Expose the component module in the library's public API

This important step makes sure your component is available to library consumers. In `./projects/hammerhead-ui/src/public-api.ts`, export your `my-component` module:

```ts
export * from './lib/components/my-component/my-component.module';
```

#### Don't forget to build the library!

Remember that the demo application uses the compiled version of the library project. As a general rule, any changes to `my-component` should be followed by a library build. You can use the `build_and_watch` command to recompile the library whenever changes are made.

```sh
yarn build_and_watch
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
