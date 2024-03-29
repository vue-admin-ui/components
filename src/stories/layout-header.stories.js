import '../styles/variables.css';
import '../styles/base.css';
import { LayoutHeader } from '../..';

export default {
  title: 'Components/layout-header',
  component: LayoutHeader,
};

const Template = () => ({
  components: { LayoutHeader },
  template: '<layout-header title="Page Title"></layout-header>',
});

export const Default = Template.bind({});
