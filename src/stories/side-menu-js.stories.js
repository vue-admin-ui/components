import { SideMenu, SideMenuItem } from '../../index-js';
import { storiesOf } from '@storybook/vue';
import StoryRouter from '../storybook/router';
import '../element-ui';
import router from '../router';

storiesOf('Components/SideMenu.js', module)
  .addDecorator(StoryRouter({}, router.options))
  .add('Default', () => ({
    components: { SideMenu },
    template: '<side-menu></side-menu>',
  }))
  .add('With Menu', () => ({
    components: { SideMenu, SideMenuItem },
    template: `
      <side-menu label="Промо">
        <side-menu-item to="/" tooltip="Промо">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9231 0H3.07692C1.37785 0 0 1.37723 0 3.07692V16.9231C0 18.6228 1.37785 20 3.07692 20H16.9231C18.6228 20 20 18.6228 20 16.9231V3.07692C20 1.37723 18.6228 0 16.9231 0ZM5.28985 16.7458C4.19754 16.7458 3.31262 15.8609 3.31262 14.768C3.31262 13.6751 4.19754 12.7902 5.28985 12.7902C6.38154 12.7902 7.26708 13.6751 7.26708 14.768C7.26708 15.8609 6.38215 16.7458 5.28985 16.7458ZM5.28985 7.20985C4.19754 7.20985 3.31262 6.32492 3.31262 5.232C3.31262 4.13908 4.19754 3.25415 5.28985 3.25415C6.38154 3.25415 7.26708 4.13908 7.26708 5.232C7.26708 6.32492 6.38215 7.20985 5.28985 7.20985ZM10 11.9778C8.90831 11.9778 8.02277 11.0929 8.02277 10C8.02277 8.90708 8.90769 8.02215 10 8.02215C11.0923 8.02215 11.9772 8.90708 11.9772 10C11.9772 11.0923 11.0911 11.9778 10 11.9778ZM14.7102 16.7458C13.6185 16.7458 12.7329 15.8609 12.7329 14.768C12.7329 13.6751 13.6178 12.7902 14.7102 12.7902C15.8012 12.7902 16.6874 13.6751 16.6874 14.768C16.6874 15.8609 15.8031 16.7458 14.7102 16.7458ZM14.7102 7.20985C13.6185 7.20985 12.7329 6.32492 12.7329 5.232C12.7329 4.13908 13.6178 3.25415 14.7102 3.25415C15.8012 3.25415 16.6874 4.13908 16.6874 5.232C16.6874 6.32492 15.8031 7.20985 14.7102 7.20985Z" fill="white"/>
          </svg>
        </side-menu-item>
        <side-menu-item to="/1" tooltip="Промо">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9231 0H3.07692C1.37785 0 0 1.37723 0 3.07692V16.9231C0 18.6228 1.37785 20 3.07692 20H16.9231C18.6228 20 20 18.6228 20 16.9231V3.07692C20 1.37723 18.6228 0 16.9231 0ZM5.28985 16.7458C4.19754 16.7458 3.31262 15.8609 3.31262 14.768C3.31262 13.6751 4.19754 12.7902 5.28985 12.7902C6.38154 12.7902 7.26708 13.6751 7.26708 14.768C7.26708 15.8609 6.38215 16.7458 5.28985 16.7458ZM5.28985 7.20985C4.19754 7.20985 3.31262 6.32492 3.31262 5.232C3.31262 4.13908 4.19754 3.25415 5.28985 3.25415C6.38154 3.25415 7.26708 4.13908 7.26708 5.232C7.26708 6.32492 6.38215 7.20985 5.28985 7.20985ZM10 11.9778C8.90831 11.9778 8.02277 11.0929 8.02277 10C8.02277 8.90708 8.90769 8.02215 10 8.02215C11.0923 8.02215 11.9772 8.90708 11.9772 10C11.9772 11.0923 11.0911 11.9778 10 11.9778ZM14.7102 16.7458C13.6185 16.7458 12.7329 15.8609 12.7329 14.768C12.7329 13.6751 13.6178 12.7902 14.7102 12.7902C15.8012 12.7902 16.6874 13.6751 16.6874 14.768C16.6874 15.8609 15.8031 16.7458 14.7102 16.7458ZM14.7102 7.20985C13.6185 7.20985 12.7329 6.32492 12.7329 5.232C12.7329 4.13908 13.6178 3.25415 14.7102 3.25415C15.8012 3.25415 16.6874 4.13908 16.6874 5.232C16.6874 6.32492 15.8031 7.20985 14.7102 7.20985Z" fill="white"/>
          </svg>
        </side-menu-item>
      </side-menu>
    `,
  }));