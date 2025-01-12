import createTabbedEditor from '@/components/visualizations/editor/createTabbedEditor';

import GeneralSettings from './GeneralSettings';
import GroupsSettings from './GroupsSettings';
import StyleSettings from './StyleSettings';

export default createTabbedEditor([
  { key: 'General', title: 'General', component: GeneralSettings },
  { key: 'Groups', title: 'Groups', component: GroupsSettings },
  { key: 'Style', title: 'Style', component: StyleSettings },
]);
