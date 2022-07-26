import { Meta, Story } from "@storybook/angular";
import { InputComponent } from "../projects/hammerhead-ui/src/lib/components/input/input.component";
import { moduleMetadata } from '@storybook/angular';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { InputModule } from "../projects/hammerhead-ui/src/lib/components/input/input.module";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Input',
    component: InputComponent,
    decorators: [
      moduleMetadata({
        imports: [InputModule],
      }),
    ],
  } as Meta;
  

  export const Input: Story = () => ({
    props: {},
  });
  