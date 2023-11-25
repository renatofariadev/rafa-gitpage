import navMenu from './navigation/pt-br-menu.json';
import navHome from './navigation/pt-br-home.json';
import navFooter from './navigation/pt-br-footer.json';
import institutionalAbout from './institutional/pt-br-about.json';
import { ptBRResume } from './institutional/pt-br-resume/resume.translation';
import institutionalProject from './institutional/pt-br-projects.json';
import institutionalContact from './institutional/pt-br-contact.json';
import { PrivacyPtBR } from './institutional/pt-br-privacy/privacy.translation';

export class PtBrTranslation {
  static navMenu = navMenu;
  static navHome = navHome;
  static navFooter = navFooter;
  static institutionalAbout = institutionalAbout;
  static institutionalResume = ptBRResume;
  static institutionalProject = institutionalProject;
  static institutionalContact = institutionalContact;
  static institutionalPrivacy = PrivacyPtBR;
}
