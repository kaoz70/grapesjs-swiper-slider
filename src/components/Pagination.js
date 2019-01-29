import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { paginationName, containerSelector } = constants;
  const classId = config.classPagination;
  const type = paginationName;

  dc.addType(type, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Pagination',
        copyable: 0,
        draggable: containerSelector,
        ...config.paginationProps
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
