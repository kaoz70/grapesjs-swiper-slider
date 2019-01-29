import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const {
    wrapperName,
    slideSelector,
    containerSelector
  } = constants;

  dc.addType(wrapperName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Wrapper',
        droppable: slideSelector,
        draggable: containerSelector,
        ...config.wrapperProps
      },

      init() {
        const cls = config.classWrapper;
        this.get('classes').pluck('name').indexOf(cls) < 0 && this.addClass(cls);
      }
    }, {
      isComponent(el) {
        if (elHasClass(el, config.classWrapper)) return { type: wrapperName };
      },
    }),

    view: defaultType.view.extend({
      init() {
        this.listenTo(this.model.components(), 'add remove', this.renderSlider);
      },

      renderSlider() {
        const slider = this.model.parent().parent();
        slider && slider.view.render();
      }
    })
  });
}
