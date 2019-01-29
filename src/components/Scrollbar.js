import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { scrollbarName, containerSelector } = constants;
  const classId = config.classScrollbar;
  const type = scrollbarName;

  dc.addType(type, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Scrollbar',
        copyable: 0,
        draggable: containerSelector,
        ...config.scrollbarProps
      },

      init() {
        this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
      }
    }, {
      isComponent(el) {
        if (elHasClass(el, classId)) return { type };
      },
    }),

    view: defaultType.view
  });
}
